import axiosInstance from './axios';

export const getFilm = (id) => {
  return axiosInstance.get(`films/${id}`).then((response) => response.data);
};

export const getSpecies = (id) => {
  return axiosInstance.get(`species/${id}`).then((response) => response.data);
};
