import React from "react";
import Header from "../../organisms/header";
import Table from "../../components/table";

const MasterData = () => {
  return (
    <div className="pl-6 w-full">
      <Header title="Master Data" />
      <Table title="transaksi" />
    </div>
  );
};

export default MasterData;