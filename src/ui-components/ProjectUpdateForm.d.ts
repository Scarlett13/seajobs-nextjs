/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Project } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProjectUpdateFormInputValues = {
    projectId?: string;
    projectTitle?: string;
    projectLocation?: string;
    projectValue?: string;
    projectDuration?: string;
    projectStart?: string;
    projectCategories?: string[];
    projectDeadline?: string;
    projectSubCategory?: string[];
    projectOwner?: string;
    isActive?: string;
    isDeleted?: boolean;
    createdOn?: string;
    updatedOn?: string;
};
export declare type ProjectUpdateFormValidationValues = {
    projectId?: ValidationFunction<string>;
    projectTitle?: ValidationFunction<string>;
    projectLocation?: ValidationFunction<string>;
    projectValue?: ValidationFunction<string>;
    projectDuration?: ValidationFunction<string>;
    projectStart?: ValidationFunction<string>;
    projectCategories?: ValidationFunction<string>;
    projectDeadline?: ValidationFunction<string>;
    projectSubCategory?: ValidationFunction<string>;
    projectOwner?: ValidationFunction<string>;
    isActive?: ValidationFunction<string>;
    isDeleted?: ValidationFunction<boolean>;
    createdOn?: ValidationFunction<string>;
    updatedOn?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectUpdateFormOverridesProps = {
    ProjectUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    projectId?: PrimitiveOverrideProps<TextFieldProps>;
    projectTitle?: PrimitiveOverrideProps<TextFieldProps>;
    projectLocation?: PrimitiveOverrideProps<TextFieldProps>;
    projectValue?: PrimitiveOverrideProps<TextFieldProps>;
    projectDuration?: PrimitiveOverrideProps<TextFieldProps>;
    projectStart?: PrimitiveOverrideProps<TextFieldProps>;
    projectCategories?: PrimitiveOverrideProps<TextFieldProps>;
    projectDeadline?: PrimitiveOverrideProps<TextFieldProps>;
    projectSubCategory?: PrimitiveOverrideProps<SelectFieldProps>;
    projectOwner?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<TextFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    createdOn?: PrimitiveOverrideProps<TextFieldProps>;
    updatedOn?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProjectUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProjectUpdateFormOverridesProps | undefined | null;
} & {
    id?: {
        projectId: string;
        isActive: string;
        projectDeadline: string;
        projectStart: string;
    };
    project?: Project;
    onSubmit?: (fields: ProjectUpdateFormInputValues) => ProjectUpdateFormInputValues;
    onSuccess?: (fields: ProjectUpdateFormInputValues) => void;
    onError?: (fields: ProjectUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProjectUpdateFormInputValues) => ProjectUpdateFormInputValues;
    onValidate?: ProjectUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProjectUpdateForm(props: ProjectUpdateFormProps): React.ReactElement;
