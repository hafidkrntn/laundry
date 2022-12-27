import {
  faEye,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Tb = ({ no, nama, nohp, alamat }) => {
  return (
    <tbody className="text-cyan-900 text-center uppercase">
      <tr className="bg-white hover:bg-cyan-100 duration-300">
        <td className="py-3 px-6">{no}</td>
        <td className="py-3 px-6">{nama}</td>
        <td className="py-3 px-6">{nohp}</td>
        <td className="py-3 px-6">{alamat}</td>
        <td className="py-3 px-6 flex justify-evenly">
          <button>
            <FontAwesomeIcon icon={faPenToSquare} className="text-green-700" />
          </button>
          <button>
            <FontAwesomeIcon icon={faTrashAlt} className="text-red-700" />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Tb;