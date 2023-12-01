import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NearEarthObject } from "../../interfaces";
import apiClient from "../../utils/apiClient";
import DatePicker from "../DatePicker";
import CardContainer from "../CardContainer";
import sortByProperty from "../../helpers/sortByProperty";
import "./index.css"

const ListDisplay = () => {

  const [dataList, setDataList] = useState<NearEarthObject[] | undefined>();
  const [filteredAsteroids, setFilteredAsteroids] = useState<NearEarthObject[]>([]);
  /*Date Picker Variables*/
  const [startDate, setStartDate] = useState<string>("2015-09-08");
  const [endDate, setEndDate] = useState<string>("");


  useEffect(() => {
    fetchDataList(startDate, endDate);
  }, [startDate, endDate]);

/**
 * fetchDataList()
 * Fetches asteroid data from the API based on start and end dates,
 * sorts the data by name, and updates the state variables.
 * @param {string} startDate - The start date for fetching asteroid data.
 * @param {string | undefined} endDate - The optional end date.
 */
  const fetchDataList = async (startDate: string, endDate?: string) => {
    try {
      const data = await apiClient.fetchDataList(startDate, endDate);
      if (data.error || !data.near_earth_objects) console.error("Error fetching data:", data.message);
      else {
        const asteroids = Object.values(data.near_earth_objects).flat() as NearEarthObject[];
        const sortedAsteroids = sortByProperty(asteroids, 'name');
        setDataList(sortedAsteroids);
        setFilteredAsteroids(sortedAsteroids);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className='page_container'>
      <h1>List of Asteroids Nearby</h1>
      <DatePicker
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        initialStartDate={startDate}
        initialEndDate={endDate}
      />
      <CardContainer filteredAsteroids={filteredAsteroids} />
    </div>
  );
}

export default ListDisplay