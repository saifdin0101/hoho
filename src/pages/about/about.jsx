import React, { useState } from "react";
import { DataJson } from "../../constants";
import { useNavigate } from "react-router-dom";
export const About = () => {
  const [movie,setMovie] = useState(DataJson);
  let chlay=Array.from(movie.data)
  const [search,setSearch] = useState('')
  const navigate = useNavigate()
  
console.log(search);

  return (
    <div className="bg-gradient-to-r from-[#74d1d9] to-[black] h-[250vh] flex flex-col justify-center items-center  w-[100%]">
      <div className="   h-[70vh] w-[80vw] flex gap-[50px] justify-end pr-[20px] pt-[20px] bg-blacklist bg-cover bg-center rounded-[20px] bg-red-900">
        <div>
          <input
          onChange={(e)=>setSearch(e.target.value)}
            placeholder="   &#128269;     search"
            className="h-[6vh] w-[30vw] rounded-full"
            type="&nbsp; search"
          />
        </div>
        <div>
          <button className="rounded-full w-[10vw]   bg-red-500 text-white h-[6vh]">
            Search
          </button>
        </div>
      </div>

      <div className="h-[170vh]  w-[100%] gap-[50px]     flex justify-center  items-center flex-wrap ">
        {chlay.filter((item)=>{ return search.toLowerCase()===''? item : item.Title.toLowerCase().includes(search)}).map((item,index) => {
          return (
            <div onClick={()=> navigate(`${index}`)}
            key={item.id}
              className="overflow-hidden rounded-md bg-red-500 h-[500px] w-[350px]"
             
            >
              <div className="h-[70%] overflow-hidden">
                <div className="h-full w-full bg-testtt bg-cover hover:scale-[1.1] ease-in duration-200 rounded-tr-lg rounded-tl-lg"><img src={item.image} alt="" /></div>
              </div>
              <div className="flex flex-col gap-y-[50px] bg-[#446163] h-full">
                <div>
                  <h1 className="text-3xl text-white pl-[20px] pt-[10px]">
                    {item.Title}
                  </h1>
                </div>
                <div className="flex gap-[90px]">
                  <div className="flex flex-col justify-center items-center">
                    <div className="text-sm pl-[5px] text-gray-300">
                      Date Time
                    </div>
                    <div className="text-sm pl-[5px] text-gray-300">
                      2012-02-29
                    </div>
                  </div>
                  <div className="flex gap-[17px] justify-center items-center">
                    <div className="flex flex-col">
                      <div className="text-sm text-gray-300">Quality</div>
                      <div className="text-sm text-gray-300">2080P</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-sm text-gray-300">RDW</div>
                      <div className="text-sm text-gray-300">2H-07 Min</div>
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <div className="text-sm text-gray-300">Seat</div>
                        <div className="text-sm text-gray-300">999</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

     
      
        
        
        
        
      </div>
    </div>
  );
};
