import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import fetchApi1 from '../fetchApi1';
export default class Cards extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    componentDidMount = async () => {
        let apiValue = await fetchApi1()

        this.setState({ data: apiValue }, () => { console.log(this.state.data) })
    };
    render() {
        return (
            <div>
                <CardDeck style={{ height: '20rem',width:'95rem', paddingLeft:'12px'}}>
                    <Card>

                        <Card.Body>
                            <Card.Title>Data Quality Index</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
      </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card>

                        <Card.Body>
                            <Card.Title>Top Errors</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
        content.{' '}
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card>

                        <Card.Body>
                            <Card.Title>Assigned To Me</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
      </Card.Text>
                        </Card.Body>

                    </Card>
                </CardDeck>
            </div>
        )
    }
}
