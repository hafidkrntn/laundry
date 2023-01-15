import { useDispatch, useSelector } from "react-redux";
import ButtonModal from "../../components/buttonModal";
import { InputSearch } from "../../components/input/inputSearchCustomer";
import { useCallback, useEffect, useState } from "react";
import {
  fetchAllData,
  setLimit,
  setOrderBy,
  setOrderDirection,
  setPage,
} from "../../redux/customer/actions";
import Table from "../../components/table";
import Create from "./create";
import Delete from "./delete";
import Edit from "./update";

const Customer = () => {
  const customer = useSelector((state) => state.customer);
  const datas = customer.data;
  const dispatch = useDispatch();
  const [dataId, setDataId] = useState("");
  const [action, setAction] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleModalOpen = useCallback(
    (action) => {
      setAction(action);
      setIsModalOpen(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isModalOpen]
  );

  const handleModalClose = useCallback(
    () => {
      setAction("");
      setIsModalOpen(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isModalOpen]
  );

  const handleDataId = (dataId, action) => {
    setDataId(dataId);
    setAction(action);
  };

  const handleSortTable = async (idx) => {
    if (columnTable[idx].sortbyOrder === "asc") {
      const newArr = [...columnTable];
      newArr[idx].sortbyOrder = "desc";
      setColumnTable([...newArr]);
      dispatch(setOrderBy(columnTable[idx].value));
      dispatch(setOrderDirection("desc"));
    } else if (columnTable[idx].sortbyOrder === "desc") {
      const newArr = [...columnTable];
      newArr[idx].sortbyOrder = "";
      setColumnTable([...newArr]);
      dispatch(setOrderBy(""));
      dispatch(setOrderDirection(""));
    } else {
      const newArr = [
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
      ];
      newArr[idx].sortbyOrder = "asc";
      setColumnTable([...newArr]);
      dispatch(setOrderBy(columnTable[idx].value));
      dispatch(setOrderDirection("asc"));
    }
  };

  useEffect(() => {
    dispatch(fetchAllData(true));
  }, [
    dispatch,
    customer.page,
    customer.limit,
    customer.orderBy,
    customer.orderDirection,
  ]);

  return (
    <>
      {(() => {
        switch (action) {
          case "create":
            return (
              <Create
                fetchAllData={() => {
                  dispatch(fetchAllData(false));
                }}
                isModalOpen={handleModalOpen}
                onCloseModal={handleModalClose}
              />
            );
          case "edit":
            return (
              <Edit
                dataId={dataId}
                isModalOpen={handleModalOpen}
                onCloseModal={handleModalClose}
              />
            );
          case "delete":
            return (
              <Delete
                dataId={dataId}
                fetchAllData={() => {
                  dispatch(fetchAllData(false));
                }}
                isModalOpen={handleModalOpen}
                onCloseModal={handleModalClose}
              />
            );
          default:
            break;
        }
      })()}
      <div className="pl-6 w-full">
        <h1 className="text-4xl">Data Customer</h1>
        <div className="flex flex-wrap justify-between mt-20 items-center relative">
          <div>
            <InputSearch data={datas} />
          </div>
          <div>
            <ButtonModal
              children="Tambah Data"
              className="bg-blue-600 hover:bg-blue-500 px-2"
              action={() => {
                handleModalOpen("create");
              }}
            />
          </div>
        </div>
        <div className="mt-6">
          <Table
            columnTable={columnTable}
            data={customer.data}
            dataId={"_id"}
            handleDataId={handleDataId}
            total={customer.total}
            pages={customer.pages}
            page={customer.page}
            limit={customer.limit}
            from={customer.from}
            handleFilterLimit={(limit) => dispatch(setLimit(limit))}
            handleSortTable={handleSortTable}
            handlePageClick={({ selected }) => {
              dispatch(setPage(selected + 1));
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Customer;
