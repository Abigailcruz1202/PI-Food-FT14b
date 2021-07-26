import { GET_TYPES, GET_ALL_RECIPES, GET_RECIPES_DETAIL, ADD_RECIPES, FILTER_RECIPES, ORDERED_RECIPES } from "../actions";

const initialState = {
    recipes:[],
    recipesDetail:{}
};

function rootReducer(state = initialState, action){
    if(action.type === GET_TYPES){
        return {
            ...state,
            recipes: action.payload
        }
    }
    if(action.type === GET_RECIPES_DETAIL){
        return {
            ...state,
            recipesDetail: action.payload
        }
    }
    return state;
}

export default rootReducer;