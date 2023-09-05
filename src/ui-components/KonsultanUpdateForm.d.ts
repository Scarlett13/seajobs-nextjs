/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Konsultan } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type KonsultanUpdateFormInputValues = {
    konsultanId?: string;
    konsultanName?: string;
    konsultanLocation?: string;
    konsultanAddress?: string;
    konsultanEmail?: string;
    konsultanPhoneNumber?: string;
    konsultanRangeTotalEmployees?: string;
    konsultanPIC?: string;
    konsultanDescription?: string;
    createdOn?: string;
    updatedOn?: string;
};
export declare type KonsultanUpdateFormValidationValues = {
    konsultanId?: ValidationFunction<string>;
    konsultanName?: ValidationFunction<string>;
    konsultanLocation?: ValidationFunction<string>;
    konsultanAddress?: ValidationFunction<string>;
    konsultanEmail?: ValidationFunction<string>;
    konsultanPhoneNumber?: ValidationFunction<string>;
    konsultanRangeTotalEmployees?: ValidationFunction<string>;
    konsultanPIC?: ValidationFunction<string>;
    konsultanDescription?: ValidationFunction<string>;
    createdOn?: ValidationFunction<string>;
    updatedOn?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KonsultanUpdateFormOverridesProps = {
    KonsultanUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    konsultanId?: PrimitiveOverrideProps<TextFieldProps>;
    konsultanName?: PrimitiveOverrideProps<TextFieldProps>;
    konsultanLocation?: PrimitiveOverrideProps<TextFieldProps>;
    konsultanAddress?: PrimitiveOverrideProps<TextFieldProps>;
    konsultanEmail?: PrimitiveOverrideProps<TextFieldProps>;
    konsultanPhoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    konsultanRangeTotalEmployees?: PrimitiveOverrideProps<TextFieldProps>;
    konsultanPIC?: PrimitiveOverrideProps<TextFieldProps>;
    konsultanDescription?: PrimitiveOverrideProps<TextFieldProps>;
    createdOn?: PrimitiveOverrideProps<TextFieldProps>;
    updatedOn?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type KonsultanUpdateFormProps = React.PropsWithChildren<{
    overrides?: KonsultanUpdateFormOverridesProps | undefined | null;
} & {
    konsultanId?: string;
    konsultan?: Konsultan;
    onSubmit?: (fields: KonsultanUpdateFormInputValues) => KonsultanUpdateFormInputValues;
    onSuccess?: (fields: KonsultanUpdateFormInputValues) => void;
    onError?: (fields: KonsultanUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: KonsultanUpdateFormInputValues) => KonsultanUpdateFormInputValues;
    onValidate?: KonsultanUpdateFormValidationValues;
} & React.CSSProperties>;
export default function KonsultanUpdateForm(props: KonsultanUpdateFormProps): React.ReactElement;
