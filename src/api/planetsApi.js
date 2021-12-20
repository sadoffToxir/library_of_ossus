import axiosInstance from './axios';

export const getListOfPlanets = (pageNum = 1) => {
  return axiosInstance.get(`planets/?page=${pageNum}`).then((response) => response.data);
};

export const getPlanet = (id) => {
  return axiosInstance.get(`planets/${id}`).then((response) => response.data);
};
