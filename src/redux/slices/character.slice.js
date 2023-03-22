import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../services";

const initialState={
    characters:[],
    currentCharacter:null
};

const getAll=createAsyncThunk(
    'characterSlice/getAll',
    async(_,{rejectWithValue})=>{
        try {
            const {data}=await characterService.getAll();
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

const getById=createAsyncThunk(
    "characterSlice/getById",
    async ({id},{rejectWithValue})=>{
        try{
            const {data}=await characterService.getById(id)
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getBySearch=createAsyncThunk(
    "characterSlice/getBySearch",
    async ({query},{rejectWithValue})=>{
        try{
            const {data}=await characterService.searchCharacters(query);
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const characterSlice=createSlice({
    name:'characterSlice',
    initialState,
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled,(state, action)=>{
                state.characters=action.payload.results.sort((a,b)=>{
                    if (a.name<b.name)return -1
                    else if(a.name>b.name)return 1
                    else return 0
                })
            })
            .addCase(getById.fulfilled,(state , action)=>{
                state.currentCharacter=action.payload
            })
            .addCase(getBySearch.fulfilled,(state, action)=>{
                state.characters=action.payload.results.sort((a,b)=>{
                    if (a.name<b.name)return -1
                    else if(a.name>b.name)return 1
                    else return 0
                })
            })
});

const{reducer:characterReducer}=characterSlice;

const characterActions={
    getAll,
    getById,
    getBySearch
};

export {
    characterReducer,
    characterActions
}