/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Konsultan } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function KonsultanUpdateForm(props) {
  const {
    konsultanId: konsultanIdProp,
    konsultan: konsultanModelProp,
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
    konsultanEmail: [],
    konsultanPhoneNumber: [],
    konsultanRangeTotalEmployees: "",
    konsultanPIC: "",
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
  const [createdOn, setCreatedOn] = React.useState(initialValues.createdOn);
  const [updatedOn, setUpdatedOn] = React.useState(initialValues.updatedOn);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = konsultanRecord
      ? { ...initialValues, ...konsultanRecord }
      : initialValues;
    setKonsultanId(cleanValues.konsultanId);
    setKonsultanName(cleanValues.konsultanName);
    setKonsultanLocation(cleanValues.konsultanLocation);
    setKonsultanAddress(cleanValues.konsultanAddress);
    setKonsultanEmail(cleanValues.konsultanEmail ?? []);
    setCurrentKonsultanEmailValue("");
    setKonsultanPhoneNumber(cleanValues.konsultanPhoneNumber ?? []);
    setCurrentKonsultanPhoneNumberValue("");
    setKonsultanRangeTotalEmployees(cleanValues.konsultanRangeTotalEmployees);
    setKonsultanPIC(cleanValues.konsultanPIC);
    setCreatedOn(cleanValues.createdOn);
    setUpdatedOn(cleanValues.updatedOn);
    setErrors({});
  };
  const [konsultanRecord, setKonsultanRecord] =
    React.useState(konsultanModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = konsultanIdProp
        ? await DataStore.query(Konsultan, konsultanIdProp)
        : konsultanModelProp;
      setKonsultanRecord(record);
    };
    queryData();
  }, [konsultanIdProp, konsultanModelProp]);
  React.useEffect(resetStateValues, [konsultanRecord]);
  const [currentKonsultanEmailValue, setCurrentKonsultanEmailValue] =
    React.useState("");
  const konsultanEmailRef = React.createRef();
  const [
    currentKonsultanPhoneNumberValue,
    setCurrentKonsultanPhoneNumberValue,
  ] = React.useState("");
  const konsultanPhoneNumberRef = React.createRef();
  const validations = {
    konsultanId: [{ type: "Required" }],
    konsultanName: [{ type: "Required" }],
    konsultanLocation: [{ type: "Required" }],
    konsultanAddress: [{ type: "Required" }],
    konsultanEmail: [{ type: "Required" }],
    konsultanPhoneNumber: [{ type: "Required" }],
    konsultanRangeTotalEmployees: [{ type: "Required" }],
    konsultanPIC: [{ type: "Required" }],
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
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Konsultan.copyOf(konsultanRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "KonsultanUpdateForm")}
      {...rest}
    >
      <TextField
        label="Konsultan id"
        isRequired={true}
        isReadOnly={true}
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
        isRequired={true}
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              konsultanId,
              konsultanName,
              konsultanLocation,
              konsultanAddress,
              konsultanEmail: values,
              konsultanPhoneNumber,
              konsultanRangeTotalEmployees,
              konsultanPIC,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            values = result?.konsultanEmail ?? values;
          }
          setKonsultanEmail(values);
          setCurrentKonsultanEmailValue("");
        }}
        currentFieldValue={currentKonsultanEmailValue}
        label={"Konsultan email"}
        items={konsultanEmail}
        hasError={errors?.konsultanEmail?.hasError}
        errorMessage={errors?.konsultanEmail?.errorMessage}
        setFieldValue={setCurrentKonsultanEmailValue}
        inputFieldRef={konsultanEmailRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Konsultan email"
          isRequired={true}
          isReadOnly={false}
          value={currentKonsultanEmailValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.konsultanEmail?.hasError) {
              runValidationTasks("konsultanEmail", value);
            }
            setCurrentKonsultanEmailValue(value);
          }}
          onBlur={() =>
            runValidationTasks("konsultanEmail", currentKonsultanEmailValue)
          }
          errorMessage={errors.konsultanEmail?.errorMessage}
          hasError={errors.konsultanEmail?.hasError}
          ref={konsultanEmailRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "konsultanEmail")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              konsultanId,
              konsultanName,
              konsultanLocation,
              konsultanAddress,
              konsultanEmail,
              konsultanPhoneNumber: values,
              konsultanRangeTotalEmployees,
              konsultanPIC,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            values = result?.konsultanPhoneNumber ?? values;
          }
          setKonsultanPhoneNumber(values);
          setCurrentKonsultanPhoneNumberValue("");
        }}
        currentFieldValue={currentKonsultanPhoneNumberValue}
        label={"Konsultan phone number"}
        items={konsultanPhoneNumber}
        hasError={errors?.konsultanPhoneNumber?.hasError}
        errorMessage={errors?.konsultanPhoneNumber?.errorMessage}
        setFieldValue={setCurrentKonsultanPhoneNumberValue}
        inputFieldRef={konsultanPhoneNumberRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Konsultan phone number"
          isRequired={true}
          isReadOnly={false}
          value={currentKonsultanPhoneNumberValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.konsultanPhoneNumber?.hasError) {
              runValidationTasks("konsultanPhoneNumber", value);
            }
            setCurrentKonsultanPhoneNumberValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "konsultanPhoneNumber",
              currentKonsultanPhoneNumberValue
            )
          }
          errorMessage={errors.konsultanPhoneNumber?.errorMessage}
          hasError={errors.konsultanPhoneNumber?.hasError}
          ref={konsultanPhoneNumberRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "konsultanPhoneNumber")}
        ></TextField>
      </ArrayField>
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(konsultanIdProp || konsultanModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(konsultanIdProp || konsultanModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
