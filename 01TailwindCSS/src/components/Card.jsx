import React from "react";

const Card = ({ profileImage }) => {
  return (
    <>
      <div className="mt-3 overflow-hidden">
        <div className="max-w-sm bg-white  rounded-xl md:max-w-lg">
          <div className="md:flex">
            <div>
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={profileImage}
                alt=""
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                An Awsome Card
              </div>
              <a
                href="#"
                className="block mt-1 text-lg font-medium text-black hover:text-blue-700 "
              >
                Tailwind CSS is amazing once you understand the
                <span className="bg-yellow-500 p-[2px] mx-[2px]">power</span> of
                it.
              </a>
              <p className="mt-2 text-slate-500">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
