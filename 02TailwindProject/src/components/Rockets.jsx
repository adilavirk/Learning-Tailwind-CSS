import React from "react";

const Rockets = () => {
  return (
    <>
      <main className="max-w-4xl mx-auto ">
        <section
          id="rockets"
          className="p-6 my-12  scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Our Rockets
          </h2>
          <ul className="list-none mx-auto my-12 flex flex-col items-center sm:flex-row gap-8">
            {/* cards start from here */}
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center dark:bg-black border border-solid border-slate-900 dark:border-gray-100 bg-white rounded-3xl shadow-xl py-6 px-2 ">
              <img
                className="w-1/2 mb-6"
                src="./img/rocketman.png"
                alt="rocket-man.png"
              />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                Explorer
              </h3>
              <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400 mt-2">
                $
              </p>
              <h3 className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
                Affordable Exploration
              </h3>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center dark:bg-black border border-solid border-slate-900 dark:border-gray-100 bg-white rounded-3xl shadow-xl py-6 px-2 ">
              <img
                className="w-1/2 mb-6"
                src="./img/rocketride.png"
                alt="rocketride.png"
              />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                Adventurer
              </h3>
              <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400 mt-2">
                $$
              </p>
              <h3 className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
                Best Selling Rocket!
              </h3>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center dark:bg-black border border-solid border-slate-900 dark:border-gray-100 bg-white rounded-3xl shadow-xl py-6 px-2 ">
              <img
                className="w-1/2 mb-6"
                src="./img/rocketlaunch.png"
                alt="rocketlaunch.png"
              />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                Infinity
              </h3>
              <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400 mt-2">
                $$$
              </p>
              <h3 className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
                Luxury Starship
              </h3>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Rockets;
