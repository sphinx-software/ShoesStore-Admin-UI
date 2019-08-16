import React, { Component }                            from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

export default class User extends Component {

  state = {
    userData: ''
  };


  async loadUserById(id) {
    await fetch(process.env.REACT_APP_URL + process.env.REACT_APP_VERSION + "credentials/" + id)
      .then(res => res.json())
      .then(userData => {
        this.setState({
          userData
        })
      })
  };


  async componentDidMount(context) {
    await this.loadUserById(this.props.match.params.id);
  };


  render() {

    const { id } = this.props.match.params;

    let userDetails = '';

    if (this.state.userData.data) {
      userDetails = this.state.userData.data;
    }

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>User id: {id}</strong>
              </CardHeader>
              <CardBody>
                <Table responsive striped hover>
                  <tbody>
                  <tr>
                    <td>Name</td>
                    <td><strong>{userDetails.name}</strong></td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td><strong>{userDetails.phone}</strong></td>
                  </tr>
                  <tr>
                    <td>Birday</td>
                    <td><strong>{userDetails.dob}</strong></td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td><strong>{ ( () => {
                      if (userDetails.gender) {
                        return "Male";
                      }
                      return "Female";
                    })() }</strong></td>
                  </tr>
                  <tr>
                    <td>Register date</td>
                    <td><strong>{userDetails.createdAt}</strong></td>
                  </tr>
                  <tr>
                    <td>Role</td>
                    <td><strong>{userDetails.role}</strong></td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td><strong>{userDetails.email}</strong></td>
                  </tr>
                  <tr>
                    <td>Account type</td>
                    <td><strong>{ ( () => {
                      if (!userDetails.externalLogin) {
                        return "Normal";
                      }
                      return userDetails.externalLogin;
                    })() }</strong></td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
