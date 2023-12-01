import { NearEarthObject } from "../interfaces";

const apiUrl = "https://api.nasa.gov/neo/rest/v1"
const apiKey = "K4SbRf1IuOBiyf7Y8UEzeWfVuFEGxMfjS7eKZd70"

class ApiClient {
  constructor() { }

  async fetchDataList(startDate: string, endDate?: string) {
    const updatedUrlWithDates = endDate
    ? `${apiUrl}/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`
    : `${apiUrl}/feed?start_date=${startDate}&api_key=${apiKey}`;
    
    try {
      const response = await fetch(updatedUrlWithDates)
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error);
    }
  }   

  async fetchDataListDetailById(id: string) {
    try {
      const response = await fetch(`${apiUrl}/neo/${id}?api_key=${apiKey}`)
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }
}

export default new ApiClient()