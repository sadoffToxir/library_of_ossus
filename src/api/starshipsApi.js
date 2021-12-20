import axiosInstance from './axios';

export const getListOfStarships = (pageNum = 1) => {
  return axiosInstance.get(`starships/?page=${pageNum}`).then((response) => response.data);
};

export const getStarship = (id) => {
  return axiosInstance.get(`starships/${id}`).then((response) => response.data);
};
