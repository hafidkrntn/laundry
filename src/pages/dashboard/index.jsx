import React, { useCallback, useEffect, useState } from "react";
import Table from "../../components/table";
import {
  faUser,
  faMoneyBillTransfer,
  faDatabase,
  faCashRegister,
} from "@fortawesome/free-solid-svg-icons";
import DashCard from "../../components/dashCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "../../redux/transaksi/actions";
import Edit from "./update";
import Delete from "./delete";
import { getDownloadPdf } from "../../utils/fetch";

const Dashboard = () => {
  const redux = useSelector((state) => state.transaksi);
  const dispatch = useDispatch();
  const transaksi = redux.data;
  const masterData = redux.paket;
  const customer = redux.customer;
  const total = transaksi.map((data) => data.total);
  const alltotal = total
    .reduce((sum, value) => sum + value, 0)
    .toLocaleString("Id", { style: "currency", currency: "IDR" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataId, setDataId] = useState("");
  const [action, setAction] = useState("");
  const [card, setCard] = useState([
    {
      value: "",
      status: "Customer",
      icon: faUser,
    },
    {
      value: "",
      status: "Transaksi",
      icon: faMoneyBillTransfer,
    },
    {
      value: "",
      status: "Master Data",
      icon: faDatabase,
    },
    {
      value: "",
      status: "Total Transaksi",
      icon: faCashRegister,
    },
  ]);
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

  const handleDownloadPdf = async () => {
    await getDownloadPdf(`/download/pdf/${dataId}`);
    handleModalClose();
    // window.location.reload(true);
  };

  const handleDataId = (dataId, action) => {
    setDataId(dataId);
    setAction(action);
  };

  useEffect(() => {
    setCard((state) =>
      state.map((s) =>
        s.status === "Customer" ? { ...s, value: customer.length } : s
      )
    );
    setCard((state) =>
      state.map((s) =>
        s.status === "Transaksi" ? { ...s, value: transaksi.length } : s
      )
    );
    setCard((state) =>
      state.map((s) =>
        s.status === "Master Data" ? { ...s, value: masterData.length } : s
      )
    );
    setCard((state) =>
      state.map((s) =>
        s.status === "Total Transaksi" ? { ...s, value: alltotal } : s
      )
    );
  }, [card]);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [
    dispatch,
    redux.page,
    redux.keyword,
    redux.limit,
    redux.orderBy,
    redux.orderDirection,
  ]);

  return (
    <>
      {(() => {
        switch (action) {
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
          case "print":
            return handleDownloadPdf();
          default:
            break;
        }
      })()}
      <div className="pl-6 w-full">
        <div>
          <h1 className="text-4xl">Dashboard</h1>
        </div>
        <div className="flex justify-between">
          <DashCard card={card} />
        </div>
        <div className="mt-6">
          <Table
            columnTable={columnTable}
            data={redux.data}
            dataId={"_id"}
            handleDataId={handleDataId}
            total={redux.total}
            pages={redux.pages}
            page={redux.page}
            limit={redux.limit}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
