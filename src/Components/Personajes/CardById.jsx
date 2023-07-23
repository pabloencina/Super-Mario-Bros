import React from "react";
import DetailCardById from "./DetailCardById";

const CardById = ({ charactersData }) => {
  const { id } = charactersData;
  return (
    <div className="detailCardById__container_card">
      <DetailCardById key={id} charactersData={charactersData} />
    </div>
  );
};

export default CardById;
