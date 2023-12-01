import React from "react";
import { Link } from "react-router-dom";
import { NearEarthObject } from "../../interfaces";
import "./index.css"

type CardContainerProps = {
  filteredAsteroids: NearEarthObject[];
};

const CardContainer = ({ filteredAsteroids }: CardContainerProps) => (
  <div className='card_container'>
    {filteredAsteroids.map((item) => (
      <div className='card_box' key={item.id}>
        <h1>{item.name}</h1>
        <section className='card_box_info'>
          <p>
            <strong>Absolute Magnitude:</strong> {item.absolute_magnitude_h}
          </p>
          <p>
            <strong>Estimated Diameter (min):</strong> {item.estimated_diameter.kilometers.estimated_diameter_min} km
          </p>
          <p>
            <strong>Estimated Diameter (max):</strong> {item.estimated_diameter.kilometers.estimated_diameter_max} km
          </p>
          <p>
            <strong>Is Potentially Hazardous Asteroid:</strong>{" "}
            {item.is_potentially_hazardous_asteroid ? "Yes" : "No"}
          </p>
        </section>
        <div className='divider_line'></div>
        <Link to={`/details/${item.id}`}>Details {'>'} </Link>
      </div>
    ))}
  </div>
);

export default CardContainer;