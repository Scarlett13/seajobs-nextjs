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
  SelectField,
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
export default function ProjectUpdateForm(props) {
  const {
    id: idProp,
    project: projectModelProp,
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
    projectCategories: [],
    projectDeadline: "",
    projectSubCategory: [],
    projectOwner: "",
    isActive: "",
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
  const [projectDeadline, setProjectDeadline] = React.useState(
    initialValues.projectDeadline
  );
  const [projectSubCategory, setProjectSubCategory] = React.useState(
    initialValues.projectSubCategory
  );
  const [projectOwner, setProjectOwner] = React.useState(
    initialValues.projectOwner
  );
  const [isActive, setIsActive] = React.useState(initialValues.isActive);
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [createdOn, setCreatedOn] = React.useState(initialValues.createdOn);
  const [updatedOn, setUpdatedOn] = React.useState(initialValues.updatedOn);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = projectRecord
      ? { ...initialValues, ...projectRecord }
      : initialValues;
    setProjectId(cleanValues.projectId);
    setProjectTitle(cleanValues.projectTitle);
    setProjectLocation(cleanValues.projectLocation);
    setProjectValue(cleanValues.projectValue);
    setProjectDuration(cleanValues.projectDuration);
    setProjectStart(cleanValues.projectStart);
    setProjectCategories(cleanValues.projectCategories ?? []);
    setCurrentProjectCategoriesValue("");
    setProjectDeadline(cleanValues.projectDeadline);
    setProjectSubCategory(cleanValues.projectSubCategory ?? []);
    setCurrentProjectSubCategoryValue("");
    setProjectOwner(cleanValues.projectOwner);
    setIsActive(cleanValues.isActive);
    setIsDeleted(cleanValues.isDeleted);
    setCreatedOn(cleanValues.createdOn);
    setUpdatedOn(cleanValues.updatedOn);
    setErrors({});
  };
  const [projectRecord, setProjectRecord] = React.useState(projectModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Project, idProp)
        : projectModelProp;
      setProjectRecord(record);
    };
    queryData();
  }, [idProp, projectModelProp]);
  React.useEffect(resetStateValues, [projectRecord]);
  const [currentProjectCategoriesValue, setCurrentProjectCategoriesValue] =
    React.useState("");
  const projectCategoriesRef = React.createRef();
  const [currentProjectSubCategoryValue, setCurrentProjectSubCategoryValue] =
    React.useState("");
  const projectSubCategoryRef = React.createRef();
  const getDisplayValue = {
    projectSubCategory: (r) => {
      const enumDisplayValueMap = {
        Hukum: "Hukum",
        Keuangan_dan_Ekonomi: "Keuangan dan ekonomi",
        Kerja_Sama: "Kerja sama",
        Manajemen_Resiko: "Manajemen resiko",
        Sosial_dan_LARAP: "Sosial dan larap",
        Pengadaan: "Pengadaan",
      };
      return enumDisplayValueMap[r];
    },
  };
  const validations = {
    projectId: [{ type: "Required" }],
    projectTitle: [{ type: "Required" }],
    projectLocation: [{ type: "Required" }],
    projectValue: [{ type: "Required" }],
    projectDuration: [{ type: "Required" }],
    projectStart: [{ type: "Required" }],
    projectCategories: [{ type: "Required" }],
    projectDeadline: [{ type: "Required" }],
    projectSubCategory: [{ type: "Required" }],
    projectOwner: [{ type: "Required" }],
    isActive: [{ type: "Required" }],
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
          projectDeadline,
          projectSubCategory,
          projectOwner,
          isActive,
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
          await DataStore.save(
            Project.copyOf(projectRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ProjectUpdateForm")}
      {...rest}
    >
      <TextField
        label="Project id"
        isRequired={true}
        isReadOnly={true}
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
              projectDeadline,
              projectSubCategory,
              projectOwner,
              isActive,
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
              projectDeadline,
              projectSubCategory,
              projectOwner,
              isActive,
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
              projectDeadline,
              projectSubCategory,
              projectOwner,
              isActive,
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
              projectDeadline,
              projectSubCategory,
              projectOwner,
              isActive,
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
              projectDeadline,
              projectSubCategory,
              projectOwner,
              isActive,
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
        isReadOnly={true}
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
              projectDeadline,
              projectSubCategory,
              projectOwner,
              isActive,
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
              projectCategories: values,
              projectDeadline,
              projectSubCategory,
              projectOwner,
              isActive,
              isDeleted,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            values = result?.projectCategories ?? values;
          }
          setProjectCategories(values);
          setCurrentProjectCategoriesValue("");
        }}
        currentFieldValue={currentProjectCategoriesValue}
        label={"Project categories"}
        items={projectCategories}
        hasError={errors?.projectCategories?.hasError}
        errorMessage={errors?.projectCategories?.errorMessage}
        setFieldValue={setCurrentProjectCategoriesValue}
        inputFieldRef={projectCategoriesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Project categories"
          isRequired={true}
          isReadOnly={false}
          value={currentProjectCategoriesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.projectCategories?.hasError) {
              runValidationTasks("projectCategories", value);
            }
            setCurrentProjectCategoriesValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "projectCategories",
              currentProjectCategoriesValue
            )
          }
          errorMessage={errors.projectCategories?.errorMessage}
          hasError={errors.projectCategories?.hasError}
          ref={projectCategoriesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "projectCategories")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Project deadline"
        isRequired={true}
        isReadOnly={true}
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
              projectDeadline: value,
              projectSubCategory,
              projectOwner,
              isActive,
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
              projectDeadline,
              projectSubCategory: values,
              projectOwner,
              isActive,
              isDeleted,
              createdOn,
              updatedOn,
            };
            const result = onChange(modelFields);
            values = result?.projectSubCategory ?? values;
          }
          setProjectSubCategory(values);
          setCurrentProjectSubCategoryValue("");
        }}
        currentFieldValue={currentProjectSubCategoryValue}
        label={"Project sub category"}
        items={projectSubCategory}
        hasError={errors?.projectSubCategory?.hasError}
        errorMessage={errors?.projectSubCategory?.errorMessage}
        getBadgeText={getDisplayValue.projectSubCategory}
        setFieldValue={setCurrentProjectSubCategoryValue}
        inputFieldRef={projectSubCategoryRef}
        defaultFieldValue={""}
      >
        <SelectField
          label="Project sub category"
          placeholder="Please select an option"
          isDisabled={false}
          value={currentProjectSubCategoryValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.projectSubCategory?.hasError) {
              runValidationTasks("projectSubCategory", value);
            }
            setCurrentProjectSubCategoryValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "projectSubCategory",
              currentProjectSubCategoryValue
            )
          }
          errorMessage={errors.projectSubCategory?.errorMessage}
          hasError={errors.projectSubCategory?.hasError}
          ref={projectSubCategoryRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "projectSubCategory")}
        >
          <option
            children="Hukum"
            value="Hukum"
            {...getOverrideProps(overrides, "projectSubCategoryoption0")}
          ></option>
          <option
            children="Keuangan dan ekonomi"
            value="Keuangan_dan_Ekonomi"
            {...getOverrideProps(overrides, "projectSubCategoryoption1")}
          ></option>
          <option
            children="Kerja sama"
            value="Kerja_Sama"
            {...getOverrideProps(overrides, "projectSubCategoryoption2")}
          ></option>
          <option
            children="Manajemen resiko"
            value="Manajemen_Resiko"
            {...getOverrideProps(overrides, "projectSubCategoryoption3")}
          ></option>
          <option
            children="Sosial dan larap"
            value="Sosial_dan_LARAP"
            {...getOverrideProps(overrides, "projectSubCategoryoption4")}
          ></option>
          <option
            children="Pengadaan"
            value="Pengadaan"
            {...getOverrideProps(overrides, "projectSubCategoryoption5")}
          ></option>
        </SelectField>
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
              projectDeadline,
              projectSubCategory,
              projectOwner: value,
              isActive,
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
        isReadOnly={true}
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
              projectDeadline,
              projectSubCategory,
              projectOwner,
              isActive: value,
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
              projectDeadline,
              projectSubCategory,
              projectOwner,
              isActive,
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
              projectDeadline,
              projectSubCategory,
              projectOwner,
              isActive,
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
              projectDeadline,
              projectSubCategory,
              projectOwner,
              isActive,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || projectModelProp)}
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
              !(idProp || projectModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
