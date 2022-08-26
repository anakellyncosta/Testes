import React, { Component } from 'react'

import { Table, Row, Col } from 'react-bootstrap';
import { TableRow } from '../components/TableRow';

class User extends Component {
    render() {
        let list = [
            {
                name: "Ana Kelly",
                email: "anakelly.ka@gmail.com"
            },
            {
                name: "Clauida",
                email: "claudianobre2011@hotmail.com"
            },
            {
                name: "Usuário 1",
                email: "user1@hotmail.com"
            },
            {
                name: "Usuário 2",
                email: "user2@hotmail.com"
            },
            {
                name: "Usuário 3",
                email: "user3@hotmail.com"
            },
        ]
        return (
            <Row>
                <Col>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Ativo</th>
                                <th>Removido</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((item) => {
                                return (
                                    <TableRow name={item.name} email={item.email} active='Sim' deleted='Não' />
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );
    }
}
export default User;