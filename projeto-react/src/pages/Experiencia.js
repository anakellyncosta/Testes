import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

class Experiencia extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div class="resume-section-content">
                            <h2 class="fw-light mb-5">Experiência</h2>

                            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div class="flex-grow-1">
                                    <h3 class="fw-light mb-0">Estagiaria</h3>
                                    <div class="fw-light mb-3">Stoom - Soluções em E-commerce</div>
                                    <div class="fw-light">Suporte a gestão de projetos (apresentações e controles de indicadores inerentes a projetos).
                                        - Suporte a gestão de sustentação (apresentações e controles de indicadores inerentes a
                                        sustentação). - Suporte a gestão do portfólio e dos times (apresentações e controles de
                                        alocações de times). - Suporte a gestão e padronização de processos de desenvolvimento de
                                        software (apresentações e atividades inerentes a fóruns e padronizações de processos
                                        internos de desenvolvimento de software). - Suporte e desenvolvimento e manutenção de
                                        sistemas web nas tecnologias Java, HTML, JS e CSS utilizando os principais frameworks de
                                        mercado. - Suporte na aplicação de conceitos e técnicas escaláveis para aplicações
                                        corporativas de médio e grande porte. - Suporte e otimização de sistemas. - Suporte e
                                        desenvolvimento de consultas a bancos de dados. - Suporte na projeção e implementação de
                                        testes. - Suporte na depuração e definição de ações corretivas ao sistema. - Suporte e
                                        auxílio na garantia da qualidade e eficiência do sistema. - Suporte na análise de aplicações
                                        para que possíveis bugs sejam corrigidos enquanto estão sendo desenvolvidos. - Suporte na
                                        correção de falhas antes que o produto final fique pronto.</div>
                                </div>
                                <div class="flex-shrink-0" style={{color: "#d63384"}}>Junho 2022 - Presente</div>
                            </div>

                            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div class="flex-grow-1">
                                    <h3 class="fw-light mb-0">Atendente de telemarketing</h3>
                                    <div class="fw-light mb-3">Teleperformance Brasil</div>
                                    <div class="fw-light"> Suporte via chat e voz para o público em geral de acordo com o produto fornecido.</div>
                                </div>
                                <div class="flex-shrink-0" style={{color: "#d63384"}}>Dezembro 2018 - Junho 2022</div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Experiencia;