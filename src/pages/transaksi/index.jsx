import React from "react";
import Header from "../../organisms/header";
import Table from "../../components/table";

const Transaksi = () => {
  return (
    <div className="pl-6 w-full">
      <Header title="Transaksi" />
      <Table title="transaksi" />
    </div>
  );
};

export default Transaksi;