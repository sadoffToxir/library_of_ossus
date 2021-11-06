import axiosInstance from "./axios"

export const getListOfPlanets = () => {
  return axiosInstance.get('planets/');
};

export const getPlanet = (id) => {
  return axiosInstance.get(`planets/${id}`);
};
