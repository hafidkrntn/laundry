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
} from "../../redux/masterData/actions";
// import datasCreate from "./create";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const MasterData = () => {
  const datas = useSelector((state) => state.masterData);
  // console.log(datas)
  const dispatch = useDispatch();
  const [dataId, setDataId] = useState("");
  const [action, setAction] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [columnTable, setColumnTable] = useState([
    {
      name: "Kode",
      value: "kode",
      sortable: true,
      sortbyOrder: "",
    },
    {
      name: "Nama Paket",
      value: "nama_paket",
      sortable: true,
      sortbyOrder: "",
    },
    {
      name: "Harga",
      value: "harga",
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
          name: "Kode",
          value: "kode",
          sortable: true,
          sortbyOrder: "",
        },
        {
          name: "Nama Paket",
          value: "nama_paket",
          sortable: true,
          sortbyOrder: "",
        },
        {
          name: "Harga",
          value: "harga",
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
    datas.page,
    datas.keyword,
    datas.limit,
    datas.orderBy,
    datas.orderDirection,
  ]);

  return (
    <>
      {(() => {
        switch (action) {
          case "create":
            return (
              <datasCreate
                fetchAllData={() => {
                  dispatch(fetchAllData(false))
                }}
                isModalOpen={handleModalOpen}
                onCloseModal={handleModalClose}
                paketData={datas.paket}
              />
            );
          // case "edit":
          //   return <datasEdit dataId={dataId} />;
          // case "delete":
          //   return (
          //     <datasDelete
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
        <h1 className="text-4xl">Master Data</h1>
        <div className="flex flex-wrap justify-between items-center mt-20">
          <div>
            <InputSearch
              placeholder="Search"
              query={datas.keyword}
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
            data={datas.data}
            dataId={"_id"}
            handleDataId={handleDataId}
            total={datas.total}
            pages={datas.pages}
            page={datas.page}
          />
        </div>
      </div>
    </>
  );
};

export default MasterData;
