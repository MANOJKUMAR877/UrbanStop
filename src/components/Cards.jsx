import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup';

import DonutChart from 'react-donut-chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug, faCodeBranch, faCommentDots, faPlayCircle, faServer } from '@fortawesome/free-solid-svg-icons'
export default class Cards extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cardData: [{
                name: 'Premium less than zero',
                variant: 'danger',
                value: 'high',
                price: 1500

            },
            {
                name: 'Sum insured less than zero',
                variant: 'danger',
                value: 'high',
                price: 1500
            },
            {
                name: 'Incorrect City names & address',
                variant: 'warning',
                value: 'medium',
                price: 1500

            },
            {
                name: 'Discharge data before admission data',
                variant: 'danger',
                value: 'high',
                price: 1500

            },
            {
                name: 'Wrong telephone number',
                variant: 'warning',
                value: 'low',
                price: 1500
            }


            ]
        }
    }
  
    render() {
console.log(this.props)
        return (
            <div>
                <CardDeck style={{ height: '42rem', width: '90rem', paddingLeft: '12px', overflowX: 'hidden' }}>
                    <Card>

                        <Card.Body>
                            <Card.Title>Data Quality Index</Card.Title>
                            <DonutChart className="donutchart-arcs-path"
                                data={[{
                                    label: 'Currently',
                                    value: 75
                                },
                                {
                                    label: 'Last 5 months',
                                    value: 25,
                                    isEmpty: true
                                }]} />
                        </Card.Body>

                    </Card>
                    <Card>

                        <Card.Body>
                            <Card.Title>Top Errors</Card.Title>

                            <ListGroup variant="flush">
                                {
                                    this.state.cardData.map((data, index) => (
                                        <ListGroup.Item key={index}>{data.name}
                                            <Button style={{ borderRadius: '30px', marginLeft: '25px' }} variant={data.variant} size="sm" >{data.value}</Button>
                                            <Card.Text className="card-span">{data.price}</Card.Text>
                                            <Card.Text className="card-t">MARKETING WORKFLOW 1</Card.Text>
                                        </ListGroup.Item>
                                    )
                                    )
                                }


                            </ListGroup>

                        </Card.Body>

                    </Card>
                    <Card>

                        <Card.Body>
                            <Card.Title>Assigned To Me</Card.Title>
                            <ListGroup variant="flush">
                                {
                                    this.state.cardData.map((data, index) => (
                                        <ListGroup.Item key={index}>{data.name}
                                            <Button style={{ borderRadius: '30px', marginLeft: '25px' }} variant={data.variant} size="sm" >{data.value}</Button>
                                            <Card.Text className="card-span">{data.price}</Card.Text>
                                            <Card.Text className="card-t">MARKETING WORKFLOW 1</Card.Text>
                                        </ListGroup.Item>
                                    )
                                    )
                                }


                            </ListGroup>
                        </Card.Body>

                    </Card>
                </CardDeck>
                <br />
                <br />
                <CardDeck style={{ height: '42rem', width: '91rem', paddingLeft: '12px', overflowX: 'hidden' }}>
                    <Card>

                        <Card.Body>
                            <Card.Title>Data Quality Index</Card.Title>
                            <DonutChart className="donutchart-arcs-path"
                                data={[{
                                    label: 'Currently $16  million',
                                    value: 75
                                },
                                {
                                    label: 'Last 5 months',
                                    value: 25,
                                    isEmpty: true
                                }]} />
                        </Card.Body>

                    </Card>
                    <Card>

                        <Card.Body>
                            <Card.Title>Highest Bussiness Impact</Card.Title>

                            <ListGroup variant="flush">
                                {
                                    this.state.cardData.map((data, index) => (
                                        <ListGroup.Item key={index}>{data.name}
                                            <Button style={{ borderRadius: '30px', marginLeft: '25px' }} variant={data.variant} size="sm" >{data.value}</Button>
                                            <Card.Text className="card-span">${data.price}</Card.Text>
                                            <Card.Text className="card-t">MARKETING WORKFLOW 1</Card.Text>
                                        </ListGroup.Item>
                                    )
                                    )
                                }


                            </ListGroup>

                        </Card.Body>

                    </Card>
                    <Card>

                        <Card.Body>
                            <Card.Title>Assigned To Me</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>

                                    <Card.Text><FontAwesomeIcon className="icons" icon={faCodeBranch}></FontAwesomeIcon> Workflow Marketing data 1</Card.Text>
                                    <Card.Text className="card-">Finished running and 10,000 errors have been detected</Card.Text>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Card.Text><FontAwesomeIcon className="icons" icon={faServer}></FontAwesomeIcon> Data Libary - earthquakes.csv added</Card.Text>
                                    <Card.Text className="card-">earthquakes.csv added and data profiling begun</Card.Text>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Card.Text><FontAwesomeIcon className="icons" icon={faCommentDots}></FontAwesomeIcon> @deleeps tagged you in a comment</Card.Text>
                                    <Card.Text className="card-">Have a look at this dataset and see if it...more</Card.Text>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Card.Text><FontAwesomeIcon className="icons" icon={faBug}></FontAwesomeIcon> Error - 10,000 errors detected</Card.Text>
                                    <Card.Text className="card-">New errors detected in Marketing data 1</Card.Text>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Card.Text><FontAwesomeIcon className="icons" icon={faPlayCircle}></FontAwesomeIcon> Job - Marketing data 1 successfully run </Card.Text>
                                    <Card.Text className="card-">Finished running and 10,00 errors have been declared</Card.Text>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>

                    </Card>
                </CardDeck>
            </div>
        )
    }
}
