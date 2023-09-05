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
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getTenagaAhli } from "../graphql/queries";
import { updateTenagaAhli } from "../graphql/mutations";
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
  runValidationTasks,
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
    const { hasError } = runValidationTasks();
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
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function TenagaAhliUpdateForm(props) {
  const {
    taId: taIdProp,
    tenagaAhli: tenagaAhliModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    taId: "",
    taFullName: "",
    taNikPassport: "",
    taDob: "",
    taCitizenship: "",
    taResidentStatus: "",
    taExpertise: "",
    taAddress: "",
    taEmail: "",
    taPhoneNumber: "",
    taPortfolioLink: [],
    taSelfDescription: "",
    taSkaFilename: "",
    createdOn: "",
    updatedOn: "",
  };
  const [taId, setTaId] = React.useState(initialValues.taId);
  const [taFullName, setTaFullName] = React.useState(initialValues.taFullName);
  const [taNikPassport, setTaNikPassport] = React.useState(
    initialValues.taNikPassport
  );
  const [taDob, setTaDob] = React.useState(initialValues.taDob);
  const [taCitizenship, setTaCitizenship] = React.useState(
    initialValues.taCitizenship
  );
  const [taResidentStatus, setTaResidentStatus] = React.useState(
    initialValues.taResidentStatus
  );
  const [taExpertise, setTaExpertise] = React.useState(
    initialValues.taExpertise
  );
  const [taAddress, setTaAddress] = React.useState(initialValues.taAddress);
  const [taEmail, setTaEmail] = React.useState(initialValues.taEmail);
  const [taPhoneNumber, setTaPhoneNumber] = React.useState(
    initialValues.taPhoneNumber
  );
  const [taPortfolioLink, setTaPortfolioLink] = React.useState(
    initialValues.taPortfolioLink
  );
  const [taSelfDescription, setTaSelfDescription] = React.useState(
    initialValues.taSelfDescription
  );
  const [taSkaFilename, setTaSkaFilename] = React.useState(
    initialValues.taSkaFilename
  );
  const [createdOn, setCreatedOn] = React.useState(initialValues.createdOn);
  const [updatedOn, setUpdatedOn] = React.useState(initialValues.updatedOn);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = tenagaAhliRecord
      ? { ...initialValues, ...tenagaAhliRecord }
      : initialValues;
    setTaId(cleanValues.taId);
    setTaFullName(cleanValues.taFullName);
    setTaNikPassport(cleanValues.taNikPassport);
    setTaDob(cleanValues.taDob);
    setTaCitizenship(cleanValues.taCitizenship);
    setTaResidentStatus(cleanValues.taResidentStatus);
    setTaExpertise(cleanValues.taExpertise);
    setTaAddress(cleanValues.taAddress);
    setTaEmail(cleanValues.taEmail);
    setTaPhoneNumber(cleanValues.taPhoneNumber);
    setTaPortfolioLink(cleanValues.taPortfolioLink ?? []);
    setCurrentTaPortfolioLinkValue("");
    setTaSelfDescription(cleanValues.taSelfDescription);
    setTaSkaFilename(cleanValues.taSkaFilename);
    setCreatedOn(cleanValues.createdOn);
    setUpdatedOn(cleanValues.updatedOn);
    setErrors({});
  };
  const [tenagaAhliRecord, setTenagaAhliRecord] =
    React.useState(tenagaAhliModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = taIdProp
        ? (
            await API.graphql({
              query: getTenagaAhli,
              variables: { taId: taIdProp },
            })
          )?.data?.getTenagaAhli
        : tenagaAhliModelProp;
      setTenagaAhliRecord(record);
    };
    queryData();
  }, [taIdProp, tenagaAhliModelProp]);
  React.useEffect(resetStateValues, [tenagaAhliRecord]);
  const [currentTaPortfolioLinkValue, setCurrentTaPortfolioLinkValue] =
    React.useState("");
  const taPortfolioLinkRef = React.createRef();
  const validations = {
    taId: [{ type: "Required" }],
    taFullName: [{ type: "Required" }],
    taNikPassport: [{ type: "Required" }],
    taDob: [{ type: "Required" }],
    taCitizenship: [{ type: "Required" }],
    taResidentStatus: [{ type: "Required" }],
    taExpertise: [{ type: "Required" }],
    taAddress: [{ type: "Required" }],
    taEmail: [{ type: "Required" }],
    taPhoneNumber: [{ type: "Required" }],
    taPortfolioLink: [{ type: "Required" }],
    taSelfDescription: [],
    taSkaFilename: [],
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
          taId,
          taFullName,
          taNikPassport,
          taDob,
          taCitizenship,
          taResidentStatus,
          taExpertise,
          taAddress,
          taEmail,
          taPhoneNumber,
          taPortfolioLink,
          taSelfDescription: taSelfDescription ?? null,
          taSkaFilename: taSkaFilename ?? null,
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
            query: updateTenagaAhli,
            variables: {
              input: {
                taId: tenagaAhliRecord.taId,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TenagaAhliUpdateForm")}
      {...rest}
    >
      <TextField
        label="Ta id"
        isRequired={true}
        isReadOnly={true}
        value={taId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taId: value,
              taFullName,
              taNikPassport,
              taDob,
              taCitizenship,
              taResidentStatus,
              taExpertise,
              taAddress,
              taEmail,
              taPhoneNumber,
              taPortfolioLink,
              taSelfDescription,
              taSkaFilename,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.taId ?? value;
          }
          if (errors.taId?.hasError) {
            runValidationTasks("taId", value);
          }
          setTaId(value);
        }}
        onBlur={() => runValidationTasks("taId", taId)}
        errorMessage={errors.taId?.errorMessage}
        hasError={errors.taId?.hasError}
        {...getOverrideProps(overrides, "taId")}
      ></TextField>
      <TextField
        label="Ta full name"
        isRequired={true}
        isReadOnly={false}
        value={taFullName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taId,
              taFullName: value,
              taNikPassport,
              taDob,
              taCitizenship,
              taResidentStatus,
              taExpertise,
              taAddress,
              taEmail,
              taPhoneNumber,
              taPortfolioLink,
              taSelfDescription,
              taSkaFilename,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.taFullName ?? value;
          }
          if (errors.taFullName?.hasError) {
            runValidationTasks("taFullName", value);
          }
          setTaFullName(value);
        }}
        onBlur={() => runValidationTasks("taFullName", taFullName)}
        errorMessage={errors.taFullName?.errorMessage}
        hasError={errors.taFullName?.hasError}
        {...getOverrideProps(overrides, "taFullName")}
      ></TextField>
      <TextField
        label="Ta nik passport"
        isRequired={true}
        isReadOnly={false}
        value={taNikPassport}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taId,
              taFullName,
              taNikPassport: value,
              taDob,
              taCitizenship,
              taResidentStatus,
              taExpertise,
              taAddress,
              taEmail,
              taPhoneNumber,
              taPortfolioLink,
              taSelfDescription,
              taSkaFilename,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.taNikPassport ?? value;
          }
          if (errors.taNikPassport?.hasError) {
            runValidationTasks("taNikPassport", value);
          }
          setTaNikPassport(value);
        }}
        onBlur={() => runValidationTasks("taNikPassport", taNikPassport)}
        errorMessage={errors.taNikPassport?.errorMessage}
        hasError={errors.taNikPassport?.hasError}
        {...getOverrideProps(overrides, "taNikPassport")}
      ></TextField>
      <TextField
        label="Ta dob"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={taDob}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taId,
              taFullName,
              taNikPassport,
              taDob: value,
              taCitizenship,
              taResidentStatus,
              taExpertise,
              taAddress,
              taEmail,
              taPhoneNumber,
              taPortfolioLink,
              taSelfDescription,
              taSkaFilename,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.taDob ?? value;
          }
          if (errors.taDob?.hasError) {
            runValidationTasks("taDob", value);
          }
          setTaDob(value);
        }}
        onBlur={() => runValidationTasks("taDob", taDob)}
        errorMessage={errors.taDob?.errorMessage}
        hasError={errors.taDob?.hasError}
        {...getOverrideProps(overrides, "taDob")}
      ></TextField>
      <TextField
        label="Ta citizenship"
        isRequired={true}
        isReadOnly={false}
        value={taCitizenship}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taId,
              taFullName,
              taNikPassport,
              taDob,
              taCitizenship: value,
              taResidentStatus,
              taExpertise,
              taAddress,
              taEmail,
              taPhoneNumber,
              taPortfolioLink,
              taSelfDescription,
              taSkaFilename,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.taCitizenship ?? value;
          }
          if (errors.taCitizenship?.hasError) {
            runValidationTasks("taCitizenship", value);
          }
          setTaCitizenship(value);
        }}
        onBlur={() => runValidationTasks("taCitizenship", taCitizenship)}
        errorMessage={errors.taCitizenship?.errorMessage}
        hasError={errors.taCitizenship?.hasError}
        {...getOverrideProps(overrides, "taCitizenship")}
      ></TextField>
      <TextField
        label="Ta resident status"
        isRequired={true}
        isReadOnly={false}
        value={taResidentStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taId,
              taFullName,
              taNikPassport,
              taDob,
              taCitizenship,
              taResidentStatus: value,
              taExpertise,
              taAddress,
              taEmail,
              taPhoneNumber,
              taPortfolioLink,
              taSelfDescription,
              taSkaFilename,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.taResidentStatus ?? value;
          }
          if (errors.taResidentStatus?.hasError) {
            runValidationTasks("taResidentStatus", value);
          }
          setTaResidentStatus(value);
        }}
        onBlur={() => runValidationTasks("taResidentStatus", taResidentStatus)}
        errorMessage={errors.taResidentStatus?.errorMessage}
        hasError={errors.taResidentStatus?.hasError}
        {...getOverrideProps(overrides, "taResidentStatus")}
      ></TextField>
      <TextField
        label="Ta expertise"
        isRequired={true}
        isReadOnly={false}
        value={taExpertise}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taId,
              taFullName,
              taNikPassport,
              taDob,
              taCitizenship,
              taResidentStatus,
              taExpertise: value,
              taAddress,
              taEmail,
              taPhoneNumber,
              taPortfolioLink,
              taSelfDescription,
              taSkaFilename,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.taExpertise ?? value;
          }
          if (errors.taExpertise?.hasError) {
            runValidationTasks("taExpertise", value);
          }
          setTaExpertise(value);
        }}
        onBlur={() => runValidationTasks("taExpertise", taExpertise)}
        errorMessage={errors.taExpertise?.errorMessage}
        hasError={errors.taExpertise?.hasError}
        {...getOverrideProps(overrides, "taExpertise")}
      ></TextField>
      <TextField
        label="Ta address"
        isRequired={true}
        isReadOnly={false}
        value={taAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taId,
              taFullName,
              taNikPassport,
              taDob,
              taCitizenship,
              taResidentStatus,
              taExpertise,
              taAddress: value,
              taEmail,
              taPhoneNumber,
              taPortfolioLink,
              taSelfDescription,
              taSkaFilename,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.taAddress ?? value;
          }
          if (errors.taAddress?.hasError) {
            runValidationTasks("taAddress", value);
          }
          setTaAddress(value);
        }}
        onBlur={() => runValidationTasks("taAddress", taAddress)}
        errorMessage={errors.taAddress?.errorMessage}
        hasError={errors.taAddress?.hasError}
        {...getOverrideProps(overrides, "taAddress")}
      ></TextField>
      <TextField
        label="Ta email"
        isRequired={true}
        isReadOnly={false}
        value={taEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taId,
              taFullName,
              taNikPassport,
              taDob,
              taCitizenship,
              taResidentStatus,
              taExpertise,
              taAddress,
              taEmail: value,
              taPhoneNumber,
              taPortfolioLink,
              taSelfDescription,
              taSkaFilename,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.taEmail ?? value;
          }
          if (errors.taEmail?.hasError) {
            runValidationTasks("taEmail", value);
          }
          setTaEmail(value);
        }}
        onBlur={() => runValidationTasks("taEmail", taEmail)}
        errorMessage={errors.taEmail?.errorMessage}
        hasError={errors.taEmail?.hasError}
        {...getOverrideProps(overrides, "taEmail")}
      ></TextField>
      <TextField
        label="Ta phone number"
        isRequired={true}
        isReadOnly={false}
        value={taPhoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taId,
              taFullName,
              taNikPassport,
              taDob,
              taCitizenship,
              taResidentStatus,
              taExpertise,
              taAddress,
              taEmail,
              taPhoneNumber: value,
              taPortfolioLink,
              taSelfDescription,
              taSkaFilename,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.taPhoneNumber ?? value;
          }
          if (errors.taPhoneNumber?.hasError) {
            runValidationTasks("taPhoneNumber", value);
          }
          setTaPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("taPhoneNumber", taPhoneNumber)}
        errorMessage={errors.taPhoneNumber?.errorMessage}
        hasError={errors.taPhoneNumber?.hasError}
        {...getOverrideProps(overrides, "taPhoneNumber")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              taId,
              taFullName,
              taNikPassport,
              taDob,
              taCitizenship,
              taResidentStatus,
              taExpertise,
              taAddress,
              taEmail,
              taPhoneNumber,
              taPortfolioLink: values,
              taSelfDescription,
              taSkaFilename,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            values = result?.taPortfolioLink ?? values;
          }
          setTaPortfolioLink(values);
          setCurrentTaPortfolioLinkValue("");
        }}
        currentFieldValue={currentTaPortfolioLinkValue}
        label={"Ta portfolio link"}
        items={taPortfolioLink}
        hasError={errors?.taPortfolioLink?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "taPortfolioLink",
            currentTaPortfolioLinkValue
          )
        }
        errorMessage={errors?.taPortfolioLink?.errorMessage}
        setFieldValue={setCurrentTaPortfolioLinkValue}
        inputFieldRef={taPortfolioLinkRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Ta portfolio link"
          isRequired={true}
          isReadOnly={false}
          value={currentTaPortfolioLinkValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.taPortfolioLink?.hasError) {
              runValidationTasks("taPortfolioLink", value);
            }
            setCurrentTaPortfolioLinkValue(value);
          }}
          onBlur={() =>
            runValidationTasks("taPortfolioLink", currentTaPortfolioLinkValue)
          }
          errorMessage={errors.taPortfolioLink?.errorMessage}
          hasError={errors.taPortfolioLink?.hasError}
          ref={taPortfolioLinkRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "taPortfolioLink")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Ta self description"
        isRequired={false}
        isReadOnly={false}
        value={taSelfDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taId,
              taFullName,
              taNikPassport,
              taDob,
              taCitizenship,
              taResidentStatus,
              taExpertise,
              taAddress,
              taEmail,
              taPhoneNumber,
              taPortfolioLink,
              taSelfDescription: value,
              taSkaFilename,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.taSelfDescription ?? value;
          }
          if (errors.taSelfDescription?.hasError) {
            runValidationTasks("taSelfDescription", value);
          }
          setTaSelfDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("taSelfDescription", taSelfDescription)
        }
        errorMessage={errors.taSelfDescription?.errorMessage}
        hasError={errors.taSelfDescription?.hasError}
        {...getOverrideProps(overrides, "taSelfDescription")}
      ></TextField>
      <TextField
        label="Ta ska filename"
        isRequired={false}
        isReadOnly={false}
        value={taSkaFilename}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              taId,
              taFullName,
              taNikPassport,
              taDob,
              taCitizenship,
              taResidentStatus,
              taExpertise,
              taAddress,
              taEmail,
              taPhoneNumber,
              taPortfolioLink,
              taSelfDescription,
              taSkaFilename: value,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.taSkaFilename ?? value;
          }
          if (errors.taSkaFilename?.hasError) {
            runValidationTasks("taSkaFilename", value);
          }
          setTaSkaFilename(value);
        }}
        onBlur={() => runValidationTasks("taSkaFilename", taSkaFilename)}
        errorMessage={errors.taSkaFilename?.errorMessage}
        hasError={errors.taSkaFilename?.hasError}
        {...getOverrideProps(overrides, "taSkaFilename")}
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
              taId,
              taFullName,
              taNikPassport,
              taDob,
              taCitizenship,
              taResidentStatus,
              taExpertise,
              taAddress,
              taEmail,
              taPhoneNumber,
              taPortfolioLink,
              taSelfDescription,
              taSkaFilename,
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
              taId,
              taFullName,
              taNikPassport,
              taDob,
              taCitizenship,
              taResidentStatus,
              taExpertise,
              taAddress,
              taEmail,
              taPhoneNumber,
              taPortfolioLink,
              taSelfDescription,
              taSkaFilename,
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
          isDisabled={!(taIdProp || tenagaAhliModelProp)}
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
              !(taIdProp || tenagaAhliModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
