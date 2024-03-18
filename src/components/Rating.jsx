import React from 'react';
import Start from '../assets/start.svg'
import { IoMdStar } from "react-icons/io";

const Rating = ({value}) => {

    const starts = Array(value).fill(Start)
    // console.log(starts)
    // console.log(value)

    return (
        <div className="flex flex-wrap justify-start gap-3 my-5">
            {
                starts.map((start,index) => (
                    <img key={index} src={start} alt="" className=" p-2 font-bold bg-[#262E39] text-red-500 w-8 h-8 rounded-full "/>
                ))
            }
            
          {/* <p className=" pt-2 pl-2 font-bold bg-[#262E39] text-[#8d939c] w-8 h-8 rounded-full ">
            <IoMdStar color="orange" />
          </p>
          <p className=" pt-2 pl-2 font-bold bg-[#262E39] text-[#8d939c] w-8 h-8 rounded-full ">
            <IoMdStar color="orange" />
          </p>
          <p className=" pt-2 pl-2 font-bold bg-[#262E39] text-[#8d939c] w-8 h-8 rounded-full ">
            <IoMdStar color="orange" />
          </p>
          <p className=" pt-2 pl-2 font-bold bg-[#262E39] text-[#8d939c] w-8 h-8 rounded-full ">
            <IoMdStar color="orange" />
          </p>
          <p className=" pt-2 pl-2 font-bold bg-[#262E39] text-[#8d939c] w-8 h-8 rounded-full ">
            <IoMdStar color="orange" />
          </p> */}
        </div>
    );
};

export default Rating;