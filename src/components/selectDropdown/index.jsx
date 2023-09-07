import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import iconInfo from "../../assets/iconInfo.svg";

export default function SelectDropdown({
  color,
  placeholder,
  disabled,
  noneOption,
  nullOption,
  option,
  optionKeyName = false,
  optionKeyId = false,
  optionId,
  optionName,
  handleChangeDropdown,
  selectedDropdown,
  label,
  validation,
  widthContainer = false,
}) {
  const options = option;
  const [open, setopen] = useState(false);
  return (
    <>
      <div className={`${widthContainer ? `w-[48%]` : ""}`}>
        <label
          htmlFor="select"
          className="mb-2 block text-sm font-semibold text-gray-2"
        >
          {label}
        </label>
        <div className="relative">
          <div
            className={`${
              validation && "border-1 border-red-3"
            } flex justify-between rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-4 text-sm text-gray-2`}
            required
            onClick={() => {
              !disabled ? setopen(!open) : setopen(false);
            }}
          >
            {!nullOption
              ? selectedDropdown && selectedDropdown !== ""
                ? selectedDropdown
                : placeholder
              : selectedDropdown === undefined
              ? placeholder
              : selectedDropdown}
            <FontAwesomeIcon
              icon={!open ? faChevronDown : faChevronUp}
              className="mr-2 pt-1"
            />
          </div>
          {validation && (
            <p id="outlined_error_help" className="mt-2 text-xs text-red-3">
              <span className="font-medium">{validation}</span>
            </p>
          )}
          <ul
            className={`mt-2 max-h-[15rem] overflow-y-auto rounded-lg border text-sm text-gray-2 ${
              open || "hidden"
            }`}
          >
            {noneOption && (
              <li
                className={`flex p-2.5 pl-4 hover:bg-${color}-4 hover:text-white`}
                onClick={() => {
                  nullOption
                    ? handleChangeDropdown(undefined)
                    : handleChangeDropdown(0);
                  setopen(false);
                }}
              >
                <img src={iconInfo} alt="info" className="mr-4 pt-0.5 pl-1" />
                {noneOption}
              </li>
            )}
            {option &&
              options.map((option, index) => (
                <li
                  key={index}
                  className={`p-2.5 pl-4 hover:bg-${color}-4 hover:text-white ${
                    selectedDropdown === option[optionKeyName] ||
                    (selectedDropdown === option && `bg-${color}-4`)
                  }`}
                  onClick={() => {
                    handleChangeDropdown(
                      !optionKeyName ? option : option[`${optionKeyName}`]
                    );
                    setopen(false);
                  }}
                >
                  <div className="flex">
                    <div className={`bg-blue-5 px-3 py-1 text-${color}-3`}>
                      {!optionKeyName ? option : option[`${optionKeyName}`]}
                    </div>
                  </div>
                </li>
              ))}
            {optionId &&
              optionName &&
              optionId.map((id, index) => (
                <li
                  key={index}
                  className={`p-2.5 pl-4 hover:bg-${color}-4 hover:text-white ${
                    selectedDropdown === optionName[index][optionKeyName] &&
                    `bg-${color}-4`
                  }`}
                  onClick={() => {
                    handleChangeDropdown(
                      !optionKeyId ? id : id[`${optionKeyId}`],
                      !optionKeyName
                        ? optionName[index]
                        : optionName[index][`${optionKeyName}`]
                    );
                    setopen(false);
                  }}
                >
                  <div className="flex">
                    <div className={`bg-blue-5 px-3 py-1 text-${color}-3`}>
                      {!optionKeyName
                        ? optionName[index]
                        : optionName[index][`${optionKeyName}`]}
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
