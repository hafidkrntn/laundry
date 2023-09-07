import Button from "../../components/button/Button";
import ButtonModal from "../../components/buttonModal";
import InputTextWithLebel from "../../components/input/InputTextWithLabel";
import InputTextWithArea from "../../components/input/InputTextArea";

const Form = ({
  handleSubmit,
  handleChange,
  formValidation = "",
  buttonView,
  cancelModal,
  buttonClass,
  isLoading,
  buttonText,
  buttonColor,
  resetModal,
  form,
}) => {
  return (
    <form
      className="flex h-[90%] p-4 flex-col justify-between space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="space-y-6 p-6">
        <InputTextWithLebel
          name="nama"
          label="Nama Customer"
          onChange={handleChange}
          value={form.nama}
          validation={formValidation.nama}
        />
        <InputTextWithLebel
          name="handphone"
          label="Nomor Handphone"
          onChange={handleChange}
          value={form.handphone}
          validation={formValidation.handphone}
        />
        <InputTextWithArea
          name="alamat"
          label="Alamat"
          rows={8}
          onChange={handleChange}
          value={form.alamat}
          validation={formValidation.alamat}
        />
        <div className="flex items-center justify-end space-x-2 rounded-b border-t border-gray-200 p-6">
          {!buttonView ? (
            <>
              {resetModal ? (
                <Button
                  className="border border-gray-3 bg-white text-black hover:bg-gray-100"
                  action={resetModal}
                >
                  Kembali
                </Button>
              ) : (
                <ButtonModal
                  className="border border-gray-3 bg-white text-black hover:bg-gray-100"
                  action={cancelModal}
                >
                  Batal
                </ButtonModal>
              )}
              <Button
                color={buttonColor}
                type="submit"
                className={buttonClass}
                loading={isLoading}
              >
                {buttonText}
              </Button>
            </>
          ) : (
            <ButtonModal
              color={buttonColor}
              action={resetModal}
              loading={isLoading}
              resetModal={resetModal}
            >
              Tutup
            </ButtonModal>
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;
