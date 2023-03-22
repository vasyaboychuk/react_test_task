import css from './Character.module.css'
import {useNavigate} from "react-router-dom";

const Character = ({character}) => {
    const {id, name, species, image} = character;
    const navigate = useNavigate();

    const setCharacter = () => {
        navigate(`${id}`)
    }

    return (
        <div className={css.Card} onClick={setCharacter}>
            <div className={css.photo}>
                <img src={image} alt={name}/>
            </div>
            <div className={css.info}>
                <span>{name}</span>
                <br/>
                {species}
            </div>
        </div>
    );
};

export default Character;