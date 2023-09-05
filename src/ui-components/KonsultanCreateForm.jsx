/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { createKonsultan } from "../graphql/mutations";
export default function KonsultanCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    konsultanId: "",
    konsultanName: "",
    konsultanLocation: "",
    konsultanAddress: "",
    konsultanEmail: "",
    konsultanPhoneNumber: "",
    konsultanRangeTotalEmployees: "",
    konsultanPIC: "",
    konsultanDescription: "",
    createdOn: "",
    updatedOn: "",
  };
  const [konsultanId, setKonsultanId] = React.useState(
    initialValues.konsultanId
  );
  const [konsultanName, setKonsultanName] = React.useState(
    initialValues.konsultanName
  );
  const [konsultanLocation, setKonsultanLocation] = React.useState(
    initialValues.konsultanLocation
  );
  const [konsultanAddress, setKonsultanAddress] = React.useState(
    initialValues.konsultanAddress
  );
  const [konsultanEmail, setKonsultanEmail] = React.useState(
    initialValues.konsultanEmail
  );
  const [konsultanPhoneNumber, setKonsultanPhoneNumber] = React.useState(
    initialValues.konsultanPhoneNumber
  );
  const [konsultanRangeTotalEmployees, setKonsultanRangeTotalEmployees] =
    React.useState(initialValues.konsultanRangeTotalEmployees);
  const [konsultanPIC, setKonsultanPIC] = React.useState(
    initialValues.konsultanPIC
  );
  const [konsultanDescription, setKonsultanDescription] = React.useState(
    initialValues.konsultanDescription
  );
  const [createdOn, setCreatedOn] = React.useState(initialValues.createdOn);
  const [updatedOn, setUpdatedOn] = React.useState(initialValues.updatedOn);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setKonsultanId(initialValues.konsultanId);
    setKonsultanName(initialValues.konsultanName);
    setKonsultanLocation(initialValues.konsultanLocation);
    setKonsultanAddress(initialValues.konsultanAddress);
    setKonsultanEmail(initialValues.konsultanEmail);
    setKonsultanPhoneNumber(initialValues.konsultanPhoneNumber);
    setKonsultanRangeTotalEmployees(initialValues.konsultanRangeTotalEmployees);
    setKonsultanPIC(initialValues.konsultanPIC);
    setKonsultanDescription(initialValues.konsultanDescription);
    setCreatedOn(initialValues.createdOn);
    setUpdatedOn(initialValues.updatedOn);
    setErrors({});
  };
  const validations = {
    konsultanId: [{ type: "Required" }],
    konsultanName: [{ type: "Required" }],
    konsultanLocation: [],
    konsultanAddress: [{ type: "Required" }],
    konsultanEmail: [{ type: "Required" }],
    konsultanPhoneNumber: [{ type: "Required" }],
    konsultanRangeTotalEmployees: [{ type: "Required" }],
    konsultanPIC: [{ type: "Required" }],
    konsultanDescription: [{ type: "Required" }],
    createdOn: [{ type: "Required" }],
    updatedOn: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          konsultanId,
          konsultanName,
          konsultanLocation,
          konsultanAddress,
          konsultanEmail,
          konsultanPhoneNumber,
          konsultanRangeTotalEmployees,
          konsultanPIC,
          konsultanDescription,
          createdOn,
          updatedOn,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createKonsultan,
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "KonsultanCreateForm")}
      {...rest}
    >
      <TextField
        label="Konsultan id"
        isRequired={true}
        isReadOnly={false}
        value={konsultanId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              konsultanId: value,
              konsultanName,
              konsultanLocation,
              konsultanAddress,
              konsultanEmail,
              konsultanPhoneNumber,
              konsultanRangeTotalEmployees,
              konsultanPIC,
              konsultanDescription,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.konsultanId ?? value;
          }
          if (errors.konsultanId?.hasError) {
            runValidationTasks("konsultanId", value);
          }
          setKonsultanId(value);
        }}
        onBlur={() => runValidationTasks("konsultanId", konsultanId)}
        errorMessage={errors.konsultanId?.errorMessage}
        hasError={errors.konsultanId?.hasError}
        {...getOverrideProps(overrides, "konsultanId")}
      ></TextField>
      <TextField
        label="Konsultan name"
        isRequired={true}
        isReadOnly={false}
        value={konsultanName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              konsultanId,
              konsultanName: value,
              konsultanLocation,
              konsultanAddress,
              konsultanEmail,
              konsultanPhoneNumber,
              konsultanRangeTotalEmployees,
              konsultanPIC,
              konsultanDescription,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.konsultanName ?? value;
          }
          if (errors.konsultanName?.hasError) {
            runValidationTasks("konsultanName", value);
          }
          setKonsultanName(value);
        }}
        onBlur={() => runValidationTasks("konsultanName", konsultanName)}
        errorMessage={errors.konsultanName?.errorMessage}
        hasError={errors.konsultanName?.hasError}
        {...getOverrideProps(overrides, "konsultanName")}
      ></TextField>
      <TextField
        label="Konsultan location"
        isRequired={false}
        isReadOnly={false}
        value={konsultanLocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              konsultanId,
              konsultanName,
              konsultanLocation: value,
              konsultanAddress,
              konsultanEmail,
              konsultanPhoneNumber,
              konsultanRangeTotalEmployees,
              konsultanPIC,
              konsultanDescription,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.konsultanLocation ?? value;
          }
          if (errors.konsultanLocation?.hasError) {
            runValidationTasks("konsultanLocation", value);
          }
          setKonsultanLocation(value);
        }}
        onBlur={() =>
          runValidationTasks("konsultanLocation", konsultanLocation)
        }
        errorMessage={errors.konsultanLocation?.errorMessage}
        hasError={errors.konsultanLocation?.hasError}
        {...getOverrideProps(overrides, "konsultanLocation")}
      ></TextField>
      <TextField
        label="Konsultan address"
        isRequired={true}
        isReadOnly={false}
        value={konsultanAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              konsultanId,
              konsultanName,
              konsultanLocation,
              konsultanAddress: value,
              konsultanEmail,
              konsultanPhoneNumber,
              konsultanRangeTotalEmployees,
              konsultanPIC,
              konsultanDescription,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.konsultanAddress ?? value;
          }
          if (errors.konsultanAddress?.hasError) {
            runValidationTasks("konsultanAddress", value);
          }
          setKonsultanAddress(value);
        }}
        onBlur={() => runValidationTasks("konsultanAddress", konsultanAddress)}
        errorMessage={errors.konsultanAddress?.errorMessage}
        hasError={errors.konsultanAddress?.hasError}
        {...getOverrideProps(overrides, "konsultanAddress")}
      ></TextField>
      <TextField
        label="Konsultan email"
        isRequired={true}
        isReadOnly={false}
        value={konsultanEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              konsultanId,
              konsultanName,
              konsultanLocation,
              konsultanAddress,
              konsultanEmail: value,
              konsultanPhoneNumber,
              konsultanRangeTotalEmployees,
              konsultanPIC,
              konsultanDescription,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.konsultanEmail ?? value;
          }
          if (errors.konsultanEmail?.hasError) {
            runValidationTasks("konsultanEmail", value);
          }
          setKonsultanEmail(value);
        }}
        onBlur={() => runValidationTasks("konsultanEmail", konsultanEmail)}
        errorMessage={errors.konsultanEmail?.errorMessage}
        hasError={errors.konsultanEmail?.hasError}
        {...getOverrideProps(overrides, "konsultanEmail")}
      ></TextField>
      <TextField
        label="Konsultan phone number"
        isRequired={true}
        isReadOnly={false}
        value={konsultanPhoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              konsultanId,
              konsultanName,
              konsultanLocation,
              konsultanAddress,
              konsultanEmail,
              konsultanPhoneNumber: value,
              konsultanRangeTotalEmployees,
              konsultanPIC,
              konsultanDescription,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.konsultanPhoneNumber ?? value;
          }
          if (errors.konsultanPhoneNumber?.hasError) {
            runValidationTasks("konsultanPhoneNumber", value);
          }
          setKonsultanPhoneNumber(value);
        }}
        onBlur={() =>
          runValidationTasks("konsultanPhoneNumber", konsultanPhoneNumber)
        }
        errorMessage={errors.konsultanPhoneNumber?.errorMessage}
        hasError={errors.konsultanPhoneNumber?.hasError}
        {...getOverrideProps(overrides, "konsultanPhoneNumber")}
      ></TextField>
      <TextField
        label="Konsultan range total employees"
        isRequired={true}
        isReadOnly={false}
        value={konsultanRangeTotalEmployees}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              konsultanId,
              konsultanName,
              konsultanLocation,
              konsultanAddress,
              konsultanEmail,
              konsultanPhoneNumber,
              konsultanRangeTotalEmployees: value,
              konsultanPIC,
              konsultanDescription,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.konsultanRangeTotalEmployees ?? value;
          }
          if (errors.konsultanRangeTotalEmployees?.hasError) {
            runValidationTasks("konsultanRangeTotalEmployees", value);
          }
          setKonsultanRangeTotalEmployees(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "konsultanRangeTotalEmployees",
            konsultanRangeTotalEmployees
          )
        }
        errorMessage={errors.konsultanRangeTotalEmployees?.errorMessage}
        hasError={errors.konsultanRangeTotalEmployees?.hasError}
        {...getOverrideProps(overrides, "konsultanRangeTotalEmployees")}
      ></TextField>
      <TextField
        label="Konsultan pic"
        isRequired={true}
        isReadOnly={false}
        value={konsultanPIC}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              konsultanId,
              konsultanName,
              konsultanLocation,
              konsultanAddress,
              konsultanEmail,
              konsultanPhoneNumber,
              konsultanRangeTotalEmployees,
              konsultanPIC: value,
              konsultanDescription,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.konsultanPIC ?? value;
          }
          if (errors.konsultanPIC?.hasError) {
            runValidationTasks("konsultanPIC", value);
          }
          setKonsultanPIC(value);
        }}
        onBlur={() => runValidationTasks("konsultanPIC", konsultanPIC)}
        errorMessage={errors.konsultanPIC?.errorMessage}
        hasError={errors.konsultanPIC?.hasError}
        {...getOverrideProps(overrides, "konsultanPIC")}
      ></TextField>
      <TextField
        label="Konsultan description"
        isRequired={true}
        isReadOnly={false}
        value={konsultanDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              konsultanId,
              konsultanName,
              konsultanLocation,
              konsultanAddress,
              konsultanEmail,
              konsultanPhoneNumber,
              konsultanRangeTotalEmployees,
              konsultanPIC,
              konsultanDescription: value,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.konsultanDescription ?? value;
          }
          if (errors.konsultanDescription?.hasError) {
            runValidationTasks("konsultanDescription", value);
          }
          setKonsultanDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("konsultanDescription", konsultanDescription)
        }
        errorMessage={errors.konsultanDescription?.errorMessage}
        hasError={errors.konsultanDescription?.hasError}
        {...getOverrideProps(overrides, "konsultanDescription")}
      ></TextField>
      <TextField
        label="Created on"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={createdOn && convertToLocal(new Date(createdOn))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              konsultanId,
              konsultanName,
              konsultanLocation,
              konsultanAddress,
              konsultanEmail,
              konsultanPhoneNumber,
              konsultanRangeTotalEmployees,
              konsultanPIC,
              konsultanDescription,
              createdOn: value,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.createdOn ?? value;
          }
          if (errors.createdOn?.hasError) {
            runValidationTasks("createdOn", value);
          }
          setCreatedOn(value);
        }}
        onBlur={() => runValidationTasks("createdOn", createdOn)}
        errorMessage={errors.createdOn?.errorMessage}
        hasError={errors.createdOn?.hasError}
        {...getOverrideProps(overrides, "createdOn")}
      ></TextField>
      <TextField
        label="Updated on"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={updatedOn && convertToLocal(new Date(updatedOn))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              konsultanId,
              konsultanName,
              konsultanLocation,
              konsultanAddress,
              konsultanEmail,
              konsultanPhoneNumber,
              konsultanRangeTotalEmployees,
              konsultanPIC,
              konsultanDescription,
              createdOn,
              updatedOn: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedOn ?? value;
          }
          if (errors.updatedOn?.hasError) {
            runValidationTasks("updatedOn", value);
          }
          setUpdatedOn(value);
        }}
        onBlur={() => runValidationTasks("updatedOn", updatedOn)}
        errorMessage={errors.updatedOn?.errorMessage}
        hasError={errors.updatedOn?.hasError}
        {...getOverrideProps(overrides, "updatedOn")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
