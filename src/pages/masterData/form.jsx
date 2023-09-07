import Button from "../../components/button/Button";
import ButtonModal from "../../components/buttonModal";
import InputTextWithLebel from "../../components/input/InputTextWithLabel";

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
          name="kode"
          label="Kode"
          onChange={handleChange}
          value={form.kode}
          validation={formValidation.kode}
        />
        <InputTextWithLebel
          name="nama_paket"
          label="Nama Paket"
          onChange={handleChange}
          value={form.nama_paket}
          validation={formValidation.nama_paket}
        />
        <InputTextWithLebel
          name="harga"
          label="Harga"
          onChange={handleChange}
          value={form.harga}
          validation={formValidation.harga}
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

        {/* <button
          className="bg-[#6ECCAF] hover:bg-blue-600 w-full rounded-xl text-white text-2xl py-2"
          type="submit"
          resetModal={resetModal}
        >
          {" "}
          Create{" "}
        </button> */}
      </div>
    </form>
  );
};

export default Form;
