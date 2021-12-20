const initialState = {
  vehicle: null,
  vehiclePilots: []
};

export const vehiclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VEHICLE_PILOTS_LIST_SET':
      return {
        ...state,
        vehiclePilots: action.payload
      };
    case 'VEHICLE_SET':
      return Object.assign({}, state, {
        vehicle: action.payload,
      });
    case 'VEHICLE_PILOTS_LIST_REMOVE':
      return Object.assign({}, state, {
        vehiclePilots: [],
      });
    case 'VEHICLE_REMOVE':
      return Object.assign({}, state, {
        vehicle: null,
      });
    default:
      return state;
  }
};
