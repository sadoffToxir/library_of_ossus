import axiosInstance from './axios';

export const getVehicle = (id) => {
  return axiosInstance.get(`vehicles/${id}`).then((response) => response.data);
};
