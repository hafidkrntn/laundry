import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalOverlay from "./Overlay";

export default function Modal({
  children,
  name,
  handleCLoseModal,
  widthFit = false,
  widthBgFit = false,
}) {
  return (
    <>
      <div className="fixed z-[2022] left-20 grid place-items-center w-full h-screen">
        <div
          className={`modal-box relative p-0 ${widthFit ? "max-w-fit" : ""}`}
        >
          <div
            className={`relative p-0 min-w-[244px] md:min-w-[445px] min-h-[233px] rounded-lg ${
              widthBgFit ? "w-fit" : ""
            } bg-white shadow`}
          >
            <div className="flex items-start justify-between rounded-t border-b p-4">
              <label
                htmlFor="my-modal"
                className="ml-2 mt-1.5 inline-flex items-center rounded-lg bg-transparent text-sm text-gray-400 hover:text-gray-900"
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="mr-1 text-lg"
                  onClick={handleCLoseModal}
                />
              </label>
              <h3 className="mx-auto text-xl font-semibold">{name}</h3>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
