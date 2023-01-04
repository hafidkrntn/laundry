import Modal from "../../components/modal";
import TransaksiForm from "./form";

const TransaksiDelete = () => {
  return (
   <Modal name="Hapus Data">
    <TransaksiForm
     buttonColor="red"
     buttonText="Hapus"
     info={"Data akan dihapus secara permanen dan tidak dapat dikembalikan! Anda yakin ingin menghapus data ini?"}
    />
   </Modal>
  );
};

export default TransaksiDelete;
