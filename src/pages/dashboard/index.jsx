import React from "react";
import Table from "../../components/table";
import {
  faUser,
  faRedo,
  faCheck,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import DashCard from "../../components/dashCard";

const Card = [
  {
    jumlah: "12",
    status: "Baru",
    icon: faUser,
  },
  {
    jumlah: "12",
    status: "Baru",
    icon: faRedo,
  },
  {
    jumlah: "12",
    status: "Baru",
    icon: faCheck,
  },
  {
    jumlah: "12",
    status: "Baru",
    icon: faCheckCircle,
  },
];

const Dashboard = () => {
  return (
    <div className="pl-6 w-full">
      <div>
        <h1 className="text-4xl">Dashboard</h1>
      </div>
      <div className="flex justify-between">
        {Card.map((content, key) => (
          <DashCard
            key={key}
            jumlah={content.jumlah}
            status={content.status}
            icon={content.icon}
          />
        ))}
      </div>
      <Table title="dashboard" />
    </div>
  );
};

export default Dashboard;