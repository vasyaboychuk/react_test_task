import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {characterActions} from "../../redux";
import Character from "../Character/Character";
import css from './Characters.module.css'
import SearchInput from "../SearchInput/SearchInput";
import logo from '../../PngItem_438051 1.png'


const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characterReducer);

    useEffect(() => {
        dispatch(characterActions.getAll())
    }, []);

    return (
        <div className={css.wrapper}>
            <div className={css.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={css.searchInput}>
                <SearchInput/>
            </div>
            <div className={css.characters}>
                {characters.map(character => <Character key={character.id} character={character}/>)}
            </div>
        </div>
    );
};

export default Characters;