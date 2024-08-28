import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { DataJson } from "../../constants";

export const DiscrPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(DataJson);
  let chlay = Array.from(movie.data);
  const finding = chlay.find((e, i) => i == id);
  console.log(finding.Title);

  const arr = Array(finding);
  return (
    <div>
      {arr.map((item, index) => {
              <div className="h-[100vh] bg-blacklist bg-center w-full flex justify-center items-center ">
        <div className="flex justify-center  items-center gap-[20px] shadow h-[70vh] w-[80vw] bg-red-500 rounded-[20px]">
          <div className="bg-red-200 bg-center bg-cover h-[80%] w-[25%] rounded-[20px]">
            <img src="" alt="" />
          </div>
          <div className="bg-blue-200 h-[80%] w-[70%] rounded-[20px]">
            <div className="mt-10 ml-10 text-4xl font-bold">{item.Title}</div>
            <div className=" ml-10 flex gap-10">
              <div className="font-bold text-xl">Genre :</div>
              <div className=""> {item.genre}</div>
            </div>
            <div className="ml-10 border-double border-black border-[1px] w-20">
              2h:03Min
            </div>
            <div className=" ml-10 text-2xl font-bold">Description :</div>
            <div className="ml-20 "> {item.discription}</div>
          </div>
        </div>
      </div>

      })}


    </div>
  );
};
