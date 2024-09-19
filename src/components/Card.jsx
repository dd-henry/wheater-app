import React from "react";
import propTypes from "prop-types";

function Card({ data }) {
  const { location, current } = data;
  return (
    <div className="bg-[whitesmoke] min-w-[300px] p-8 pr-10 pl-10 mt-10 rounded-lg flex flex-col text-center shadow-xl">
      <div>
        <span className="block text-xl font-bold text-slate-800">
          {location.name}
        </span>
        <span className="text-slate-700 text-sm font-medium">
          {location.region}, {location.country}
        </span>
      </div>

      <div className="font-bold text-slate-900 flex justify-center mt-4">
        <span className="text-8xl">{current.temp_c}</span>
        <span className="text-2xl  mt-2">°C </span>
      </div>

      <div className="flex justify-center flex-col items-center">
        <img src={current.condition.icon} alt="weather icon" />
        <span className=" text-slate-900 font-medium">
          {current.condition.text}
        </span>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  data: propTypes.object,
}.isRequired;
