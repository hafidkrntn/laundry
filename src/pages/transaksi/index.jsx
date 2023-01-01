import React, { useCallback, useEffect, useState } from "react";
import Table from "../../components/table";
import Button from "../../components/button/Button";
import ButtonModal from "../../components/buttonModal/index";
import { InputSearch } from "../../components/input/InputSearch";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllData,
  setKeyword,
  setOrderBy,
  setOrderDirection,
  setPage,
} from "../../redux/transaksi/actions";
import TransaksiCreate from "./create";
import TransaksiDelete from "./delete";
import TransaksiEdit from "./update";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Transaksi = () => {
  const transaksi = useSelector((state) => state.transaksi);
  // console.log(transaksi.paket)
  const dispatch = useDispatch();
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
    /**  @param {"create" | "delete"} action */
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
    transaksi.keyword,
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
                  dispatch(fetchAllData(false))
                }}
                isModalOpen={handleModalOpen}
                onCloseModal={handleModalClose}
                paketData={transaksi.paket}
              />
            );
          // case "edit":
          //   return <TransaksiEdit dataId={dataId} />;
          // case "delete":
          //   return (
          //     <TransaksiDelete
          //       dataId={dataId}
          //       fetchPelatihanOrg={() => {
          //         dispatch(fetchPelatihanOrg(false));
          //       }}
          //     />
          //   );
          default:
            break;
        }
      })()}
      <div className="pl-6 w-full">
        <h1 className="text-4xl">Transaksi</h1>
        <div className="flex flex-wrap justify-between items-center mt-20">
          <div>
            <InputSearch
              placeholder="Search"
              query={transaksi.keyword}
              handleChange={(e) => {
                dispatch(setKeyword(e.target.value));
                dispatch(setPage(1));
              }}
            />
          </div>
          <div className="flex flex-wrap space-x-5">
            <Button
              children="Eksport"
              className="bg-green-700 hover:bg-green-600 px-9"
            />
            <ButtonModal
              children="Tambah Data"
              className="bg-blue-600 hover:bg-blue-500 px-7"
              icon={faPlus}
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
          />
        </div>
      </div>
    </>
  );
};

export default Transaksi;
