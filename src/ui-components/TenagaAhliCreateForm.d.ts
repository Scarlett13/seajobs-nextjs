/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TenagaAhliCreateFormInputValues = {
    taId?: string;
    taFullName?: string;
    taExpertise?: string;
    taAddress?: string;
    taEmail?: string;
    taPhoneNumber?: string;
    taPortfolioLink?: string[];
    taSelfDescription?: string;
    createdOn?: string;
    updatedOn?: string;
};
export declare type TenagaAhliCreateFormValidationValues = {
    taId?: ValidationFunction<string>;
    taFullName?: ValidationFunction<string>;
    taExpertise?: ValidationFunction<string>;
    taAddress?: ValidationFunction<string>;
    taEmail?: ValidationFunction<string>;
    taPhoneNumber?: ValidationFunction<string>;
    taPortfolioLink?: ValidationFunction<string>;
    taSelfDescription?: ValidationFunction<string>;
    createdOn?: ValidationFunction<string>;
    updatedOn?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TenagaAhliCreateFormOverridesProps = {
    TenagaAhliCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    taId?: PrimitiveOverrideProps<TextFieldProps>;
    taFullName?: PrimitiveOverrideProps<TextFieldProps>;
    taExpertise?: PrimitiveOverrideProps<TextFieldProps>;
    taAddress?: PrimitiveOverrideProps<TextFieldProps>;
    taEmail?: PrimitiveOverrideProps<TextFieldProps>;
    taPhoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    taPortfolioLink?: PrimitiveOverrideProps<TextFieldProps>;
    taSelfDescription?: PrimitiveOverrideProps<TextFieldProps>;
    createdOn?: PrimitiveOverrideProps<TextFieldProps>;
    updatedOn?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TenagaAhliCreateFormProps = React.PropsWithChildren<{
    overrides?: TenagaAhliCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TenagaAhliCreateFormInputValues) => TenagaAhliCreateFormInputValues;
    onSuccess?: (fields: TenagaAhliCreateFormInputValues) => void;
    onError?: (fields: TenagaAhliCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TenagaAhliCreateFormInputValues) => TenagaAhliCreateFormInputValues;
    onValidate?: TenagaAhliCreateFormValidationValues;
} & React.CSSProperties>;
export default function TenagaAhliCreateForm(props: TenagaAhliCreateFormProps): React.ReactElement;
