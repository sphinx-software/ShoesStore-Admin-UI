import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import {Link} from "react-router-dom";

class Products extends Component {
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
        <div className={'row justify-content-between col-md-10 mx-auto'}>
          <Link  className={'btn btn-info col-md-4'} to="/products/add"> <button  className={'btn'}> Add Product </button>
          </Link>
          <button className={'btn btn-danger col-md-4'}> Product in trash </button>

        </div>
        <Row className={'mt-3'}>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader className={'d-inline-block'}>

                <span>Giày thể thao</span>

                <div className="card-header-actions">
                  <Link to="/products/1"><i className="cui-note icons font-2xl"></i>
                  </Link>
                  <i className={"cui-trash icons font-2xl ml-2"}></i>

                </div>
              </CardHeader>
              <CardBody>
                <p><strong>id: </strong><span>1</span></p>
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

export default Products;
