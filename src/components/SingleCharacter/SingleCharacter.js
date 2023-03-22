import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {characterActions} from "../../redux";
import SingleCharacterDetails from "../SingleCharacterDetails/SingleCharacterDetails";


const SingleCharacter = () => {
    const dispatch=useDispatch();
    const{ currentCharacter }=useSelector(state => state.characterReducer);

    const {id} = useParams();

    useEffect(()=>{
        dispatch(characterActions.getById({id}))
    },[id])
    return (
        <div>
            {currentCharacter&&<SingleCharacterDetails key={currentCharacter.id} currentCharacter={currentCharacter}/>}

        </div>
    );
};

export default SingleCharacter;