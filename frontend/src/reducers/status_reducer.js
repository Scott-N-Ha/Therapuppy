const initialState = {
  1: {
    id: 1,
    name: "PENDING",
  },
  2: {
    id: 2,
    name: "APPROVED",
  },
  3: {
    id: 3,
    name: "DENIED",
  },
  4: {
    id: 4,
    name: "COMPLETED",
  },
};

const statusReducer = (state = initialState, action) => {
  return state;
};

export default statusReducer;
