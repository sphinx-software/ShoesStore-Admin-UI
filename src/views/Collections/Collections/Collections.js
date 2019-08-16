import React, { Component }                                                                                         from 'react';
import { Card, CardBody, CardHeader, Col, Row, Collapse, Fade, ModalHeader, ModalBody, ModalFooter, Button, Modal } from 'reactstrap';
import { Link }                                                                                                     from "react-router-dom";
import axios                                                                                                        from 'axios';


export default class Collections extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      danger: false,
      collapse: true,
      fadeIn: [],
      timeout: 300,
      url: process.env.REACT_APP_API_URL + 'collections/',
      collections: [
        {
          _links: {
            self: {
              href: "/api/v1/collections/1"
            }
          },
          data: {
            id: 1,
            parentId: null,
            name: "Chief Applications Producer",
            slug: "chief-applications-producer",
            relatedSlugs: [
              "product-paradigm-orchestrator"
            ],
            createdAt: "2019-07-23T04:27:46.150Z",
            updatedAt: "2019-07-23T04:27:46.150Z",
            deletedAt: null
          }
        }
      ],

    };
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggleDanger() {
    this.setState({
      danger: !this.state.danger
    });
  }

  toggleDangerConfirm(index) {
    const fadeIn = this.state.fadeIn;
    fadeIn[index] = false;
    this.setState({
      danger: !this.state.danger,
      collapse: !this.state.collapse,
      fadeIn
    });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  async getCollections() {
    await axios.get(this.state.url)
      .then(res => this.setState({ collections: res.data.Collections } ));
    const fadeIn = this.state.fadeIn;
    for (let i = 0; i < this.state.collections.length; i++) {
      fadeIn[i] = true;
    }
  }


  async componentDidMount() {
    await this.getCollections();
    const fadeIn = this.state.fadeIn;
    fadeIn[0] = true;
    this.setState({ fadeIn })
  }



  render() {

    const { collections, timeout, danger, collapse } = this.state;
    const { className }                              = this.props;

    return (
      <div className="animated fadeIn">
        <Row className="align-items-center">
          <Col col="12" xl className="mb-3 mb-xl-0">
          </Col>
          <Col col="12" xl className="mb-3 mb-xl-0">
          </Col>
          <Col col="12" xl className="mb-3 mb-xl-0">
          </Col>
          <Col col="4" sm="2" md="2" xl className="mb-3 mb-xl-0">
            <Link to={'/collections/add'} className="card-header-action">
              <Button block color="success">Add New Collection</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          {
            collections.map((tmpCollection, index) => {
              const collection = tmpCollection.data;

              return(<Col xs="12" sm="6" md="4" key={index}>
                <Fade timeout={timeout} in={this.state.fadeIn[index]}>
                  <Card>
                    <CardHeader>
                      <div className="btn btn-setting">
                        <strong>{collection.name}</strong>
                      </div>
                      <div className="card-header-actions">
                        {/*eslint-disable-next-line*/}
                        <Link to={'/collections/edit/' + collection.id} className="card-header-action btn btn-setting">
                          <i className="cui-note icons font-2xl d-block mt-4"></i>
                        </Link>
                        <div className="card-header-action btn btn-setting">
                          <i id={collection.id} color="danger" onClick={ () => this.toggleDanger() } className="cui-trash icons font-2xl d-block mt-4"/>
                          <Modal isOpen={danger} toggle={ () => this.toggleDanger() }
                                 className={'modal-danger ' + className}>
                            <ModalHeader toggle={ () => this.toggleDanger() }>Notice</ModalHeader>
                            <ModalBody>
                              Remove this collection?
                            </ModalBody>
                            <ModalFooter>
                              <Button color="danger" onClick={(index) => this.toggleDangerConfirm(index)}>Remove</Button>{' '}
                              <Button color="secondary" onClick={ () => this.toggleDanger() }>Cancel</Button>
                            </ModalFooter>
                          </Modal>
                        </div>
                      </div>
                    </CardHeader>


                    <Collapse isOpen={collapse} id={collection.id}>
                      <CardBody>
                        <p><strong>ID</strong> {collection.id}</p>
                        <p><strong>Parent Collection</strong> {collection.parentId}</p>
                        <p><strong>Name</strong> {collection.name}</p>
                        <p><strong>Slug</strong> {collection.slug}</p>
                        <p><strong>Related Slug</strong> {collection.relatedSlugs}</p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </Fade>
              </Col>)
            })
          }
        </Row>
      </div>
    );
  }
}
