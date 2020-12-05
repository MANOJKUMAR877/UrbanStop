import React, { Component } from 'react'
import LineChart from './components/LineChart';
import Cards from './components/Cards';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug, faChartLine, faCodeBranch, faCommentDots, faPlayCircle, faServer } from '@fortawesome/free-solid-svg-icons'
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }


  render() {

    return (
      <div>
        <Navbar bg="light" expand="sm">
          <Navbar.Brand href="#home">UrbanStop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#"><FontAwesomeIcon icon={faServer} /> Data Liberay</Nav.Link>
              <Nav.Link href="#"> <FontAwesomeIcon icon={faCodeBranch} /> Workflow</Nav.Link>
              <Nav.Link href="#"> <FontAwesomeIcon icon={faPlayCircle} /> Scheduler</Nav.Link>
              <Nav.Link href="#"> <FontAwesomeIcon icon={faBug} /> Error Manger</Nav.Link>
              <Nav.Link href="#"> <FontAwesomeIcon icon={faCommentDots} /> Notifications</Nav.Link>
              <Nav.Link href="#"> <FontAwesomeIcon icon={faChartLine} /> Reports</Nav.Link>

            </Nav>

          </Navbar.Collapse>
        </Navbar>
        <br/>
        <br/>
        <LineChart/>
        <Cards/>
        <br/>
        <br/>
      </div>
    )
  }
}
