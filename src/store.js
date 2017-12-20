import createStore from "redux-zero";
const initialState = {
    listbooks : [],
    equalBooks : [],
    selected: 0
};

const store = createStore(initialState);
export default store;