import React from "react";

const InputTextArea = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  disabled = false,
  required = true,
  rows,
  validation,
  width50 = false,
}) => {
  return (
    <div className={width50 ? "w-[50%]" : ""}>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-gray-2"
      >
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        className={`${
          validation && "border-red-3"
        } block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-2 focus:border-blue-500 focus:ring-blue-500`}
        required={required}
      ></textarea>
      {validation && (
        <p id="outlined_error_help" className="mt-2 text-xs text-red-3">
          <span className="font-medium">{validation}</span>
        </p>
      )}
    </div>
  );
};

export default InputTextArea;
