import React from "react";

const Card2 = ({ profileImage2 }) => {
  return (
    <div>
      <h1 className="text-yellow-400 text-3xl font-semibold m-6">
        Learning Tailwind
      </h1>

      <div>
        <div className="bg-white p-4 rounded-xl flex items-center shadow-xl space-x-4">
          <div>
            <img className="h-14 w-14" src={profileImage2} alt="" />
          </div>
          <div>
            <div className="text-2xl font-medium text-black">
              Tailwind CSS
              <p className="text-slate-600 text-base">By Adila Virk</p>
            </div>
          </div>
        </div>
      </div>

      {/* card 2 */}
      {/* <div className="mt-14">
        <div className="bg-white rounded-xl shadow-xl  h-72 grid place-content-evenly">
          <div>
            <img className="h-24 w-24 rounded-full" src={adilavirk} alt="" />
          </div>
          <div>
            <div>
              <div className="text-xl font-medium text-black">
                Tailwind
                <p className="text-slate-500 text-base">By Adila Arshad</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Card compoenet */}

      {/* buttton */}

      {/* <button className="mt-4  p-2 bg-sky-500 text-white text-base font-medium rounded-lg hover:bg-yellow-500">
        Buy Now
      </button> */}
    </div>
  );
};

export default Card2;
