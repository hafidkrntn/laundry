import React from "react";
import Header from "../../organisms/header";
import Table from "../../components/table";

const Customer = () => {
  const header = ["no", "nama", "no hp", "alamat", "aksi"]

  return (
    <div className="pl-6 w-full">
      <Header title="Customer" />
      <Table title="customer" />
    </div>
  );
};

export default Customer;
