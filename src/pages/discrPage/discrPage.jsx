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
      
        
          <div className="h-[100vh] bg-gradient-to-r from-[#74d1d9] to-[black] bg-center w-full flex justify-center gap-y-[30px] items-center ">
          <div className="flex justify-center  items-center gap-[20px] shadow h-[70vh] w-[80vw] bg-red-500 rounded-[20px]">
            <div className=" bg-center bg-cover h-[80%] w-[25%] rounded-[20px]">
              <img className="bg-center bg-cover overflow-hidden h-full w-full rounded-[20px]" src={finding.image} alt="" />
            </div>
            <div className=" text-white font-bold gradd  h-[80%] flex flex-col gap-y-[10px] w-[70%] rounded-[20px]">
              <div className="mt-10 ml-10 text-4xl font-bold">{finding.Title}</div>
              <div className=" ml-10 flex gap-10">
                <div className="font-bold text-xl">Genre :</div>
                <div className=""> {finding.genre}</div>
              </div>
              <div className="ml-10 border-double border-black p-2 border-[1px] w-20">
                2h:03Min
              </div>
              <div className=" ml-10 text-2xl font-bold">Description :</div>
              <div className="ml-20  "> {finding.discription}</div>
              <div className="bg-gradient-to-r from-[#74d1d9] to-[black] ml-[42px] h-[80px] w-[200px] font-bold text-3xl flex items-center justify-center rounded-[30px]">Watch Now</div>
            </div>
          </div>
        </div>
  
        
             
     


    </div>
  );
};
