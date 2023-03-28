/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TenagaAhli } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TenagaAhliUpdateFormInputValues = {
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
export declare type TenagaAhliUpdateFormValidationValues = {
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
export declare type TenagaAhliUpdateFormOverridesProps = {
    TenagaAhliUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type TenagaAhliUpdateFormProps = React.PropsWithChildren<{
    overrides?: TenagaAhliUpdateFormOverridesProps | undefined | null;
} & {
    taId?: string;
    tenagaAhli?: TenagaAhli;
    onSubmit?: (fields: TenagaAhliUpdateFormInputValues) => TenagaAhliUpdateFormInputValues;
    onSuccess?: (fields: TenagaAhliUpdateFormInputValues) => void;
    onError?: (fields: TenagaAhliUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TenagaAhliUpdateFormInputValues) => TenagaAhliUpdateFormInputValues;
    onValidate?: TenagaAhliUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TenagaAhliUpdateForm(props: TenagaAhliUpdateFormProps): React.ReactElement;
