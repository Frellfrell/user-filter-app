const initialState = {
  users: [
    { id: 1, name: "Алексей" },
    { id: 2, name: "Мария" },
    { id: 3, name: "Иван" },
    { id: 4, name: "Ольга" },
  ],
  filter: "",
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

export default reducer;