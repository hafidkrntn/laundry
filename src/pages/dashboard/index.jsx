import React, { useEffect, useState } from "react";
import Table from "../../components/table";
import {
  faUser,
  faRedo,
  faCheck,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import DashCard from "../../components/dashCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "../../redux/transaksi/actions";

const Card = [
  {
    jumlah: "12",
    status: "Baru",
    icon: faUser,
  },
  {
    jumlah: "12",
    status: "Baru",
    icon: faRedo,
  },
  {
    jumlah: "12",
    status: "Baru",
    icon: faCheck,
  },
  {
    jumlah: "12",
    status: "Baru",
    icon: faCheckCircle,
  },
];

const Dashboard = () => {
  const redux = useSelector((state) => state.transaksi);
  const dispatch = useDispatch();
  console.log(redux);
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
      name: "Status Order",
      value: "pembayaran" ? "Lunas" : "Belum Lunas",
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
    <div className="pl-6 w-full">
      <div>
        <h1 className="text-4xl">Dashboard</h1>
      </div>
      <div className="flex justify-between">
        {Card.map((content, key) => (
          <DashCard
            key={key}
            jumlah={content.jumlah}
            status={content.status}
            icon={content.icon}
          />
        ))}
      </div>
      <div className="mt-6">
        <Table
          columnTable={columnTable}
          data={redux.data}
          dataId={"_id"}
          total={redux.total}
          pages={redux.pages}
          page={redux.page}
        />
      </div>
    </div>
  );
};

export default Dashboard;
