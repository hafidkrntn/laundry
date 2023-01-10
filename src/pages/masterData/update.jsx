import {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../../components/modal";
import Form from "./form";
import { postData } from "../../utils/fetch";

const Edit = ({ isModalOpen, onCloseModal, dataId }) => {
  const redux = useSelector((state) => state.masterData.data);
  // console.log(redux)
  const [selectedDropdown, setSelectedDropdown] = useState("");
  const [form, setForm] = useState({
    kode: "",
    nama_paket: "",
    harga: "",
  });

  const [formValidation, setFormValidation] = useState({
    kode: "",
    nama_paket: "",
    harga: "",
  });

  const resetForm = () => {
    setForm({
        kode: "",
        nama_paket: "",
        harga: "",
    });
  };

  const resetFormValidation = () => {
    setFormValidation({
        kode: "",
        nama_paket: "",
        harga: "",
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name] : e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postData(`/datas/update/${dataId}`, form);
    onCloseModal();
    window.location.reload(true);
  }

  const fetchOneData = async () => {
    await resetForm();
    const oneData = redux.filter((data) => data._id === dataId);
    setForm({
      ...form,
      kode: oneData[0]?.kode,
      nama_paket: oneData[0]?.nama_paket,
      harga: oneData[0]?.harga,
    });
  };

  useEffect(() => {
    fetchOneData();

  }, [dataId])

  if (isModalOpen) {
    return (
      <div>
        <Modal name="Edit Transaksi" handleCLoseModal={onCloseModal}>
          <Form
            form={form}
            formValidation={formValidation}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            cancelModal={() => {
              fetchOneData();
              resetFormValidation();
              onCloseModal();
            }}
          />
        </Modal>
      </div>
    );
  }
};

export default Edit;
