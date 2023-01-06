import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ModalDelete({
  type,
  action,
  handleSubmit,
  name,
  handleCLoseModal,
  widthFit = false,
  widthBgFit = false,
}) {
  return (
    <>
      <div className="fixed z-[2022] left-20 grid place-items-center w-full h-screen">
        <div
          className={`modal-box  relative p-0 ${widthFit ? "max-w-fit" : ""}`}
        >
          <div
            className={`relative p-0 min-w-[244px] md:min-w-[445px] min-h-[233px] rounded-lg ${
              widthBgFit ? "w-fit" : ""
            } bg-white shadow`}
          >
            <div className="flex bg-green-navbar items-start justify-between rounded-t border-b p-4">
              <label
                htmlFor="my-modal"
                className="ml-2 mt-1.5 inline-flex items-center rounded-lg bg-transparent text-sm text-gray-400 hover:text-gray-900"
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="mr-1 text-lg text-white"
                  onClick={handleCLoseModal}
                />
              </label>
              <h3 className="text-white mx-auto text-xl font-semibold">
                {name}
              </h3>
            </div>
            <form
              className="flex h-[90%] p-4 flex-col justify-between space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="mx-auto mt-8 text-xl">
                Apakah anda yakin menghapus data ini ?
              </div>
              <div className="mx-auto space-x-20">
                <button
                  className="bg-[#1F4BFF] px-10 py-2 text-xl text-white"
                  type="submit"
                  onClick={action}
                >
                  Ya
                </button>
                <button
                  className="bg-[#FF0000] px-10 py-2 text-xl text-white"
                  type="submit"
                  onClick={handleCLoseModal}
                >
                  Tidak
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
