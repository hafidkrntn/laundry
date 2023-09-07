import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/modal";
import { postData } from "../../utils/fetch";
import FormEdit from "./formEdit";

const TransaksiEdit = ({ isModalOpen, onCloseModal, dataId,}) => {
  const redux = useSelector((state) => state.transaksi.data);
  const paket = useSelector((state) => state.transaksi.paket);
  const customer = useSelector((state) => state.transaksi.customer);
  // console.log(paket)
  const dispatch = useDispatch();
  const [selectedDropdown, setSelectedDropdown] = useState("");
  const [selectedPaketDropdown, setSelectedPaketDropdown] = useState("");
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
    await postData(`/transaksi/update/${dataId}`, formResult);
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

  const handleHargaChangeDropdown = useCallback(
    (hargaSelected, valueSelected) => {
      setForm({ ...form, harga: valueSelected });
      setSelectedHargaDropdown(hargaSelected);
    },
    [form]
  );

  const fetchOneData = async () => {
    await resetForm();
    const oneData = redux.filter((data) => data._id === dataId);
    console.log(oneData[0]?.paket)
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
  }, [dataId]);

  if (isModalOpen) {
    return (
      <div>
        <Modal name="Edit Transaksi" handleCLoseModal={onCloseModal}>
          <FormEdit
            button="green"
            buttonText="Ubah Data"
            form={form}
            selectedDropdown={selectedDropdown}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleChangeDropdown={handleChangeDropdown}
            handlePaketChangeDropdown={handlePaketChangeDropdown}
            selectedPaketDropdown={selectedPaketDropdown}
            optionsPaket={paket.map((data) => data)}
            optionsCustomer={customer.map((data) => data)}
            handleCustomerChangeDropdown={handleCustomerChangeDropdown}
            selectedCustomerDropdown={selectedCustomerDropdown}
            selectedHargaDropdown={selectedHargaDropdown}
            handleHargaChangeDropdown={handleHargaChangeDropdown}
            options={["Lunas", "Belum Lunas"]}
            formValidation={formValidation}
            resetFormValidation={resetFormValidation}
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

export default TransaksiEdit;
