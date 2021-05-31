import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css';


export default class App extends Component {

    state = {
        showRandomChar: true
    }
    onToggleChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    render() {

        const char = this.state.showRandomChar
        const showChar = char ? <RandomChar/> : null;

        return (
            <>
                <Container>
                    <Header/>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {showChar}
                            <button
                            className="toggle-btn"
                            onClick={this.onToggleChar}
                            >
                                Toggle
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList/>
                        </Col>
                        <Col md='6'>
                            <CharDetails/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
}

