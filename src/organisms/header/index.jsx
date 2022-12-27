import Button from "../../components/button/Button";
import { InputSearch } from "../../components/input/InputSearch";

const Header = ({ title }) => {
  return (
    <div>
      <h1 className="text-4xl">{title}</h1>
      <div className="flex flex-wrap justify-between items-center mt-20">
        <div>
          <InputSearch placeholder="Search" />
        </div>
        <div className="flex flex-wrap space-x-5">
          <Button
            children="Eksport"
            className="bg-green-700 hover:bg-green-600 px-9"
          />
          <Button
            children="Tambah Data"
            className="bg-blue-600 hover:bg-blue-500 px-7"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
