import { useState } from "react";
import Modal from "../../components/modal";
import Form from "./form";
import { postData } from "../../utils/fetch";

const Create = ({ isModalOpen, onCloseModal }) => {
  const [form, setForm] = useState({
    nama: "",
    alamat: "",
    handphone: "",
  });

  const [formValidation, setFormValidation] = useState({
    nama: "",
    alamat: "",
    handphone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postData("/users/register", form);
    onCloseModal();
    window.location.reload(true);
  };

  const resetForm = () => {
    setForm({
      nama: "",
    alamat: "",
    handphone: "",
    });
  };

  const resetFormValidation = () => {
    setFormValidation({
      nama: "",
    alamat: "",
    handphone: "",
    });
  };

  if (isModalOpen) {
    return (
      <div>
        <Modal name="Create Customer" handleCLoseModal={onCloseModal}>
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
