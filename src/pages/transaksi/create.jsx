import React, { useCallback, useState } from "react";
import Modal from "../../components/modal";
import { useDispatch } from "react-redux";
import TransaksiForm from "./form";
import { postData } from "../../utils/fetch";
import { setKeyword } from "../../redux/transaksi/actions";

const TransaksiCreate = ({ isModalOpen, onCloseModal, paketData }) => {
  const [selectedPaketDropdown, setSelectedPaketDropdown] = useState("");
  const [selectedDropdown, setSelectedDropdown] = useState("");
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    createdAt: "",
    customer: "",
    nama_paket: "",
    berat: "",
    harga: "",
    total: "",
    pembayaran: "",
  });

  const [formValidation, setFormValidation] = useState({
    createdAt: "",
    customer: "",
    nama_paket: "",
    berat: "",
    harga: "",
    total: "",
    pembayaran: "",
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
    if (formResult.pembayaran.toLowerCase() === "Lunas") {
      formResult = { ...form, pembayaran: 1 };
    } else if (formResult.pembayaran.toLowerCase() === "Belum Lunas") {
      formResult = { ...form, pembayaran: 2 };
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
    (nama_paket, valueSelected) => {
      setForm({ ...form, nama_paket: nama_paket });
      setSelectedPaketDropdown(valueSelected);
    },
    [form]
  );

  const resetForm = () => {
    setForm({
      createdAt: "",
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
        <Modal
          name="Create Transaksi"
          handleCLoseModal={onCloseModal}
        >
          <TransaksiForm
            buttonColor="blue"
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
            optionsTotal={paketData.map((data) => data)}
            handleTotalChange={handleTotalChange}
            options={["Lunas", "Belum Lunas"]}
            formValidation={formValidation}
          />
        </Modal>
      </div>
    );
  }
};

export default TransaksiCreate;
