/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProjectCreateFormInputValues = {
    projectId?: string;
    projectTitle?: string;
    projectLocation?: string;
    projectValue?: string;
    projectDuration?: string;
    projectStart?: string;
    projectCategories?: string;
    projectDescription?: string;
    projectClient?: string;
    projectDeadline?: string;
    projecImageUrl?: string[];
    projectOwner?: string;
    isActive?: string;
    projectStatus?: string;
    isDeleted?: boolean;
    createdOn?: string;
    updatedOn?: string;
};
export declare type ProjectCreateFormValidationValues = {
    projectId?: ValidationFunction<string>;
    projectTitle?: ValidationFunction<string>;
    projectLocation?: ValidationFunction<string>;
    projectValue?: ValidationFunction<string>;
    projectDuration?: ValidationFunction<string>;
    projectStart?: ValidationFunction<string>;
    projectCategories?: ValidationFunction<string>;
    projectDescription?: ValidationFunction<string>;
    projectClient?: ValidationFunction<string>;
    projectDeadline?: ValidationFunction<string>;
    projecImageUrl?: ValidationFunction<string>;
    projectOwner?: ValidationFunction<string>;
    isActive?: ValidationFunction<string>;
    projectStatus?: ValidationFunction<string>;
    isDeleted?: ValidationFunction<boolean>;
    createdOn?: ValidationFunction<string>;
    updatedOn?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectCreateFormOverridesProps = {
    ProjectCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    projectId?: PrimitiveOverrideProps<TextFieldProps>;
    projectTitle?: PrimitiveOverrideProps<TextFieldProps>;
    projectLocation?: PrimitiveOverrideProps<TextFieldProps>;
    projectValue?: PrimitiveOverrideProps<TextFieldProps>;
    projectDuration?: PrimitiveOverrideProps<TextFieldProps>;
    projectStart?: PrimitiveOverrideProps<TextFieldProps>;
    projectCategories?: PrimitiveOverrideProps<TextFieldProps>;
    projectDescription?: PrimitiveOverrideProps<TextFieldProps>;
    projectClient?: PrimitiveOverrideProps<TextFieldProps>;
    projectDeadline?: PrimitiveOverrideProps<TextFieldProps>;
    projecImageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    projectOwner?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<TextFieldProps>;
    projectStatus?: PrimitiveOverrideProps<TextFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    createdOn?: PrimitiveOverrideProps<TextFieldProps>;
    updatedOn?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProjectCreateFormProps = React.PropsWithChildren<{
    overrides?: ProjectCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProjectCreateFormInputValues) => ProjectCreateFormInputValues;
    onSuccess?: (fields: ProjectCreateFormInputValues) => void;
    onError?: (fields: ProjectCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProjectCreateFormInputValues) => ProjectCreateFormInputValues;
    onValidate?: ProjectCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProjectCreateForm(props: ProjectCreateFormProps): React.ReactElement;
