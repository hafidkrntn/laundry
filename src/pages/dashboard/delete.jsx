import ModalDelete from "../../components/modalDelete";
import { deleteData } from "../../utils/fetch";
import { useState } from "react";

const Delete = ({ isModalOpen, onCloseModal, dataId }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await deleteData(`/transaksi/delete/${dataId}`);
    onCloseModal();
    window.location.reload(true);
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

export default Delete;
