import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import css from './SingleCharacterDetails.module.css';

const SingleCharacterDetails = ({currentCharacter}) => {
    const {gender, status, species, origin, type, name, image} = currentCharacter;
    const navigate = useNavigate();

    const newType = type ? type : 'Unknown';

    function goBack() {
        navigate(-1)
    }

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <div onClick={goBack} className={css.btn}>
                       <FontAwesomeIcon icon={faArrowLeft}/>
                    <h3>
                       GO BACK
                   </h3>
                </div>
                <div>
                    <div className={css.avatar}>
                        <img src={image} alt={name}/>
                    </div>
                    <div className={css.name}>
                       <h4>

                           {name}
                       </h4>
                    </div>
                    <div className={css.information}>
                        Informations

                    </div>
                </div>

                <div className={css.values}>
                    <div className={css.value}>
                        <p>
                            <span>
                                Gender
                            </span>
                            <br/>
                            {gender}
                        </p>
                        <hr/>
                    </div>
                    <div className={css.value}>
                        <p>
                          <span>
                            Status
                        </span>
                            <br/>
                            {status}
                            <hr/>
                        </p>

                    </div>
                    <div className={css.value}>
                        <p>
                            <span>
                           Specie
                         </span>
                            <br/>
                            {species}
                            <hr/>
                        </p>

                    </div>
                    <div className={css.value}>
                        <p>
                            <span>
                            Origin
                        </span>
                            <br/>
                            {origin.name}
                            <hr/>
                        </p>

                    </div>
                    <div className={css.value}>
                        <p>
                            <span>
                           Type
                        </span>
                            <br/>
                            {newType}
                            <hr/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCharacterDetails;