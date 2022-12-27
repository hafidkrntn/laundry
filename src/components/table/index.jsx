import React from "react";

// components
import Thead from "./Thead";
import Tb from "./Tbody";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Table = ({ title }) => {
  const Body = [
    {
      no: 1,
      nama: "ihsan",
      nohp: "081215032941",
      alamat: "YOGYAKARTA",
    },
    {
      no: 2,
      nama: "hafidz",
      nohp: "081215032941",
      alamat: "tangerang",
    },
    {
      no: 3,
      nama: "hakun",
      nohp: "081215032941",
      alamat: "surabaya",
    },
    {
      no: 4,
      nama: "tantio",
      nohp: "081215032941",
      alamat: "semarang",
    },
  ];
  return (
    <div className="mt-10 bg-gray-200 border-t-8 border-t-green-navbar">
      <div className="w-[97%] mx-auto pb-14">
        <div className="flex text-green-navbar text-xl">
          <button>
            <FontAwesomeIcon icon={faInfoCircle} className="my-auto" />
          </button>
          <p className="uppercase pl-3 py-6">{title}</p>
        </div>
        <table className="font-[Poppins] w-full overflow-hidden">
          <Thead header={"No"} />
          {Body.map((item, key) => (
            <Tb
              key={key}
              no={item.no}
              nama={item.nama}
              nohp={item.nohp}
              alamat={item.alamat}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Table;