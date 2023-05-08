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
export declare type KonsultanCreateFormInputValues = {
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
export declare type KonsultanCreateFormValidationValues = {
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
export declare type KonsultanCreateFormOverridesProps = {
    KonsultanCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type KonsultanCreateFormProps = React.PropsWithChildren<{
    overrides?: KonsultanCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: KonsultanCreateFormInputValues) => KonsultanCreateFormInputValues;
    onSuccess?: (fields: KonsultanCreateFormInputValues) => void;
    onError?: (fields: KonsultanCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: KonsultanCreateFormInputValues) => KonsultanCreateFormInputValues;
    onValidate?: KonsultanCreateFormValidationValues;
} & React.CSSProperties>;
export default function KonsultanCreateForm(props: KonsultanCreateFormProps): React.ReactElement;
