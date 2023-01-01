import ButtonModal from "../../components/buttonModal";
import InputTextWithLebel from "../../components/input/InputTextWithLabel";
import SelectDropdown from "../../components/selectDropdown";

const TransaksiForm = ({
  handleSubmit,
  handleChange,
  formValidation = "",
  name,
  options,
  optionsTotal,
  noneOption,
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
        <div className="flex gap-4">
          <SelectDropdown
            label="Paket"
            placeholder="Pilih Salah Satu"
            optionId={optionsPaket && optionsPaket.map((data) => data._id)}
            optionName={
              optionsPaket && optionsPaket.map((data) => data.nama_paket)
            }
            onChange={handleChange}
            selectedDropdown={selectedPaketDropdown}
            handleChangeDropdown={handlePaketChangeDropdown}
            validation={formValidation.nama_paket}
          />
          <InputTextWithLebel
            name="berat"
            label="Berat (KG)"
            onChange={handleChange}
            value={form.berat}
            validation={formValidation.berat}
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
          placeholder="Lunas/Belum Lunas"
          label="Pembayaran"
          option={options}
          noneOption={noneOption}
          selectedDropdown={form.pembayaran}
          handleChangeDropdown={handleChangeDropdown}
          formValidation={formValidation.pembayaran}
        />
        <ButtonModal className="bg-[#6ECCAF] hover:bg-blue-600">
          {" "}
          Create{" "}
        </ButtonModal>
      </div>
    </form>
  );
};

export default TransaksiForm;
