import { useSelector } from "react-redux";
import ModalDelete from "../../components/modalDelete";
import { deleteData } from "../../utils/fetch";
import { useState } from "react";

const TransaksiDelete = ({
  isModalOpen,
  onCloseModal,
  dataId,
  fetchAllData,
}) => {
  const redux = useSelector((state) => state.transaksi);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await deleteData(`/transaksi/delete/${dataId}`);
    if (res?.data?.meta?.code === 200) {
      fetchAllData();
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
    if (res?.response?.data?.meta) {
      console.log(
        "Error",
        res.response.data.meta.code,
        res.response.data.meta.message
      );
    }
  };

  if (isModalOpen) {
    return (
      <ModalDelete
        name="Menghapus Transaksi"
        handleCLoseModal={onCloseModal}
        handleSubmit={handleSubmit}
      />
    );
  }
};

export default TransaksiDelete;
