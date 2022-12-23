import React from "react";

const InputTextWithLabel = ({
    type = "text",
	label,
	name,
	onChange,
	placeholder,
	value,
	disabled = false,
	validation,
	widthContainer = false,
	autoComplete = "on",
	maxLength,
	isUseEyeIcon = false,
	EyeIcon,
	onBlur,
}) => {
	return (
		<div className={`${widthContainer ? `w-[48%]` : ""}`}>
			<div className="relative">
				<label
					htmlFor={name}
					className="mt-2 mb-1 block text-sm font-semibold text-gray-2">
					{label}
				</label>
				<input
					className={`focus:ring-blue-500" block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-2 focus:border-blue-500 ${
						validation && "border-red-3"
					}`}
					name={name}
					onChange={onChange}
					placeholder={placeholder}
					autoComplete={autoComplete}
					required
					maxLength={maxLength}
					type={type}
					value={value}
					disabled={disabled}
					onBlur={onBlur}
				/>
				{isUseEyeIcon && (
					<div className="absolute right-2 top-9">{EyeIcon}</div>
				)}
			</div>
			{validation && (
				<p id="outlined_error_help" className="mt-2 text-xs text-red-3">
					<span className="font-medium">{validation}</span>
				</p>
			)}
		</div>
	);
};

export default InputTextWithLabel;
