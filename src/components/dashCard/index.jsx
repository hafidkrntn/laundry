import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashCard = ({ card, icon }) => {
  return (
    <div className="relative flex space-x-40">
      {card.map((item, index) => (
        <div className="text-center rounded-xl text-white w-[251px] py-6 mt-6 bg-green-navbar space-y-2">
          <FontAwesomeIcon icon={item.icon} className="text-9xl" />
          <div className="text-2xl">
            <p>{item.value}</p>
            <p>{item.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashCard;
