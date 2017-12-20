import createStore from "redux-zero";
const initialState = {
    itunes : [],
    googleBook : [],
    selected: 0
};

const store = createStore(initialState);
export default store;