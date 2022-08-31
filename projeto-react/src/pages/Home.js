import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div class="md-5">
                            <h1 class="fw-light mb-5" style={{color: "#d63384"}}>Ana Kelly</h1>

                            <div class="fw-light mb-5">
                                Natal,RN · 84 9 9850-4476 · 
                                <a href="mailto:ana.costa@stoom.com.br"> ana.costa@stoom.com.br</a>
                            </div>
                            <p class="fw-light mb-5" > Estagiaria - Stoom</p>
                        </div>

                        {/*<div class="col-6 text-center">
                            <div class="card" style = {{width: "18rem"}}>
                                <div class="card-header">
                                    Informações pessoais
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Feminino</li>
                                    <li class="list-group-item">22 anos</li>
                                </ul>
                            </div>
                           
                            <div class="card" style = {{width: "18rem"}}>
                                <div class="card-header">
                                    Informações de contato
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">ana.costa@stoom.com.br</li>
                                    <li class="list-group-item">+55 84 9 9850-4476</li>
                                    <li class="list-group-item"> <a href="https://www.linkedin.com/in/ana-kelly-17b8371b9/"
                                      >Curriculo</a></li>
                                </ul>
                            </div>
                            </div> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Home;