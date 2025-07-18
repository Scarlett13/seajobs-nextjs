import { ExtractProps } from "@utils/types/helper";
import clsx from "clsx";
import get from "lodash.get";
import {
  Controller,
  RegisterOptions,
  useFormContext,
  FormProvider,
} from "react-hook-form";
import { FiChevronDown, FiX } from "react-icons/fi";
import Select, { components, MultiValue, StylesConfig } from "react-select";
import Typography from "../typography/Typography";

export type SearchableSelectInputProps = {
  label: string | null;
  id: string;
  placeholder?: React.ReactNode;
  helperText?: string;
  type?: string;
  isMulti?: boolean;
  readOnly?: boolean;
  hideError?: boolean;
  validation?: RegisterOptions;
  options: { value: string; label: string }[];
  containerClassName?: string;
  isTa?: boolean;
} & React.ComponentPropsWithoutRef<"select"> &
  ExtractProps<Select>;

export default function SearchableSelectInput({
  disabled,
  readOnly,
  label,
  helperText,
  id,
  isMulti = false,
  placeholder,
  validation,
  options,
  hideError = false,
  containerClassName,
  isTa,
  ...rest
}: SearchableSelectInputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, id);

  const withLabel = label !== null;

  //#region  //*=========== Styles ===========
  const customStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      // red-500 and gray-300
      border: `1px solid ${
        error ? "#EF4444" : disabled ? "#212121" : "#D1D5DB"
      }`,
      "&:hover": {
        border: `1px solid ${
          error ? "#EF4444" : disabled ? "#212121" : "#D1D5DB"
        }`,
      },
      boxShadow: "none",
      transition: "none",
      "&:focus-within": {
        border: `1px solid ${error ? "#EF4444" : "var(--color-primary-500)"}`,
        boxShadow: `0 0 0 1px ${
          error ? "#EF4444" : "var(--color-primary-500)"
        }`,
      },
      "*": {
        boxShadow: "none !important",
      },
      borderRadius: "0px",
      padding: "0 0.75rem",
      background:
        disabled || readOnly
          ? isTa
            ? "#212121"
            : "#D1D5DB"
          : isTa
          ? "#000000"
          : "#ffffff",
      cursor: "pointer",
    }),

    valueContainer: (styles) => ({
      ...styles,
      padding: 0,
      gap: "0.5rem",
    }),
    input: (styles) => ({
      ...styles,
      padding: 0,
      margin: 0,
      caretColor: "var(--color-primary-500)",
      color: isTa ? "#000000" : "#ffffff",
      "::placeholder": {
        color: isTa ? "#000000" : "#ffffff",
      },
    }),
    indicatorsContainer: (styles) => ({
      ...styles,
      "&>div": {
        padding: 0,
      },
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: disabled ? "#212121" : "#878787",
      "&:hover": {
        color: disabled ? "#212121" : "#878787",
      },
    }),
    //mainin disini untuk list opsi
    option: (styles, state) => ({
      ...styles,
      //warna tulisannya disini
      color: isTa ? "#ffffff" : "#000000",
      background: state.isSelected
        ? "var(form-section-blue)"
        : isTa
        ? "#000000"
        : "#ffffff",
      ":hover": {
        background: isTa ? "#212121" : "#e6e6e6",
      },
      cursor: "pointer",
    }),
    multiValue: (styles) => ({
      ...styles,
      //warna tulisan opsi yang udah kepilih disini
      color: isTa ? "#ffffff" : "#000000",
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
      background: "var(--color-primary-100)",
      borderRadius: "0px",
      padding: "0.25rem 0.75rem",
      margin: 0,
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: "var(--color-primary-700)",
      padding: 0,
      paddingLeft: 0,
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: "var(--color-primary-700)",
      padding: 0,
      paddingLeft: "0.5rem",
      "&:hover": {
        color: "var(--color-primary-700)",
        backgroundColor: "transparent",
      },
    }),
    menu: (styles) => ({
      ...styles,
      borderRadius: "0px",
      overflow: "hidden",
      background: isTa ? "#000000" : "#ffffff",
      color: isTa ? "#000000" : "#ffffff",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: isTa ? "#ffffff" : "#000000",
    }),
  };

  //#endregion  //*======== Styles ===========

  return (
    <div className={containerClassName}>
      {withLabel && (
        <Typography
          as="label"
          variant="s3"
          className="block"
          htmlFor={`id_${id}`}
        >
          {label}
        </Typography>
      )}
      <div
        className={clsx(
          "relative",
          withLabel && "mt-1",
          (disabled || readOnly) && "cursor-not-allowed"
        )}
      >
        <Controller
          name={id}
          control={control}
          rules={validation}
          render={({ field }) => {
            return (
              <Select
                id={id}
                instanceId={id}
                {...field}
                value={
                  //? null is needed so if the selected value is not found in the options, it will clear the value
                  isMulti
                    ? field.value?.map(
                        (value: unknown) =>
                          options.find((option) => option.value === value) ??
                          null
                      )
                    : options.find((opt) => opt.value === field.value) ?? null
                }
                onChange={(selectedOptions) => {
                  isMulti
                    ? field.onChange(
                        (
                          selectedOptions as MultiValue<
                            (typeof options)[number]
                          >
                        ).map((option) => option?.value ?? "")
                      )
                    : field.onChange(
                        (selectedOptions as (typeof options)[number])?.value ??
                          ""
                      );
                }}
                isDisabled={disabled}
                isClearable
                isMulti={isMulti}
                closeMenuOnSelect={!isMulti}
                placeholder={placeholder}
                options={options}
                classNames={{
                  control: () => "!min-h-[2.25rem] md:!min-h-[2.5rem]",
                }}
                styles={customStyles}
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator: (props) => (
                    <components.DropdownIndicator {...props}>
                      <FiChevronDown className="text-xl" />
                    </components.DropdownIndicator>
                  ),
                  ClearIndicator: (props) => (
                    <components.ClearIndicator {...props}>
                      <FiX className="mr-0.5 text-lg text-typo-icons hover:text-typo-secondary" />
                    </components.ClearIndicator>
                  ),
                  MultiValueRemove: (props) => (
                    <components.MultiValueRemove {...props}>
                      <FiX size={16} />
                    </components.MultiValueRemove>
                  ),
                }}
                {...rest}
              />
            );
          }}
        />
        {!(!hideError && error) && helperText && (
          <Typography variant="c1" color="secondary" className="mt-1">
            {helperText}
          </Typography>
        )}
        {!hideError && error && (
          <Typography variant="c1" color="danger" className="mt-1">
            {error?.message?.toString()}
          </Typography>
        )}
      </div>
    </div>
  );
}
