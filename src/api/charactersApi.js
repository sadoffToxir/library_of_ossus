import axiosInstance from "./axios"

export const getListOfCharacters = () => {
  return axiosInstance.get('people/');
};

export const getCharacter = (id) => {
  return axiosInstance.get(`people/${id}`);
};
