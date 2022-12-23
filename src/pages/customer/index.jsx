import React from "react";
import infoIcon from "../../assets/iconInfo.svg";
import ButtonExport from "../../components/buttonExport";
import ButtonModal from "../../components/buttonModal";
import { InputSearch } from "../../components/input/InputSearch";
import Table from "../../components/table";

const Customer = () => {
  return (
    <>
      <div className="ml-4 mr-8 w-full bg-white">
        <div className="container p-5">
          <h1 className="mb-7 ml-2 font-semibold text-black text-2xl">
            Customer
            <div
              className="tooltip tooltip-bottom ml-2 "
              data-tip="Customer"
            >
              <button className="translate-y-0.5">
                <img src={infoIcon} alt="info" />
              </button>
            </div>
          </h1>
          <div className="flex items-center justify-between bg-white pb-4">
            <InputSearch />
            <div>
              <ButtonExport
                color="green"
                className="bg-green-3 hover:bg-green-2 focus:ring-green-4"
              >
                Eksport
              </ButtonExport>
              <ButtonModal
                color="blue"
                className="bg-blue-3 hover:bg-blue-2 focus:ring-blue-4"
              >
                Tambah Baru
              </ButtonModal>
            </div>
          </div>
          <Table />
        </div>
      </div>
    </>
  );
};

export default Customer;
