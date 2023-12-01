import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import { SelectedAsteroid } from "../../interfaces";
import apiClient from "../../utils/apiClient";
import './index.css';

const DetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<SelectedAsteroid>();

  useEffect(() => {
    if (id) {
      apiClient.fetchDataListDetailById(id).then((data) => {
      if (data.error) console.error('Error fetching data:', data.message);
      else setDetails(data);
      });
    }
  }, [id]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className='details_page_container'>
        <h1> Details on {details.name}  </h1>
        <section className='details_container'>
      <p>
        <strong>Absolute Magnitude:</strong> {details.absolute_magnitude_h}
      </p>
      <p>
        <strong>Estimated Diameter (min):</strong> {details.estimated_diameter.kilometers.estimated_diameter_min} km
      </p>
      <p>
        <strong>Estimated Diameter (max):</strong> {details.estimated_diameter.kilometers.estimated_diameter_max} km
      </p>
      <p>
        <strong>Is Potentially Hazardous Asteroid:</strong>{" "}
        {details.is_potentially_hazardous_asteroid ? "Yes" : "No"}
      </p>
        </section>
        <div className='divider_line'></div>
        <Link to={'/'}> Go back </Link>
    </div>
  );
};

export default DetailsPage;
