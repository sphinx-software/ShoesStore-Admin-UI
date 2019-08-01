import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import {Link} from "react-router-dom";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>

                <Link to="/models/1">Giày thể thao</Link>
                <div className="card-header-actions">
                  <AppSwitch className={'float-right mb-0'} label color={'info'} defaultChecked size={'lg'}/>
                </div>
              </CardHeader>
              <CardBody>
                <p><strong>id: </strong><span>1</span></p>
                <p><strong>Name: </strong><span>Giat tay</span></p>
                <p><strong>Collection: </strong><span>Giay nam</span></p>
                <p><strong>price: </strong><span>300 000</span></p>
                <p><strong>Status: </strong><span>in stock</span></p>

              </CardBody>
            </Card>
          </Col>

        </Row>

      </div>
    );
  }
}

export default Cards;
