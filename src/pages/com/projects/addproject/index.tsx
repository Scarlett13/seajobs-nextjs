import usePush from "@utils/UsePush";
import { useUser } from "../../../../contexts/AmplifyAuthContext";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Auth } from "aws-amplify";
import PrimaryLayout from "../../../../components/layouts/primary/PrimaryLayout";
import { addProject } from "../../../../constants/addprojectconstants/AddProjectConstants";
import SearchableSelectInput from "../../../../components/forms/SearchableSelectInput";
import Typography from "../../../../components/typography/Typography";
import TextArea from "../../../../components/forms/TextArea";
import DatePicker from "../../../../components/forms/DatePicker";
import Input from "../../../../components/forms/Input";
import MainCtaButton from "../../../../components/buttons/mainctabutton/MainCtaButton";
import {
  keahlianDbToValue,
  keahlianValueToDb,
} from "../../../../libs/StringUtils";
import v4 from "uuid-browser/v4";
import { DateTime } from "luxon";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "../../../../graphql/mutations";
import * as queries from "../../../../graphql/queries";
import { CreateProjectMutation } from "../../../../API";

export default function AddProject() {
  const listProvince = require("../../../../constants/addprojectconstants/ProvinsiConstants.json");

  const push = usePush();

  const {
    user,
    authenticated,
    setUser,
    setAuthenticated,
    loading,
    setLoading,
  } = useUser();

  const [userId, setUserId] = useState<string>("");
  const [minProjectStart, setMinProjectStart] = useState<Date>();

  const methods = useForm({
    mode: "onTouched",
  });

  const {
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
    setValue,
  } = methods;

  const [submitStatus, setSubmitStatus] = useState(Boolean);

  useEffect(() => {
    if (minProjectStart) setValue("project_deadline", null);
  }, [minProjectStart]);

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
  const testgg = keahlianDbToValue(
    "ahli_hukum,ahli_risiko,arsitektur,ahli_sosial_larap"
  );
  if (testgg) {
    const testgg2 = keahlianValueToDb(testgg);
    console.log("testgg: ", testgg);
  }
  //------------------ Submit Form START ----------------------//
  const onSubmit = async (data: any) => {
    // logger({ data }, 'rhf.tsx line 33');
    console.log("submitdata: ", data.bidang_keahlian.toString());

    // submitListPengalaman(data);

    // !STARTERCONF Remove console log, use logger instead
    // // eslint-disable-next-line no-console
    // if (data.proyek_selesai && data.proyek_selesai < data.proyek_dimulai) {
    //   return;
    // }
    if (!loading) {
      await submitListPengalaman(data);
    } else {
      console.log("lagi loading");
    }

    return;
  };

  const submitListPengalaman = async (data: any) => {
    setLoading(true);

    const newProject = {
      projectId: v4(),
      projectTitle: data.project_name,
      projectLocation: data.project_area,
      projectValue: `${data.project_value}`,
      projectDuration: data.project_duration,
      projectStart: DateTime.fromISO(
        new Date(data.project_start).toISOString()
      ).toFormat("yyyy-MM-dd"),
      projectCategories: data.bidang_keahlian.toString(),
      projectDescription: data.project_detail,
      projectClient: data.project_client,
      projectDeadline: DateTime.fromISO(
        new Date(data.project_deadline).toISOString()
      ).toFormat("yyyy-MM-dd"),
      projectOwner: userId,
      isActive: "true",
      projectStatus: "Aktif",
      isDeleted: false,
    };

    console.log("data disubmit: ", newProject);
    try {
      let newTa;

      newTa = await API.graphql<GraphQLQuery<CreateProjectMutation>>({
        query: mutations.createProject,
        variables: { input: newProject },
      });

      setSubmitStatus(true);
      console.log("success submit: ", newTa);
      setLoading(false);

      push(`/com/dashboard`);
    } catch (error) {
      setSubmitStatus(false);
      setLoading(false);
      console.log("error submit: ", error);
    }

    setLoading(false);
  };
  //------------------ Submit Form END ----------------------//

  const dataKeahlian = require("../../../../constants/profileformconstants/bidang_keahlian.json");

  return (
    <PrimaryLayout user={user}>
      <main className=" w-full layout relative flex min-h-screen flex-row py-12 text-left bg-white xl:px-16 lg:px-12 md:px-8 sm:px-2 xs:px-2">
        <div className=" container mx-auto flex flex-col  text-left bg-gray-100 w-full xl:px-16 lg:px-12 md:px-8 sm:px-2 xs:px-2 py-8 space-y-8">
          <Typography variant="h1" color="primary">
            Tambah proyek
          </Typography>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className=" space-y-3 pb-4">
              {addProject.map((field) => {
                if (field.type === "bidang_keahlian") {
                  return (
                    <section key={field.titelKey} className="mb-4">
                      <p className="mb-2 font-light text-gray-900">
                        {field.labelText}
                      </p>
                      <SearchableSelectInput
                        id={field.id}
                        placeholder="Pilih keahlian"
                        options={dataKeahlian}
                        validation={
                          field.isRequired === true
                            ? { required: `${field.labelText} harus di isi!` }
                            : undefined
                        }
                        label={null}
                        isMulti={true}
                        isTa={false}
                      />
                    </section>
                  );
                } else if (field.type === "text_area") {
                  return (
                    <section key={field.titelKey} className={"mb-4"}>
                      <p className="mb-2 font-light text-gray-900">
                        {field.labelText}
                      </p>
                      <TextArea
                        isTa={false}
                        id={field.id}
                        label={null}
                        disabled={false}
                        validation={
                          field.isRequired === true
                            ? { required: `${field.labelText} harus di isi!` }
                            : undefined
                        }
                        placeholder={field.placeholder}
                        maxLength={200}
                      />
                    </section>
                  );
                } else if (field.type === "date") {
                  return field.id === "project_deadline" ? (
                    <section key={field.titelKey} className={"mb-4"}>
                      <p className="mb-2 font-light text-gray-900">
                        {field.labelText}
                      </p>
                      <DatePicker
                        isTa={false}
                        id={field.id}
                        label={null}
                        minDate={new Date()}
                        maxDate={
                          minProjectStart
                            ? (minProjectStart as Date)
                            : undefined
                        }
                        disabled={minProjectStart ? false : true}
                        validation={{
                          required: `${field.labelText} harus di isi!`,
                          valueAsDate: false,
                        }}
                        placeholder={
                          minProjectStart
                            ? field.placeholder
                            : "Pilih tanggal proyek dimulai terlebih dahulu"
                        }
                      />
                    </section>
                  ) : (
                    <section key={field.titelKey} className={"mb-4"}>
                      <p className="mb-2 font-light text-gray-900">
                        {field.labelText}
                      </p>
                      <DatePicker
                        isTa={false}
                        id={field.id}
                        label={null}
                        minDate={new Date()}
                        validation={{
                          required: `${field.labelText} harus di isi!`,
                          valueAsDate: false,
                        }}
                        customState={setMinProjectStart}
                        placeholder={field.placeholder}
                      />
                    </section>
                  );
                } else if (field.type === "number") {
                  return field.id === "project_duration" ? (
                    <section key={field.titelKey} className={"mb-4"}>
                      <p className="mb-2 font-light text-gray-900">
                        {field.labelText}
                      </p>
                      <Input
                        isTa={false}
                        id={field.id}
                        type={field.type}
                        label={null}
                        disabled={false}
                        validation={{
                          required: {
                            value: field.isRequired,
                            message: `${field.labelText} harus di isi!`,
                          },
                          min: {
                            value: 1,
                            message: "Nilai terlalu kecil!",
                          },
                          pattern: {
                            value: /^[1-9]\d*$/gi,
                            message: "Angka tidak valid",
                          },
                          maxLength: {
                            value: 3,
                            message: "Angka tidak valid",
                          },
                        }}
                        placeholder={field.placeholder}
                        helperText={undefined}
                      />
                    </section>
                  ) : (
                    <section key={field.titelKey} className={"mb-4"}>
                      <p className="mb-2 font-light text-gray-900">
                        {field.labelText}
                      </p>
                      <Input
                        isTa={false}
                        id={field.id}
                        type={field.type}
                        label={null}
                        disabled={false}
                        validation={{
                          required: {
                            value: field.isRequired,
                            message: `${field.labelText} harus di isi!`,
                          },
                          min: {
                            value: 1,
                            message: "Nilai terlalu kecil!",
                          },
                          pattern: {
                            value: /^[1-9]\d*$/gi,
                            message: "Angka tidak valid",
                          },
                        }}
                        placeholder={field.placeholder}
                        helperText={undefined}
                      />
                    </section>
                  );
                } else if (field.type === "project_area") {
                  return (
                    <section key={field.titelKey} className="mb-4">
                      <p className="mb-2 font-light text-gray-900">
                        {field.labelText}
                      </p>
                      <SearchableSelectInput
                        id={field.id}
                        placeholder={field.placeholder}
                        options={listProvince}
                        disabled={false}
                        validation={
                          field.isRequired === true
                            ? { required: `${field.labelText} harus dipilih!` }
                            : undefined
                        }
                        label={null}
                        isMulti={false}
                        isTa={false}
                      />
                    </section>
                  );
                } else {
                  return (
                    <section key={field.titelKey} className={"mb-4"}>
                      <p className="mb-2 font-light text-gray-900">
                        {field.labelText}
                      </p>
                      <Input
                        isTa={false}
                        id={field.id}
                        type={field.type}
                        label={null}
                        disabled={false}
                        validation={{
                          required: {
                            value: field.isRequired,
                            message: `${field.labelText} harus di isi!`,
                          },
                        }}
                        placeholder={field.placeholder}
                        helperText={undefined}
                      />
                    </section>
                  );
                }
              })}
            </form>
          </FormProvider>
          <MainCtaButton
            className="border-1 py-3 my-8 px-6 w-full sm:px-6 bg-main-cta-button-bg rounded font-bold text-black  items-end"
            buttonName="Simpan"
            isLoading={loading}
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </main>
    </PrimaryLayout>
  );
}

AddProject.authenticate = true;
