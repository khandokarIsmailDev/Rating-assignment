import React, { useState } from "react";
import Rating from "./Rating";
import { toast } from "react-toastify";

const ReviewForm = () => {
  //count rating
  const [rating, setRating] = useState(1);
  const [submit, setSubmit] = useState(false);

  console.log(rating);

  //handle submite
  function handleSubmit() {
    setSubmit(true);
    toast.success("Submited! Thank you!", {
      position: "top-right",
    });
  }

  return (
    <div className="bg-black w-screen h-screen pt-10">
      {!submit ? (
        <div className="bg-[#1F2732] rounded-2xl w-4/5 md:w-2/5 lg:w-1/5 m-auto text-center text-white px-5 py-2">
          <Rating value={rating} />
          <div className="text-left">
            <h1 className="text-xl mb-3 font-bold">How did we do?</h1>
            <p className="text-sm text-justify text-[#7c8694]">
              Please let us know how we did with your support request. All
              feedback is appreciatd to help us improve our offering!
            </p>
          </div>
          <div className="flex flex-wrap justify-between my-5">
            <p
              className={`${
                rating === 1 &&
                "bg-white text-black "
              } hover:bg-white transition-all hover:text-black cursor-pointer pt-2 font-bold bg-[#262E39] text-[#8d939c] w-10 h-10 rounded-full `}
              onClick={() => setRating(1)}
            >
              1
            </p>
            <p
              className={`${
                rating === 2 &&
                "bg-white text-black "
              } hover:bg-white transition-all hover:text-black  cursor-pointer pt-2 font-bold bg-[#262E39] text-[#8d939c] w-10 h-10 rounded-full`}
              onClick={() => setRating(2)}
            >
              2
            </p>
            <p
              className={`${
                rating === 3 &&
                "bg-white text-black "
              } hover:bg-white transition-all hover:text-black  cursor-pointer pt-2 font-bold bg-[#262E39] text-[#8d939c] w-10 h-10 rounded-full`}
              onClick={() => setRating(3)}
            >
              3
            </p>
            <p
              className={`${
                rating === 4 &&
                "bg-white text-black "
              } hover:bg-white transition-all hover:text-black  cursor-pointer pt-2 font-bold bg-[#262E39] text-[#8d939c] w-10 h-10 rounded-full`}
              onClick={() => setRating(4)}
            >
              4
            </p>
            <p
              className={`${
                rating === 5 &&
                "bg-white text-black "
              } hover:bg-white transition-all hover:text-black  cursor-pointer pt-2 font-bold bg-[#262E39] text-[#8d939c] w-10 h-10 rounded-full`}
              onClick={() => setRating(5)}
            >
              5
            </p>
          </div>
          <button
            type="submit"
            className="l bg-orange-600 w-full rounded-xl uppercase font-bold py-2 text-sm mb-5 mt-2"
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      ) : (
        <div className="bg-[#1F2732] rounded-2xl w-4/5 md:w-2/5 lg:w-1/5 m-auto text-center text-white pt-8 px-5 py-2 h-48">
          <h1 className="text-3xl font-bold uppercase text-orange-500">
            Submited
          </h1>
          <h2>Thank you</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=""
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            class="w-10 h-10 text-center m-auto mt-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
