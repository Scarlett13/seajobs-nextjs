import clsx from "clsx";
import get from "lodash.get";
import { useState } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import Typography from "../typography/Typography";

export type TextAreaProps = {
  label: string | null;
  id: string;
  placeholder?: string;
  helperText?: string;
  readOnly?: boolean;
  hideError?: boolean;
  validation?: RegisterOptions;
  containerClassName?: string;
  maxLength?: number;
} & React.ComponentPropsWithoutRef<"textarea">;

export default function TextArea({
  label,
  placeholder = "",
  helperText,
  id,
  readOnly = false,
  hideError = false,
  validation,
  disabled,
  containerClassName,
  maxLength,
  ...rest
}: TextAreaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, id);
  const withLabel = label !== null;

  const [counterText, setCounterText] = useState<string>("");

  return (
    <div className={containerClassName}>
      {withLabel && (
        <Typography as="label" variant="s3" className="block" htmlFor={id}>
          {label}
        </Typography>
      )}
      <div className={clsx("relative", withLabel && "mt-1")}>
        <textarea
          {...register(id, validation)}
          rows={3}
          {...rest}
          name={id}
          id={id}
          readOnly={readOnly}
          disabled={disabled}
          className={clsx(
            "block w-full rounded-none shadow-sm resize-none",
            "border-gray-300 bg-black focus:outline-none focus:ring-main-cta-button-bg focus:border-main-cta-button-bg",
            (readOnly || disabled) &&
              "cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500"
          )}
          placeholder={placeholder}
          aria-describedby={id}
          maxLength={maxLength ? maxLength : undefined}
          onChange={(e) => {
            if (maxLength) {
              setCounterText(
                `Karakter tersisa: ${maxLength - e.target.value.length}`
              );
            }

            // console.log(e.target.value);
          }}
        />
      </div>
      {!(!hideError && error) && counterText && (
        <Typography
          variant="c1"
          color="secondary"
          className="mt-1 text-gray-400"
        >
          {counterText}
        </Typography>
      )}
      {!hideError && error && (
        <Typography variant="c1" color="danger" className="mt-1">
          {error?.message?.toString()}
        </Typography>
      )}
    </div>
  );
}
