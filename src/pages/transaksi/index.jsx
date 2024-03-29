import React, { useCallback, useEffect, useState } from "react";
import Table from "../../components/table";
import ButtonModal from "../../components/buttonModal/index";
import { InputSearch } from "../../components/input/InputSearchTransaksi";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllData,
  setLimit,
  setOrderBy,
  setOrderDirection,
  setPage,
} from "../../redux/transaksi/actions";
import TransaksiCreate from "./create";
import TransaksiDelete from "./delete";
import TransaksiEdit from "./update";
import { getDownloadFile, getDownloadPdf } from "../../utils/fetch";

const Transaksi = () => {
  const transaksi = useSelector((state) => state.transaksi);
  const dispatch = useDispatch();
  const datas = transaksi.data;
  const [dataId, setDataId] = useState("");
  const [action, setAction] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [columnTable, setColumnTable] = useState([
    {
      name: "Tanggal Masuk",
      value: "createdAt",
      sortable: true,
      sortbyOrder: "",
    },
    {
      name: "Customer",
      value: "customer",
      sortable: true,
      sortbyOrder: "",
    },
    {
      name: "Paket",
      value: "paket",
      sortable: true,
      sortbyOrder: "",
    },
    {
      name: "Berat (KG)",
      value: "berat",
      sortable: true,
      sortbyOrder: "",
    },
    {
      name: "Harga",
      value: "harga",
      sortable: true,
      sortbyOrder: "",
    },
    {
      name: "Total",
      value: "total",
      sortable: true,
      sortbyOrder: "",
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

  const handlePrintExcel = async () => {
    await getDownloadFile("/export/transaksi/excel");
  };

  const handleDownloadPdf = async () => {
    await getDownloadPdf(`/download/pdf/${dataId}`);
    setTimeout(() => {
      handleDownloadPdf();
      window.location.reload(true);
    }, 5000);
  };

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
          name: "Tanggal Masuk",
          value: "createdAt",
          sortable: true,
          sortbyOrder: "",
        },
        {
          name: "Customer",
          value: "customer",
          sortable: true,
          sortbyOrder: "",
        },
        {
          name: "Paket",
          value: "paket",
          sortable: true,
          sortbyOrder: "",
        },
        {
          name: "Berat (KG)",
          value: "berat",
          sortable: true,
          sortbyOrder: "",
        },
        {
          name: "Harga",
          value: "harga",
          sortable: true,
          sortbyOrder: "",
        },
        {
          name: "Total",
          value: "total",
          sortable: true,
          sortbyOrder: "",
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
    transaksi.page,
    transaksi.limit,
    transaksi.orderBy,
    transaksi.orderDirection,
  ]);

  return (
    <>
      {(() => {
        switch (action) {
          case "create":
            return (
              <TransaksiCreate
                fetchAllData={() => {
                  dispatch(fetchAllData(false));
                }}
                isModalOpen={handleModalOpen}
                onCloseModal={handleModalClose}
                paketData={transaksi.paket}
                customer={transaksi.customer}
              />
            );
          case "edit":
            return (
              <TransaksiEdit
                dataId={dataId}
                isModalOpen={handleModalOpen}
                onCloseModal={handleModalClose}
              />
            );
          case "delete":
            return (
              <TransaksiDelete
                dataId={dataId}
                fetchAllData={() => {
                  dispatch(fetchAllData(false));
                }}
                isModalOpen={handleModalOpen}
                onCloseModal={handleModalClose}
              />
            );
          case "print":
            return handleDownloadPdf();
          default:
            break;
        }
      })()}
      <div className="pl-6 w-full">
        <h1 className="text-4xl">Transaksi</h1>
        <div className="flex flex-wrap justify-between items-center mt-20">
          <div>
            <InputSearch data={datas} />
          </div>
          <div className="flex flex-wrap space-x-5">
            <button
              className="text-white rounded-lg bg-green-700 hover:bg-green-600 px-9"
              onClick={handlePrintExcel}
            >
              {" "}
              Export{" "}
            </button>

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
            data={transaksi.data}
            dataId={"_id"}
            handleDataId={handleDataId}
            total={transaksi.total}
            pages={transaksi.pages}
            page={transaksi.page}
            limit={transaksi.limit}
            from={transaksi.from}
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

export default Transaksi;
