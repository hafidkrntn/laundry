import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import ButtonModal from "../../components/buttonModal";
import { InputSearch } from "../../components/input/InputSearch";
import { useEffect, useState } from "react";
import { fetchAllData } from "../../redux/customer/actions";
import Table from "../../components/table";

const Customer = () => {
  const customer = useSelector((state) => state.customer);
  // console.log(customer);
  const dispatch = useDispatch();
  const [dataId, setDataId] = useState("");
  const [action, setAction] = useState("");
  const [columnTable, setColumnTable] = useState([
    {
      name: "Nama Customer",
      value: "nama",
      sortable: true,
      sortByOrder: "",
    },
    {
      name: "Alamat",
      value: "alamat",
      sortable: true,
      sortByOrder: "",
    },
    {
      name: "Nomor Handphone",
      value: "handphone",
      sortable: true,
      sortByOrder: "",
    },
  ]);

  const handleDataId = (dataId, action) => {
    setDataId(dataId);
    setAction(action);
  }

  useEffect(() => {
    dispatch(fetchAllData(true));
  }, [
    dispatch,
    customer.page,
    customer.keyword,
    customer.limit,
    customer.orderBy,
    customer.orderDirection,
  ]);

  return (
    <div className="pl-6 w-full">
      <h1 className="text-4xl">Data Customer</h1>
      <div className="flex flex-wrap justify-between mt-20 items-center relative">
        <div>
          <InputSearch placeholder="Search" />
        </div>
        <div>
          <Button
            children="Eksport"
            className="bg-green-700 hover:bg-green-300 px-9"
          />
          <ButtonModal
            children="Tambah Data"
            className="bg-blue-600 hover:bg-blue-300 px-2"
          />
        </div>
      </div>
      <div className="mt-6">
        <Table columnTable={columnTable} data={customer.data} dataId={"_id"}  />
      </div>
    </div>
  );
};

export default Customer;
