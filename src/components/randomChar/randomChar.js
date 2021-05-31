import React, {Component} from 'react';
import './randomChar.css';
import gotService from "../../services/gotService";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";

export default class RandomChar extends Component {

    constructor(props) {
        super(props);
        this.updateChar();
    }


    gotService = new gotService();

    state = {
        char: {},
        loading: true,
        error: false

    }
    onCharLoaded = (char) => {
        this.setState({
            char,
<<<<<<< HEAD
            loading: false,
            error: false
=======
            loading: false
>>>>>>> e66cb8e8d9093cae985a57526c2ccebcae094234
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
<<<<<<< HEAD
            loading: false
=======
            loading: false,
>>>>>>> e66cb8e8d9093cae985a57526c2ccebcae094234
        })
    }

    updateChar() {
<<<<<<< HEAD
        // const id = Math.floor(Math.random() * 140 + 25); // 25-140
        const id = 1111111111111111;
=======
        const id = Math.floor(Math.random() * 140 + 25); // 25-140
        // const id = 10000000000; // несуществующий id для проверки блока catch
>>>>>>> e66cb8e8d9093cae985a57526c2ccebcae094234
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {

        const {char, loading, error} = this.state;
<<<<<<< HEAD

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;
=======

        const errorMessage = error ? <ErrorMessage/> : null
        const spinner = loading ? <Spinner/> : null

        const content = !(loading || error) ? <View char={char}/> : null ;

>>>>>>> e66cb8e8d9093cae985a57526c2ccebcae094234

        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const View = ({char}) => {
<<<<<<< HEAD

    const {name, gender, born, died, culture} = char;

=======
    const {name, gender, born, died, culture} = char;
>>>>>>> e66cb8e8d9093cae985a57526c2ccebcae094234
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}
