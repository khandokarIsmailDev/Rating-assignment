import React, { useState } from "react";
import Rating from "./Rating";

const ReviewForm = () => {

  //count rating
  const [rating,setRating] = useState(6)

  console.log(rating)


  return (
    <div className="bg-black w-screen h-screen pt-10">
      <div className="bg-[#1F2732] rounded-2xl w-4/5 md:w-2/5 lg:w-1/5 m-auto text-center text-white px-5 py-2">
        <Rating value={rating}/>
        <div className="text-left">
          <h1 className="text-xl mb-3 font-bold">How did we do?</h1>
          <p className="text-sm text-justify text-[#7c8694]">
            Please let us know how we did with your support request. All
            feedback is appreciatd to help us improve our offering!
          </p>
        </div>
        <div className="flex flex-wrap justify-between my-5">
          <p className=" hover:bg-white transition-all hover:text-black cursor-pointer pt-2 font-bold bg-[#262E39] text-[#8d939c] w-10 h-10 rounded-full "
          onClick={()=>setRating(1)}
          >
            1
          </p>
          <p className="hover:bg-white transition-all hover:text-black  cursor-pointer pt-2 font-bold bg-[#262E39] text-[#8d939c] w-10 h-10 rounded-full "
          onClick={()=>setRating(2)}
          >
            2
          </p>
          <p className=" hover:bg-white transition-all hover:text-black cursor-pointer pt-2 font-bold bg-[#262E39] text-[#8d939c] w-10 h-10 rounded-full "
          onClick={()=>setRating(3)}
          >
            3
          </p>
          <p className="hover:bg-white transition-all hover:text-black cursor-pointer pt-2 font-bold bg-[#262E39] text-[#8d939c] w-10 h-10 rounded-full "
          onClick={()=>setRating(4)}
          >
            4
          </p>
          <p className="hover:bg-white transition-all hover:text-black cursor-pointer pt-2 font-bold bg-[#262E39] text-[#8d939c] w-10 h-10 rounded-full "
          onClick={()=>setRating(5)}
          >
            5
          </p>
        </div>
        <button
          type="submit"
          className="l bg-orange-600 w-full rounded-xl uppercase font-bold py-2 text-sm mb-5 mt-2"
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
