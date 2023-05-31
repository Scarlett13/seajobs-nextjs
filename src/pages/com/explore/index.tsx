import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Checkbox from "../../../components/forms/Checkbox";
import { useUser } from "../../../contexts/AmplifyAuthContext";
import ExploreMainLayout from "../../../page_components/explore/layouts/ExploreMainLayout";
import ExploreSectionLayout from "../../../page_components/explore/layouts/ExploreSectionLayout";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import {
  GetKonsultanQuery,
  ListProjectsQuery,
  ListProjectsQueryVariables,
  ListTenagaAhlisQuery,
  ListTenagaAhlisQueryVariables,
} from "../../../API";
import * as queries from "../../../graphql/queries";
import usePush from "@utils/UsePush";
import { DateTime } from "luxon";
import { filter } from "smart-array-filter";
import { keahlianDbToValue } from "../../../libs/StringUtils";
import { IAmplifyExploreTaCards } from "../../../constants/tacardconstants/TaCardConstants";
import TaCards from "../../../page_components/explore/cards/tacards/TaCard";

interface ITenagaFilter {
  expertise: string[];
}

const today = DateTime.now().toFormat("yyyy-MM-dd");

export default function Explore() {
  const {
    user,
    authenticated,
    setUser,
    setAuthenticated,
    loading,
    setLoading,
  } = useUser();

  const [expertiseFilter, setExpertiseFilter] = useState<ITenagaFilter>({
    expertise: [],
  });
  const [filterKeahlian, setFilterKeahlian] = useState<string[]>([]);
  const [listAllTenagaAhli, setListAllTenagaAhli] = useState<
    IAmplifyExploreTaCards[]
  >([]);
  const [filteredTenagaAhli, setFilteredTenagaAhli] = useState<
    IAmplifyExploreTaCards[]
  >([]);
  const [userId, setUserId] = useState<string>("");

  const push = usePush();

  const methods = useForm({
    mode: "onTouched",
  });

  //------------------ Check user START ----------------------//

  useEffect(() => {
    async function checkUser() {
      setLoading(true);
      try {
        const amplifyUser = await Auth.currentAuthenticatedUser();
        if (!userId) {
          setUserId(amplifyUser.getUsername());
          setLoading(false);
        } else {
          setLoading(false);
          return false;
        }

        console.log("masuk ke loading false 1");
      } catch (error) {
        // No current signed in user.
        console.error("error getuser: ", error);
        setLoading(false);
      }
    }

    checkUser();
  }, []);

  //------------------ Check user END ----------------------//

  //------------------ Fetch data START ----------------------//
  useEffect(() => {
    const getTa = async () => {
      if (!user || !userId) {
        return;
      }
      setLoading(true);

      const getTa = await API.graphql<GraphQLQuery<GetKonsultanQuery>>(
        graphqlOperation(queries.getKonsultan, {
          konsultanId: userId,
        })
      );

      if (!getTa.data || !getTa.data.getKonsultan) {
        setLoading(false);
        push(`/com/profile/editprofile/${user.getUsername()}`);
      }

      const listTaResults = await API.graphql<
        GraphQLQuery<ListTenagaAhlisQuery>
      >({ query: queries.listTenagaAhlis });

      // console.log("listTaResults: ", listTaResults);

      if (
        listTaResults.data &&
        listTaResults.data.listTenagaAhlis &&
        listTaResults.data.listTenagaAhlis.items
      ) {
        const tempdummy: IAmplifyExploreTaCards[] = listTaResults.data
          .listTenagaAhlis.items as IAmplifyExploreTaCards[];
        setListAllTenagaAhli(tempdummy);

        setFilteredTenagaAhli(tempdummy);

        const tempListAllKeahlian = tempdummy.map(function (el) {
          return el.taExpertise;
        });

        let tempListAllKeahlianString: string[] = [];

        tempListAllKeahlian.forEach((item) => {
          const listitems = keahlianDbToValue(item);

          if (!listitems || listitems.length === 0) {
            return;
          }

          listitems.forEach((keahlian) => {
            tempListAllKeahlianString = [
              ...tempListAllKeahlianString,
              keahlian,
            ];
          });
        });

        tempListAllKeahlianString = tempListAllKeahlianString.filter(
          (value, index) => tempListAllKeahlianString.indexOf(value) === index
        );

        setFilterKeahlian(tempListAllKeahlianString);
      }

      setLoading(false);
    };

    // if (submitStatus) {
    getTa();
  }, [user, userId]);

  //------------------ Fetch data END ----------------------//

  //------------------ Filter handler START ----------------------//
  useEffect(() => {
    // console.log(expertiseFilter);
    const keywordcategories = expertiseFilter.expertise
      .join(",")
      .replace(/Ahli/g, "");

    let filtered;

    if (keywordcategories && keywordcategories.length > 5) {
      filtered = filter(listAllTenagaAhli, {
        predicate: "OR",
        keywords: `taExpertise:${keywordcategories}`,
      });
    } else {
      filtered = listAllTenagaAhli;
    }

    setFilteredTenagaAhli(filtered);
  }, [expertiseFilter]);

  //------------------ Filter handler END ----------------------//

  //------------------ Checkbox handler START ----------------------//

  function onKeahlianCheckBoxChanged(checked: boolean, label: string) {
    let temparraykeahlian = expertiseFilter.expertise;

    if (!checked) {
      temparraykeahlian.forEach((item, index) => {
        if (item === label) temparraykeahlian.splice(index, 1);
      });
    } else {
      temparraykeahlian = [...temparraykeahlian, label];
    }

    const tempArrayFilterProject: ITenagaFilter = {
      expertise: temparraykeahlian,
    };

    setExpertiseFilter(tempArrayFilterProject);
  }

  //------------------ Checkbox handler END ----------------------//

  const {
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
    setValue,
  } = methods;

  return (
    <ExploreMainLayout user={user}>
      <div className="layout relative flex min-h-screen flex-row justify-center py-12 text-center bg-white ">
        <div className="bg-white lg:w-1/4 md:w-1/3 pr-12 hidden md:block pl-12 md:pl-8 md:pr-8">
          <aside className="self-start position-relative w-100 sticky top-0 pb-12">
            <h1 className="ml-1 text-gray-900 text-left mb-2">Filter</h1>
            <div className=" ps-5 text-white bg-gray-100">
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(() => {})}>
                  <div className="border-2 border-gray-300 ">
                    <div className="text-left  pt-2 dark:border-gray-300 mx-2 text-lg ml-4 py-2 items-center pb-4">
                      <p className="mb-2 text-gray-900">Keahlian</p>
                      <section className="max-h-80 overflow-y-auto">
                        {filterKeahlian.map((keahlian) => {
                          return (
                            <Checkbox
                              key={keahlian}
                              customTextClass="text-gray-900"
                              label={keahlian}
                              name={keahlian}
                              onChange={(value) => {
                                onKeahlianCheckBoxChanged(
                                  value.target.checked,
                                  value.target.name
                                );
                                // console.log(value.target.name);
                              }}
                            ></Checkbox>
                          );
                        })}
                      </section>
                    </div>
                  </div>
                </form>
              </FormProvider>
            </div>
          </aside>
        </div>

        <div className="mx-4 mt-4 mb-24 w-2/3 lg:w-3/4 xl:w-6/12 xl:pr-12 lg:pr-12 md:pr-8">
          <ExploreSectionLayout isTa={false}>
            {loading ? (
              <p className="text-white">Sedang mencari proyek...</p>
            ) : filteredTenagaAhli.length < 1 ? (
              <p className="text-white">Belum ada proyek available</p>
            ) : (
              filteredTenagaAhli.map((ta) => {
                return (
                  <section className="pb-4" key={ta.taId}>
                    <TaCards taDetail={ta} isTa={false} />
                  </section>
                );
              })
            )}
          </ExploreSectionLayout>
        </div>
      </div>
    </ExploreMainLayout>
  );
}

Explore.authenticate = true;
