import { useState } from "react";
import Modal from "../../components/modal";
import Form from "./form";
import { postData } from "../../utils/fetch";

const Create = ({ isModalOpen, onCloseModal }) => {
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postData("/datas/register", form);
    onCloseModal();
    window.location.reload(true);
  };

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

  if (isModalOpen) {
    return (
      <div>
        <Modal name="Create Master Data" handleCLoseModal={onCloseModal}>
          <Form
            buttonColor="blue"
            buttonClass="border border-gray-3 bg-green-navbar text-white hover:bg-green-300"
            buttonText="Simpan"
            disabled
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formValidation={formValidation}
            resetForm={resetForm}
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

export default Create;
