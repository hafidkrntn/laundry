import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../../components/modal";
import Form from "./form";
import { postData } from "../../utils/fetch";

const Edit = ({ isModalOpen, onCloseModal, dataId }) => {
  const redux = useSelector((state) => state.customer.data);
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
    await postData(`/users/update/${dataId}`, form);
    onCloseModal();
    window.location.reload(true);
  };

  const fetchOneData = async () => {
    await resetForm();
    const oneData = redux.filter((data) => data._id === dataId);
    setForm({
      ...form,
      nama: oneData[0]?.nama,
      alamat: oneData[0]?.alamat,
      handphone: oneData[0]?.handphone,
    });
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
      harga: "",
    });
  };

  useEffect(() => {
    fetchOneData();
  }, [dataId]);

  if (isModalOpen) {
    return (
      <div>
        <Modal name="Edit Customer" handleCLoseModal={onCloseModal}>
          <Form
            buttonText="Ubah Data"
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
