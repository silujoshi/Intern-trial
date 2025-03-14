// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "../App.css";
import Card from "../components/card";

function Preservation() {
  // const [count, setCount] = useState(0);
  const cardItems= [
    {
      title: "Story & Legacy",
      total: 6,
      count: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "Story & Legacy",
      total: 6,
      count: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "Story & Legacy",
      total: 6,
      count: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "Story & Legacy",
      total: 6,
      count: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "Story & Legacy",
      total: 6,
      count: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-8 bg-[#F9FAFB] ">
      {cardItems.map((val, index) => (
        <Card data={val} key={index} />
      ))}
    </div>
  );
}

export default Preservation;