import axiosInstance from './axios';

export const getListOfCharacters = (pageNum = 1) => {
  return axiosInstance.get(`people/?page=${pageNum}`).then((response) => response.data);
};

export const getCharacter = (id) => {
  return axiosInstance.get(`people/${id}`).then((response) => response.data);
};

export const getCharacterVehicle = (id) => {
  return axiosInstance.get(`vehicles/${id}`).then((response) => response.data);
};

export const getCharacterStarship = (id) => {
  return axiosInstance.get(`starships/${id}`).then((response) => response.data);
};
