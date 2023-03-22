import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {characterReducer} from "../slices/character.slice";

const rootReducer=combineReducers({
    characterReducer
});

const setupStore=()=>configureStore({
    reducer:rootReducer
});

export {
    setupStore
}