import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/modal";
import TransaksiForm from "./form";
import { setKeyword } from "../../redux/transaksi/actions";
import { postData } from "../../utils/fetch";

const TransaksiEdit = ({ isModalOpen, onCloseModal, dataId }) => {
  const redux = useSelector((state) => state.transaksi.data);
  // console.log(redux)
  const dispatch = useDispatch();
  const [selectedDropdown, setSelectedDropdown] = useState("");
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

  const resetForm = () => {
    setForm({
      customer: "",
      paket: "",
      berat: "",
      harga: "",
      total: "",
      pembayaran: "Lunas/Belum Lunas",
    });
  };

  const resetFormValidation = () => {
    setFormValidation({
      customer: "",
      paket: "",
      berat: "",
      harga: "",
      total: "",
      pembayaran: "Lunas/Belum Lunas",
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name] : e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formResult = { ...form };
    if (formResult.pembayaran.toLowerCase() === "lunas") {
      formResult = { ...form, pembayaran: true };
    } else if (formResult.pembayaran.toLowerCase() === "belum lunas") {
      formResult = { ...form, pembayaran: false };
    }
    const res = await postData(`/transaksi/update/${dataId}`, formResult);
    if (res?.data?.data) {
      dispatch(setKeyword(form.customer));
    }
  }

   const handleChangeDropdown = useCallback(
    (valueSelected) => {
      setForm({ ...form, pembayaran: valueSelected });
      setSelectedDropdown(valueSelected);
    },
    [form]
  );

  const fetchOneData = async () => {
    await resetForm();
    const oneData = redux.filter((data) => data._id === dataId);
    setForm({
      ...form,
      customer: oneData[0]?.customer,
      paket: oneData[0]?.paket,
      berat: oneData[0]?.berat,
      harga: oneData[0]?.harga,
      total: oneData[0]?.total,
      pembayaran: oneData[0]?.pembayaran ? "Lunas" : "Belum Lunas",
    });
  };

  useEffect(() => {
    fetchOneData();

  }, [dataId])

  if (isModalOpen) {
    return (
      <div>
        <Modal name="Edit Transaksi" handleCLoseModal={onCloseModal}>
          <TransaksiForm
            form={form}
            formValidation={formValidation}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleChangeDropdown={handleChangeDropdown}
            selectedDropdown={selectedDropdown}
            options={["Lunas", "Belum Lunas"]}
            cancelModal={() => {
              fetchOneData();
              resetFormValidation();
            }}
          />
        </Modal>
      </div>
    );
  }
};

export default TransaksiEdit;
