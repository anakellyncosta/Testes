import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

class Formacao extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h2 class=" fw-light mb-5">Formação</h2>

                            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div class="flex-grow-1">
                                    <h3 class="fw-light mb-0">Universidade Federal do Rio Grande do Norte - UFRN</h3>
                                    <div class="fw-light mb-3">Bacharelado, Ciência e Tecnológia</div>
                                </div>
                                <div class="fw-light flex-shrink-0" style={{color: "#d63384"}}>Fevereiro 2020 - Presente</div>
                            </div>

                            <div class="d-flex flex-column flex-md-row justify-content-between">
                                <div class="flex-grow-1" >
                                    <h3 class="fw-light mb-0">Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte -
                                        IFRN Pau dos Ferros</h3>
                                    <div class="fw-light mb-3">Técnico em Informática</div>
                                </div>
                                <div class="flex-shrink-0 fw-light" style={{color: "#d63384"}}>2014 - 2017</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Formacao;