import Button from "../../components/button/Button";
import ButtonModal from "../../components/buttonModal";
import InputTextWithLebel from "../../components/input/InputTextWithLabel";
import SelectDropdown from "../../components/selectDropdown";

const TransaksiForm = ({
  handleSubmit,
  handleChange,
  formValidation = "",
  noneOption,
  name,
  options,
  optionsTotal,
  buttonView,
  cancelModal,
  buttonClass,
  isLoading,
  buttonText,
  buttonColor,
  resetModal,
  form,
  handleChangeDropdown,
  selectedPaketDropdown,
  handlePaketChangeDropdown,
  handleTotalChange,
  optionsPaket,
}) => {
  return (
    <form
      className="flex h-[90%] p-4 flex-col justify-between space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="space-y-6 p-6">
        <InputTextWithLebel
          name="customer"
          label="Nama Customer"
          onChange={handleChange}
          value={form.customer}
          validation={formValidation.customer}
        />
        {/* <SelectDropdown
            label="Paket"
            placeholder="Pilih Salah Satu"
            color={buttonColor}
            optionId={optionsPaket && optionsPaket.map((data) => data._id)}
            optionName={
              optionsPaket && optionsPaket.map((data) => data.nama_paket)
            }
            option={false}
            noneOption={noneOption}
            value={form.paket}
            selectedDropdown={selectedPaketDropdown}
            handleChangeDropdown={handlePaketChangeDropdown}
            validation={formValidation.paket}
          /> */}
        <InputTextWithLebel
          name="paket"
          label="Nama Paket"
          onChange={handleChange}
          value={form.paket}
          validation={formValidation.paket}
        />
        <div className="flex gap-4">
          <InputTextWithLebel
            name="berat"
            label="Berat (KG)"
            onChange={handleChange}
            value={form.berat}
            validation={formValidation.berat}
          />
          <InputTextWithLebel
            name="harga"
            label="Harga"
            onChange={handleChange}
            value={form.harga}
            validation={formValidation.harga}
          />
        </div>
        <InputTextWithLebel
          name="total"
          label="Total Pembayaran"
          optionId={optionsPaket && optionsPaket.map((data) => data._id)}
          optionName={optionsPaket && optionsPaket.map((data) => data.harga)}
          onChange={handleTotalChange}
          value={form.total}
          validation={formValidation.total}
        />
        <SelectDropdown
          placeholder="Belum Lunas"
          label="Pembayaran"
          name="pembayaran"
          option={options}
          noneOption={noneOption}
          selectedDropdown={form.pembayaran}
          handleChangeDropdown={handleChangeDropdown}
          formValidation={formValidation.pembayaran}
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

export default TransaksiForm;
