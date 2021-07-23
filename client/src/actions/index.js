//import axios from 'axios';
export const GET_TYPES = 'GET_TYPES';
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const GET_RECIPES_NAME = 'GET_RECIPES_NAME';
export const GET_RECIPES_DETAIL = 'GET_RECIPES_DETAIL';
export const ADD_RECIPES = 'ADD_RECIPES';
export const FILTER_RECIPES = 'FILTER_RECIPES';
export const ORDERED_RECIPES = 'ORDERED_RECIPES';
console.log('?')

export function getTypes() {
    return function (dispatch) {
        return fetch(`http://localhost:3001/types`)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: GET_TYPES,
                    payload: json
                })
            })
    }
}
export function getRecipes() {
    return function (dispatch) {
        return fetch(`http://localhost:3001/recipes`)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: GET_ALL_RECIPES,
                    payload: json
                })
            })
    }
}
export function getRecipesName(name) {
    return function (dispatch) {
        return fetch(`http://localhost:3001/recipes?name=${name}`)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: GET_RECIPES_NAME,
                    payload: json
                })
            })
    }
}
export function getRecipesDetail(id) {
    return function (dispatch) {
        return fetch(`http://localhost:3001/recipes/${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: GET_RECIPES_DETAIL,
                    payload: json
                })
            })
    }
}
export function addRecipes(info) {
    return function (dispatch) {
        return fetch(`http://localhost:3001/recipe`, {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json =>{
            dispatch({
                type: ADD_RECIPES,
                payload: json
            })
        })
    }
}






// POST CON FETCH
// fetch(url, {
//     method: 'POST', // or 'PUT'
//     body: JSON.stringify(data), // data can be `string` or {object}!
//     headers:{
//       'Content-Type': 'application/json'
//     }
//   }).then(res => res.json())