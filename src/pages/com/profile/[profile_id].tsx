import usePush from "@utils/UsePush";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  CreateKonsultanMutation,
  GetKonsultanQuery,
  UpdateKonsultanMutation,
} from "../../../API";
import MainCtaButton from "../../../components/buttons/mainctabutton/MainCtaButton";
import Input from "../../../components/forms/Input";
import SearchableSelectInput from "../../../components/forms/SearchableSelectInput";
import TextArea from "../../../components/forms/TextArea";
import PrimaryLayout from "../../../components/layouts/primary/PrimaryLayout";
import Typography from "../../../components/typography/Typography";
import {
  companyProfileFormFields,
  FormFields,
} from "../../../constants/companyprofileconstants/CompanyProfileFormConstants";
import { useUser } from "../../../contexts/AmplifyAuthContext";
import {} from "../../../API";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "../../../graphql/mutations";
import * as queries from "../../../graphql/queries";
import React from "react";

export default function Profile() {
  const {
    user,
    authenticated,
    setUser,
    setAuthenticated,
    loading,
    setLoading,
  } = useUser();

  const push = usePush();
  const router = useRouter();
  const { profile_id } = router.query;

  useEffect(() => {
    if (user) {
      if ((profile_id as string) !== user.getUsername()) {
        push(`/com/profile/${user.getUsername()}`);
      }
    }
  }, [user]);

  const companyProfileFieldsComp = companyProfileFormFields;
  let companyProfileFieldsState: any = {};
  companyProfileFieldsComp.forEach(
    (field: FormFields) => (companyProfileFieldsState[field.id] = "")
  );

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

  React.useEffect(() => {
    const getKonsultan = async () => {
      if (!profile_id) {
        return;
      }
      setLoading(true);
      const getKonsultanResult = await API.graphql<
        GraphQLQuery<GetKonsultanQuery>
      >(
        graphqlOperation(queries.getKonsultan, {
          konsultanId: profile_id,
        })
      );

      console.log("resultnyaa:", getKonsultanResult);

      if (getKonsultanResult.data && getKonsultanResult.data.getKonsultan) {
        setValue(
          "pic_fullname",
          getKonsultanResult.data.getKonsultan.konsultanPIC
        );
        setValue(
          "company_name",
          getKonsultanResult.data.getKonsultan.konsultanName
        );
        setValue(
          "business_email",
          getKonsultanResult.data.getKonsultan.konsultanEmail
        );
        setValue(
          "company_phone",
          getKonsultanResult.data.getKonsultan.konsultanPhoneNumber
        );
        setValue(
          "company_address",
          getKonsultanResult.data.getKonsultan.konsultanAddress
        );
        setValue(
          "company_description",
          getKonsultanResult.data.getKonsultan.konsultanDescription
        );
        setValue(
          "employee_number",
          getKonsultanResult.data.getKonsultan.konsultanRangeTotalEmployees
        );
      }

      setLoading(false);
    };

    console.log("fired at once! ", router);
    getKonsultan();
  }, [profile_id]);

  const onSubmit = async (data: any) => {
    // logger({ data }, 'rhf.tsx line 33');
    console.log("submitdata");

    // submitListPengalaman(data);

    // !STARTERCONF Remove console log, use logger instead
    // // eslint-disable-next-line no-console
    // if (data.proyek_selesai && data.proyek_selesai < data.proyek_dimulai) {
    //   return;
    // }

    return;
  };

  const jumlahKaryawan = require("../../../constants/companyprofileconstants/jumlah_karyawan.json");

  return (
    <PrimaryLayout user={user}>
      <section className=" w-full layout relative flex min-h-screen flex-row items-center py-12 text-left bg-white xl:px-16 lg:px-12 md:px-8 sm:px-2 xs:px-2">
        <div className=" container mx-auto flex flex-col  text-left bg-gray-100 w-full xl:px-16 lg:px-12 md:px-8 sm:px-2 xs:px-2 py-8">
          <Typography variant="h1" color="primary">
            Identitas perusahaan
          </Typography>

          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w space-y-3 pb-4 mt-8"
            >
              {companyProfileFieldsComp.map((field: FormFields) => {
                if (field.type === "email") {
                  return (
                    <section key={field.titelKey} className={"mb-4"}>
                      <p className="mb-2 font-light text-gray-900">
                        {field.labelText}
                      </p>
                      <Input
                        isTa={false}
                        disabled={true}
                        id={field.id}
                        type={field.type}
                        label={null}
                        validation={{
                          required: {
                            value: field.isRequired,
                            message: `${field.labelText} harus di isi!`,
                          },
                          pattern: {
                            value:
                              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi,
                            message: "email tidak valid",
                          },
                        }}
                        placeholder={field.placeholder}
                        helperText={undefined}
                      />
                    </section>
                  );
                } else if (field.type === "phone") {
                  return (
                    <section key={field.titelKey} className={"mb-4"}>
                      <p className="mb-2 font-light text-gray-900">
                        {field.labelText}
                      </p>
                      <Input
                        disabled={true}
                        isTa={false}
                        id={field.id}
                        type={field.type}
                        label={null}
                        validation={{
                          required: {
                            value: field.isRequired,
                            message: `${field.labelText} harus di isi!`,
                          },
                          pattern: {
                            value: /^[0-9]{10,15}$/gi,
                            message: "phone tidak valid",
                          },
                        }}
                        placeholder={field.placeholder}
                        helperText={undefined}
                      />
                    </section>
                  );
                } else if (field.type === "textarea") {
                  return (
                    <section key={field.titelKey} className={"mb-4"}>
                      <p className="mb-2 font-light text-gray-900">
                        {field.labelText}
                      </p>
                      <TextArea
                        isTa={false}
                        id={field.id}
                        label={null}
                        disabled={true}
                        validation={
                          field.isRequired === true
                            ? { required: "Select Input must be filled" }
                            : undefined
                        }
                        placeholder={field.placeholder}
                        maxLength={200}
                      />
                    </section>
                  );
                } else if (field.type === "dropdown") {
                  return (
                    <section key={field.titelKey} className="mb-4">
                      <p className="mb-2 font-light text-gray-900">
                        {field.labelText}
                      </p>
                      <SearchableSelectInput
                        isTa={false}
                        id={field.id}
                        placeholder={field.placeholder}
                        options={jumlahKaryawan}
                        disabled={true}
                        validation={
                          field.isRequired === true
                            ? { required: "Select Input must be filled" }
                            : undefined
                        }
                        label={null}
                        isMulti={false}
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
                        disabled={true}
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
            buttonName="Edit data"
            isLoading={loading}
            onClick={() => {
              push(`/com/profile/editprofile/${profile_id}`);
            }}
          />
        </div>
      </section>
    </PrimaryLayout>
  );
}

Profile.auth = true;
