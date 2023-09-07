import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashCard = ({ card, icon }) => {
  return (
    <div className="flex items-center justify-center max-w-[1640px] container mx-auto">
      <div className="space-x-6 grid md:grid-cols-4 gap-6">
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
    </div>
  );
};

export default DashCard;
