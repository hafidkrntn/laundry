import React, { useCallback, useState } from "react";
import Modal from "../../components/modal";
import { useDispatch } from "react-redux";
import TransaksiForm from "./form";
import { postData } from "../../utils/fetch";
import { setKeyword } from "../../redux/transaksi/actions";

const TransaksiCreate = ({ isModalOpen, onCloseModal, paketData }) => {
  const [selectedPaketDropdown, setSelectedPaketDropdown] = useState("");
  // console.log(paketData.map((data) => data.nama_paket))
  const [selectedDropdown, setSelectedDropdown] = useState("");
  const dispatch = useDispatch();
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTotalChange = useCallback(
    (e) => {
      setForm({ ...form, total: e.target.value });
    },
    [form]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formResult = { ...form };
    if (formResult.pembayaran.toLowerCase() === "lunas") {
      formResult = { ...form, pembayaran: true };
    } else if (formResult.pembayaran.toLowerCase() === "belum lunas") {
      formResult = { ...form, pembayaran: false };
    }
    const res = await postData("/transaksi/create", formResult);
    if (res?.data?.data) {
      dispatch(setKeyword(form.customer));
    }
  };

  const handleChangeDropdown = useCallback(
    (valueSelected) => {
      setForm({ ...form, pembayaran: valueSelected });
      setSelectedDropdown(valueSelected);
    },
    [form]
  );

  const handlePaketChangeDropdown = useCallback(
    (paket, valueSelected) => {
      console.log(form)
      setForm({ ...form, nama_paket: paket});
      setSelectedPaketDropdown(valueSelected);
    },
    [form]
  );

  const resetForm = () => {
    setForm({
      customer: "",
      paket: "",
      berat: "",
      harga: "",
      total: "",
      pembayaran: "",
    });
  };

  const resetFormValidation = () => {
    setFormValidation({
      customer: "",
      paket: "",
      berat: "",
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
            // Handle Paket Change Dropdown
            handlePaketChangeDropdown={handlePaketChangeDropdown}
            selectedPaketDropdown={selectedPaketDropdown}
            optionsPaket={paketData.map((data) => data)}
            // handle penghitungan total
            // optionsTotal={redux.map((data) => data)}
            handleTotalChange={handleTotalChange}
            options={["Lunas", "Belum Lunas"]}
            formValidation={formValidation}
            cancelModal={() => {
              resetForm();
              resetFormValidation();
          }}

          />
        </Modal>
      </div>
    );
  }
};

export default TransaksiCreate;
