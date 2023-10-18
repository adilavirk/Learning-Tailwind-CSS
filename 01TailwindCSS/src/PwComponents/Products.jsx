import React from "react";

const Products = () => {
  return (
    <div className="w-100 h-auto flex flex-col flex-wrap items-center text-center p-10">
      <div className="w-full h-auto flex flex-col flex-wrap items-center">
        <p className="text-indigo-800 font-bold text-3xl md:text-4xl">
          Our Products
        </p>
        <div className="w-36 h-1 border-b-4 border-yellow-500 rounded-2xl mt-2 md:mt-4 mb-12 "></div>
      </div>

      {/* cards */}
      <div className="w-[100%] h-auto  flex  flex-wrap justify-around">
        <div className="w-60 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
          <img
            className="w-20 h-20 rounded-full"
            src="https://pwskills.com/images/homePage/products-icon1.png"
            alt=""
          />
          <p className="text-3xl text-white font-bold mt-8">PW Skills Lab</p>
          <p className="text-lg font-medium text-gray-500">
            Buying a new PC is no longer required, Access unlimited computing
            power!
          </p>
        </div>
        <div className="w-64 flex flex-col items-center mb-12  p-2">
          <img
            className="w-20 h-20 rounded-full"
            src="	https://pwskills.com/images/homePage/products-icon4.png"
            alt=""
          />
          <p className="text-3xl text-white font-bold mt-8">Job Portal</p>
          <p className="text-lg font-medium text-gray-500">
            Use exceptional templates for a stand-out resume minus the sign up
            process.
          </p>
        </div>
        <div className="w-64 flex flex-col items-center mb-12  p-2">
          <img
            className="w-20 h-20 rounded-full"
            src="	https://pwskills.com/images/homePage/products-icon2.png"
            alt=""
          />
          <p className="text-3xl text-white font-bold mt-8">
            Experience Portal
          </p>
          <p className="text-lg font-medium text-gray-500">
            Self-paced portal prioritizes hands-on training with 570+ internship
            projects.
          </p>
        </div>
        <div className="w-64 flex flex-col items-center mb-12  p-2">
          <img
            className="w-20 h-20 rounded-full"
            src="https://pwskills.com/images/homePage/products-icon5.png"
            alt=""
          />
          <p className="text-3xl text-white font-bold mt-8">
            Become an affiliate
          </p>
          <p className="text-lg font-medium text-gray-500">
            Explore affiliate marketing opportunities and attain financial
            freedom.
          </p>
        </div>

        <div className="w-64 flex flex-col items-center mb-12  p-2">
          <img
            className="w-20 h-20 rounded-full"
            src="https://pwskills.com/images/homePage/products-icon3.png"
            alt=""
          />
          <p className="text-3xl text-white font-bold mt-8">Hall Of Fame</p>
          <p className="text-lg font-medium text-gray-500">
            Our student placements and 100K+ career transitions speak volumes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
