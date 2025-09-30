import { generateDummyToys, queryToys } from "../../utils/toy-service";

export const SET_TOYS = 'SET_TOYS';

let toys = await queryToys();
if (!toys) toys = generateDummyToys();
console.log("toys: ", toys);

export const toyReducer = (state = {toys: toys}, action) => {
  switch (action.type) {
    case SET_TOYS:
      return { ...state, toys: action.payload.toys };
    default:
      return state;
  }
};