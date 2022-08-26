import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import routesConfig from './routesConfig';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link><Link to="/"><Button variant="outline-primary">Home</Button></Link></Nav.Link>
                <Nav.Link><Link to="/user"><Button variant="outline-primary">User</Button></Link></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>

        <Row>
          <Col >
            <div style={{backgroundColor: 'red', minHeight: '800px'}}>

            </div>
          </Col>
          <Col style={{marginTop: '10px'}} xs={10}>
            {routesConfig.map((value, key) => {
              return <Route key={key} path={value.path} component={value.component} exact={value.exact} />
            })}
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
