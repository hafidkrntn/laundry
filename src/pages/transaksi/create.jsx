import React, { useCallback, useEffect, useState } from "react";
import Modal from "../../components/modal";
import TransaksiForm from "./form";
import { postData } from "../../utils/fetch";

const TransaksiCreate = ({
  isModalOpen,
  onCloseModal,
  paketData,
  customer,
}) => {
  const [selectedPaketDropdown, setSelectedPaketDropdown] = useState("");
  const [selectedDropdown, setSelectedDropdown] = useState("");
  const [selectedCustomerDropdown, setSelectedCustomerDropdown] = useState("");
  const [selectedHargaDropdown, setSelectedHargaDropdown] = useState("");
  const [form, setForm] = useState({
    customer: "",
    paket: "",
    berat: "",
    harga: "",
    total: "",
    pembayaran: "Lunas/Belum Lunas",
  });

  const [formValidation, setFormValidation] = useState({
    customer: "",
    paket: "",
    berat: "",
    harga: "",
    total: "",
    pembayaran: "Lunas/Belum Lunas",
  });

  const handleHargaChangeDropdown = useCallback(
    (hargaSelected, valueSelected) => {
      setForm({ ...form, harga: valueSelected });
      setSelectedHargaDropdown(hargaSelected);
    },
    [form]
  );

  const handleChange = (e) => {
    if (e.target.name === "berat" || e.target.name === "harga") {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
        total: form.berat * form.harga,
      });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formResult = { ...form };
    if (formResult.pembayaran.toLowerCase() === "lunas") {
      formResult = { ...form, pembayaran: true };
    } else if (formResult.pembayaran.toLowerCase() === "belum lunas") {
      formResult = { ...form, pembayaran: false };
    }
    await postData("/transaksi/create", formResult);
    onCloseModal();
    window.location.reload(true);
  };


  const handleChangeDropdown = useCallback(
    (valueSelected) => {
      setForm({ ...form, pembayaran: valueSelected });
      setSelectedDropdown(valueSelected);
    },
    [form]
  );

  const handlePaketChangeDropdown = useCallback(
    (paketSelected, valueSelected) => {
      setForm({ ...form, paket: valueSelected });
      setSelectedPaketDropdown(valueSelected);
    },
    [form]
  );

  const handleCustomerChangeDropdown = useCallback(
    (customerSelected, valueSelected) => {
      setForm({ ...form, customer: valueSelected });
      setSelectedCustomerDropdown(valueSelected);
    },
    [form]
  );

  const resetForm = () => {
    setForm({
      customer: "",
      paket: "",
      berat: 0,
      harga: "",
      total: "",
      pembayaran: "",
    });
  };

  const resetFormValidation = () => {
    setFormValidation({
      customer: "",
      paket: "",
      berat: 0,
      harga: "",
      total: "",
      pembayaran: "",
    });
  };

  if (isModalOpen) {
    return (
      <div className="">
        <Modal name="Create Transaksi" handleCLoseModal={onCloseModal}>
          <TransaksiForm
            buttonColor="blue"
            buttonClass="border border-gray-3 bg-green-navbar text-white hover:bg-green-300"
            buttonText="Simpan"
            disabled
            form={form}
            selectedDropdown={selectedDropdown}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleChangeDropdown={handleChangeDropdown}
            handlePaketChangeDropdown={handlePaketChangeDropdown}
            selectedPaketDropdown={selectedPaketDropdown}
            optionsPaket={paketData.map((data) => data)}
            optionsCustomer={customer.map((data) => data)}
            handleCustomerChangeDropdown={handleCustomerChangeDropdown}
            selectedCustomerDropdown={selectedCustomerDropdown}
            selectedHargaDropdown={selectedHargaDropdown}
            handleHargaChangeDropdown={handleHargaChangeDropdown}
            options={["Lunas", "Belum Lunas"]}
            formValidation={formValidation}
            resetFormValidation={resetFormValidation}
            cancelModal={() => {
              resetForm();
              resetFormValidation();
              onCloseModal();
            }}
          />
        </Modal>
      </div>
    );
  }
};

export default TransaksiCreate;
