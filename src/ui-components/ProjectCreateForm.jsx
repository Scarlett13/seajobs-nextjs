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
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Project } from "../models";
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
export default function ProjectCreateForm(props) {
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
    projectId: "",
    projectTitle: "",
    projectLocation: "",
    projectValue: "",
    projectDuration: "",
    projectStart: "",
    projectCategories: "",
    projectDescription: "",
    projectClient: "",
    projectDeadline: "",
    projecImageUrl: [],
    projectOwner: "",
    isActive: "",
    projectStatus: "",
    isDeleted: false,
    createdOn: "",
    updatedOn: "",
  };
  const [projectId, setProjectId] = React.useState(initialValues.projectId);
  const [projectTitle, setProjectTitle] = React.useState(
    initialValues.projectTitle
  );
  const [projectLocation, setProjectLocation] = React.useState(
    initialValues.projectLocation
  );
  const [projectValue, setProjectValue] = React.useState(
    initialValues.projectValue
  );
  const [projectDuration, setProjectDuration] = React.useState(
    initialValues.projectDuration
  );
  const [projectStart, setProjectStart] = React.useState(
    initialValues.projectStart
  );
  const [projectCategories, setProjectCategories] = React.useState(
    initialValues.projectCategories
  );
  const [projectDescription, setProjectDescription] = React.useState(
    initialValues.projectDescription
  );
  const [projectClient, setProjectClient] = React.useState(
    initialValues.projectClient
  );
  const [projectDeadline, setProjectDeadline] = React.useState(
    initialValues.projectDeadline
  );
  const [projecImageUrl, setProjecImageUrl] = React.useState(
    initialValues.projecImageUrl
  );
  const [projectOwner, setProjectOwner] = React.useState(
    initialValues.projectOwner
  );
  const [isActive, setIsActive] = React.useState(initialValues.isActive);
  const [projectStatus, setProjectStatus] = React.useState(
    initialValues.projectStatus
  );
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [createdOn, setCreatedOn] = React.useState(initialValues.createdOn);
  const [updatedOn, setUpdatedOn] = React.useState(initialValues.updatedOn);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setProjectId(initialValues.projectId);
    setProjectTitle(initialValues.projectTitle);
    setProjectLocation(initialValues.projectLocation);
    setProjectValue(initialValues.projectValue);
    setProjectDuration(initialValues.projectDuration);
    setProjectStart(initialValues.projectStart);
    setProjectCategories(initialValues.projectCategories);
    setProjectDescription(initialValues.projectDescription);
    setProjectClient(initialValues.projectClient);
    setProjectDeadline(initialValues.projectDeadline);
    setProjecImageUrl(initialValues.projecImageUrl);
    setCurrentProjecImageUrlValue("");
    setProjectOwner(initialValues.projectOwner);
    setIsActive(initialValues.isActive);
    setProjectStatus(initialValues.projectStatus);
    setIsDeleted(initialValues.isDeleted);
    setCreatedOn(initialValues.createdOn);
    setUpdatedOn(initialValues.updatedOn);
    setErrors({});
  };
  const [currentProjecImageUrlValue, setCurrentProjecImageUrlValue] =
    React.useState("");
  const projecImageUrlRef = React.createRef();
  const validations = {
    projectId: [{ type: "Required" }],
    projectTitle: [{ type: "Required" }],
    projectLocation: [{ type: "Required" }],
    projectValue: [{ type: "Required" }],
    projectDuration: [{ type: "Required" }],
    projectStart: [{ type: "Required" }],
    projectCategories: [{ type: "Required" }],
    projectDescription: [{ type: "Required" }],
    projectClient: [],
    projectDeadline: [{ type: "Required" }],
    projecImageUrl: [],
    projectOwner: [{ type: "Required" }],
    isActive: [{ type: "Required" }],
    projectStatus: [{ type: "Required" }],
    isDeleted: [{ type: "Required" }],
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
          projectId,
          projectTitle,
          projectLocation,
          projectValue,
          projectDuration,
          projectStart,
          projectCategories,
          projectDescription,
          projectClient,
          projectDeadline,
          projecImageUrl,
          projectOwner,
          isActive,
          projectStatus,
          isDeleted,
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
          await DataStore.save(new Project(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProjectCreateForm")}
      {...rest}
    >
      <TextField
        label="Project id"
        isRequired={true}
        isReadOnly={false}
        value={projectId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectId: value,
              projectTitle,
              projectLocation,
              projectValue,
              projectDuration,
              projectStart,
              projectCategories,
              projectDescription,
              projectClient,
              projectDeadline,
              projecImageUrl,
              projectOwner,
              isActive,
              projectStatus,
              isDeleted,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.projectId ?? value;
          }
          if (errors.projectId?.hasError) {
            runValidationTasks("projectId", value);
          }
          setProjectId(value);
        }}
        onBlur={() => runValidationTasks("projectId", projectId)}
        errorMessage={errors.projectId?.errorMessage}
        hasError={errors.projectId?.hasError}
        {...getOverrideProps(overrides, "projectId")}
      ></TextField>
      <TextField
        label="Project title"
        isRequired={true}
        isReadOnly={false}
        value={projectTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectId,
              projectTitle: value,
              projectLocation,
              projectValue,
              projectDuration,
              projectStart,
              projectCategories,
              projectDescription,
              projectClient,
              projectDeadline,
              projecImageUrl,
              projectOwner,
              isActive,
              projectStatus,
              isDeleted,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.projectTitle ?? value;
          }
          if (errors.projectTitle?.hasError) {
            runValidationTasks("projectTitle", value);
          }
          setProjectTitle(value);
        }}
        onBlur={() => runValidationTasks("projectTitle", projectTitle)}
        errorMessage={errors.projectTitle?.errorMessage}
        hasError={errors.projectTitle?.hasError}
        {...getOverrideProps(overrides, "projectTitle")}
      ></TextField>
      <TextField
        label="Project location"
        isRequired={true}
        isReadOnly={false}
        value={projectLocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectId,
              projectTitle,
              projectLocation: value,
              projectValue,
              projectDuration,
              projectStart,
              projectCategories,
              projectDescription,
              projectClient,
              projectDeadline,
              projecImageUrl,
              projectOwner,
              isActive,
              projectStatus,
              isDeleted,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.projectLocation ?? value;
          }
          if (errors.projectLocation?.hasError) {
            runValidationTasks("projectLocation", value);
          }
          setProjectLocation(value);
        }}
        onBlur={() => runValidationTasks("projectLocation", projectLocation)}
        errorMessage={errors.projectLocation?.errorMessage}
        hasError={errors.projectLocation?.hasError}
        {...getOverrideProps(overrides, "projectLocation")}
      ></TextField>
      <TextField
        label="Project value"
        isRequired={true}
        isReadOnly={false}
        value={projectValue}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectId,
              projectTitle,
              projectLocation,
              projectValue: value,
              projectDuration,
              projectStart,
              projectCategories,
              projectDescription,
              projectClient,
              projectDeadline,
              projecImageUrl,
              projectOwner,
              isActive,
              projectStatus,
              isDeleted,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.projectValue ?? value;
          }
          if (errors.projectValue?.hasError) {
            runValidationTasks("projectValue", value);
          }
          setProjectValue(value);
        }}
        onBlur={() => runValidationTasks("projectValue", projectValue)}
        errorMessage={errors.projectValue?.errorMessage}
        hasError={errors.projectValue?.hasError}
        {...getOverrideProps(overrides, "projectValue")}
      ></TextField>
      <TextField
        label="Project duration"
        isRequired={true}
        isReadOnly={false}
        value={projectDuration}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectId,
              projectTitle,
              projectLocation,
              projectValue,
              projectDuration: value,
              projectStart,
              projectCategories,
              projectDescription,
              projectClient,
              projectDeadline,
              projecImageUrl,
              projectOwner,
              isActive,
              projectStatus,
              isDeleted,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.projectDuration ?? value;
          }
          if (errors.projectDuration?.hasError) {
            runValidationTasks("projectDuration", value);
          }
          setProjectDuration(value);
        }}
        onBlur={() => runValidationTasks("projectDuration", projectDuration)}
        errorMessage={errors.projectDuration?.errorMessage}
        hasError={errors.projectDuration?.hasError}
        {...getOverrideProps(overrides, "projectDuration")}
      ></TextField>
      <TextField
        label="Project start"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={projectStart}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectId,
              projectTitle,
              projectLocation,
              projectValue,
              projectDuration,
              projectStart: value,
              projectCategories,
              projectDescription,
              projectClient,
              projectDeadline,
              projecImageUrl,
              projectOwner,
              isActive,
              projectStatus,
              isDeleted,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.projectStart ?? value;
          }
          if (errors.projectStart?.hasError) {
            runValidationTasks("projectStart", value);
          }
          setProjectStart(value);
        }}
        onBlur={() => runValidationTasks("projectStart", projectStart)}
        errorMessage={errors.projectStart?.errorMessage}
        hasError={errors.projectStart?.hasError}
        {...getOverrideProps(overrides, "projectStart")}
      ></TextField>
      <TextField
        label="Project categories"
        isRequired={true}
        isReadOnly={false}
        value={projectCategories}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectId,
              projectTitle,
              projectLocation,
              projectValue,
              projectDuration,
              projectStart,
              projectCategories: value,
              projectDescription,
              projectClient,
              projectDeadline,
              projecImageUrl,
              projectOwner,
              isActive,
              projectStatus,
              isDeleted,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.projectCategories ?? value;
          }
          if (errors.projectCategories?.hasError) {
            runValidationTasks("projectCategories", value);
          }
          setProjectCategories(value);
        }}
        onBlur={() =>
          runValidationTasks("projectCategories", projectCategories)
        }
        errorMessage={errors.projectCategories?.errorMessage}
        hasError={errors.projectCategories?.hasError}
        {...getOverrideProps(overrides, "projectCategories")}
      ></TextField>
      <TextField
        label="Project description"
        isRequired={true}
        isReadOnly={false}
        value={projectDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectId,
              projectTitle,
              projectLocation,
              projectValue,
              projectDuration,
              projectStart,
              projectCategories,
              projectDescription: value,
              projectClient,
              projectDeadline,
              projecImageUrl,
              projectOwner,
              isActive,
              projectStatus,
              isDeleted,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.projectDescription ?? value;
          }
          if (errors.projectDescription?.hasError) {
            runValidationTasks("projectDescription", value);
          }
          setProjectDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("projectDescription", projectDescription)
        }
        errorMessage={errors.projectDescription?.errorMessage}
        hasError={errors.projectDescription?.hasError}
        {...getOverrideProps(overrides, "projectDescription")}
      ></TextField>
      <TextField
        label="Project client"
        isRequired={false}
        isReadOnly={false}
        value={projectClient}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectId,
              projectTitle,
              projectLocation,
              projectValue,
              projectDuration,
              projectStart,
              projectCategories,
              projectDescription,
              projectClient: value,
              projectDeadline,
              projecImageUrl,
              projectOwner,
              isActive,
              projectStatus,
              isDeleted,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.projectClient ?? value;
          }
          if (errors.projectClient?.hasError) {
            runValidationTasks("projectClient", value);
          }
          setProjectClient(value);
        }}
        onBlur={() => runValidationTasks("projectClient", projectClient)}
        errorMessage={errors.projectClient?.errorMessage}
        hasError={errors.projectClient?.hasError}
        {...getOverrideProps(overrides, "projectClient")}
      ></TextField>
      <TextField
        label="Project deadline"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={projectDeadline}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectId,
              projectTitle,
              projectLocation,
              projectValue,
              projectDuration,
              projectStart,
              projectCategories,
              projectDescription,
              projectClient,
              projectDeadline: value,
              projecImageUrl,
              projectOwner,
              isActive,
              projectStatus,
              isDeleted,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.projectDeadline ?? value;
          }
          if (errors.projectDeadline?.hasError) {
            runValidationTasks("projectDeadline", value);
          }
          setProjectDeadline(value);
        }}
        onBlur={() => runValidationTasks("projectDeadline", projectDeadline)}
        errorMessage={errors.projectDeadline?.errorMessage}
        hasError={errors.projectDeadline?.hasError}
        {...getOverrideProps(overrides, "projectDeadline")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              projectId,
              projectTitle,
              projectLocation,
              projectValue,
              projectDuration,
              projectStart,
              projectCategories,
              projectDescription,
              projectClient,
              projectDeadline,
              projecImageUrl: values,
              projectOwner,
              isActive,
              projectStatus,
              isDeleted,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            values = result?.projecImageUrl ?? values;
          }
          setProjecImageUrl(values);
          setCurrentProjecImageUrlValue("");
        }}
        currentFieldValue={currentProjecImageUrlValue}
        label={"Projec image url"}
        items={projecImageUrl}
        hasError={errors?.projecImageUrl?.hasError}
        errorMessage={errors?.projecImageUrl?.errorMessage}
        setFieldValue={setCurrentProjecImageUrlValue}
        inputFieldRef={projecImageUrlRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Projec image url"
          isRequired={false}
          isReadOnly={false}
          value={currentProjecImageUrlValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.projecImageUrl?.hasError) {
              runValidationTasks("projecImageUrl", value);
            }
            setCurrentProjecImageUrlValue(value);
          }}
          onBlur={() =>
            runValidationTasks("projecImageUrl", currentProjecImageUrlValue)
          }
          errorMessage={errors.projecImageUrl?.errorMessage}
          hasError={errors.projecImageUrl?.hasError}
          ref={projecImageUrlRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "projecImageUrl")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Project owner"
        isRequired={true}
        isReadOnly={false}
        value={projectOwner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectId,
              projectTitle,
              projectLocation,
              projectValue,
              projectDuration,
              projectStart,
              projectCategories,
              projectDescription,
              projectClient,
              projectDeadline,
              projecImageUrl,
              projectOwner: value,
              isActive,
              projectStatus,
              isDeleted,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.projectOwner ?? value;
          }
          if (errors.projectOwner?.hasError) {
            runValidationTasks("projectOwner", value);
          }
          setProjectOwner(value);
        }}
        onBlur={() => runValidationTasks("projectOwner", projectOwner)}
        errorMessage={errors.projectOwner?.errorMessage}
        hasError={errors.projectOwner?.hasError}
        {...getOverrideProps(overrides, "projectOwner")}
      ></TextField>
      <TextField
        label="Is active"
        isRequired={true}
        isReadOnly={false}
        value={isActive}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectId,
              projectTitle,
              projectLocation,
              projectValue,
              projectDuration,
              projectStart,
              projectCategories,
              projectDescription,
              projectClient,
              projectDeadline,
              projecImageUrl,
              projectOwner,
              isActive: value,
              projectStatus,
              isDeleted,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.isActive ?? value;
          }
          if (errors.isActive?.hasError) {
            runValidationTasks("isActive", value);
          }
          setIsActive(value);
        }}
        onBlur={() => runValidationTasks("isActive", isActive)}
        errorMessage={errors.isActive?.errorMessage}
        hasError={errors.isActive?.hasError}
        {...getOverrideProps(overrides, "isActive")}
      ></TextField>
      <TextField
        label="Project status"
        isRequired={true}
        isReadOnly={false}
        value={projectStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectId,
              projectTitle,
              projectLocation,
              projectValue,
              projectDuration,
              projectStart,
              projectCategories,
              projectDescription,
              projectClient,
              projectDeadline,
              projecImageUrl,
              projectOwner,
              isActive,
              projectStatus: value,
              isDeleted,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.projectStatus ?? value;
          }
          if (errors.projectStatus?.hasError) {
            runValidationTasks("projectStatus", value);
          }
          setProjectStatus(value);
        }}
        onBlur={() => runValidationTasks("projectStatus", projectStatus)}
        errorMessage={errors.projectStatus?.errorMessage}
        hasError={errors.projectStatus?.hasError}
        {...getOverrideProps(overrides, "projectStatus")}
      ></TextField>
      <SwitchField
        label="Is deleted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isDeleted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              projectId,
              projectTitle,
              projectLocation,
              projectValue,
              projectDuration,
              projectStart,
              projectCategories,
              projectDescription,
              projectClient,
              projectDeadline,
              projecImageUrl,
              projectOwner,
              isActive,
              projectStatus,
              isDeleted: value,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            value = result?.isDeleted ?? value;
          }
          if (errors.isDeleted?.hasError) {
            runValidationTasks("isDeleted", value);
          }
          setIsDeleted(value);
        }}
        onBlur={() => runValidationTasks("isDeleted", isDeleted)}
        errorMessage={errors.isDeleted?.errorMessage}
        hasError={errors.isDeleted?.hasError}
        {...getOverrideProps(overrides, "isDeleted")}
      ></SwitchField>
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
              projectId,
              projectTitle,
              projectLocation,
              projectValue,
              projectDuration,
              projectStart,
              projectCategories,
              projectDescription,
              projectClient,
              projectDeadline,
              projecImageUrl,
              projectOwner,
              isActive,
              projectStatus,
              isDeleted,
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
              projectId,
              projectTitle,
              projectLocation,
              projectValue,
              projectDuration,
              projectStart,
              projectCategories,
              projectDescription,
              projectClient,
              projectDeadline,
              projecImageUrl,
              projectOwner,
              isActive,
              projectStatus,
              isDeleted,
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
