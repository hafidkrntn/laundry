import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashCard = ({ jumlah, status, icon }) => {
  return (
    <div>
      <div className="text-center rounded-3xl text-white w-64 py-6 mt-6 bg-green-navbar space-y-2">
        <FontAwesomeIcon icon={icon} className="text-9xl" />
        <div className="text-2xl">
          <p>{jumlah}</p>
          <p>{status}</p>
        </div>
      </div>
    </div>
  );
};

export default DashCard;