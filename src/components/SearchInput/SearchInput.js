import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {characterActions} from "../../redux";
import css from './SearchInput.module.css';

const SearchInput = () => {
    const {register, handleSubmit, reset} = useForm();
    const [query, setQuery] = useState();
    const dispatch = useDispatch();

    const search = () => {
        dispatch(characterActions.getBySearch({query}));
        reset()
    }

     return (
         <form onSubmit={handleSubmit(search)}>
                <input type="search"
                       className={css.nosubmit}
                       placeholder={"Filter by name..."}
                       {...register('filter by name')}
                       onChange={(e) => setQuery(e.target.value)}
                />
            </form>


    );
};

export default SearchInput;