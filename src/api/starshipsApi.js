import axiosInstance from "./axios"

export const getListOfStarships = () => {
  return axiosInstance.get('starships/');
};

export const getStarship = (id) => {
  return axiosInstance.get(`starships/${id}`);
};
