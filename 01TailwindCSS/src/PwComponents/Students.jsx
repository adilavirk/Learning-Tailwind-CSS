import React from "react";

const Students = () => {
  return (
    <div className="w-100 h-auto  flex flex-col flex-wrap items-center text-center p-10">
      <div className="w-full h-auto flex flex-col flex-wrap items-center">
        <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
          “Pure Hardwork, No Shortcuts!”
        </p>
        <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
      </div>
      {/* Cards */}
      <div className="w-full flex flex-wrap justify-evenly ">
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="w-20 h-20 rounded-full"
            src="https://pwskills.com/images/homePage/statistics2.png"
            alt=""
          />
          <p className="text-3xl font-bold text-white">600+</p>
          <p className="text-3xl font-bold text-gray-500">Different Courses</p>
        </div>
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="w-20 h-20 rounded-full"
            src="https://cdn-icons-png.flaticon.com/128/2641/2641333.png"
            alt=""
          />
          <p className="text-3xl font-bold text-white">700,000+</p>
          <p className="text-3xl font-bold text-gray-500">Students Enrolled</p>
        </div>
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="w-20 h-20 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_RjuPwfXwRWJr3TGhOw9mHlzoE8zBxB94Q&usqp=CAU"
            alt=""
          />
          <p className="text-3xl font-bold text-white">10,000+</p>
          <p className="text-3xl font-bold text-gray-500">
            Successful Transitions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Students;
