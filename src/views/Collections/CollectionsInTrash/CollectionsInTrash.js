import React, { Component }                                     from 'react';
import { Card, CardBody, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';


export default class Collections extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapse    : true,
      fadeIn      : true,
      timeout     : 300,
      url         : process.env.REACT_APP_API_URL + 'collections/',
      collections : [],
    };
  }


  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }


  async getCollections() {
    await fetch(this.state.url)
      .then(res => res.json())
      .then(res => this.setState({ collections: res.Collections } ));
  }


  async componentDidMount() {
    await this.getCollections();
  }


  render() {

    const { collections, timeout, fadeIn, collapse } = this.state;

    return (
      <div className="animated fadeIn">
        <Row>
          {
            collections.map((collection2, index) => {
              const collection = collection2.data;
              return(<Col xs="12" sm="6" md="4" key={index}>
                <Fade timeout={timeout} in={fadeIn}>
                  <Card>
                    <CardHeader>
                      {collection.name}
                      <div className="card-header-actions">
                        {/*eslint-disable-next-line*/}
                        <div className="card-header-action btn btn-setting">
                          <button className="card-header-action btn-pill btn btn-secondary btn-block btn-sm"
                          >Update</button>
                        </div>
                        <div className="card-header-action btn btn-setting">
                          <button className="card-header-action btn-pill btn btn-secondary btn-block btn-sm">Delete</button>
                        </div>
                        {/*eslint-disable-next-line*/}
                        <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={ () => this.toggle() }><i className="icon-arrow-up"/></a>
                        {/*eslint-disable-next-line*/}
                        <a className="card-header-action btn btn-close" onClick=''><i className="icon-close"/></a>
                      </div>
                    </CardHeader>
                    <Collapse isOpen={collapse} id="collapseExample">
                      <CardBody>
                        <p><strong>ID</strong> {collection.id}</p>
                        <p><strong>Parent Collection</strong> {collection.parent_id}</p>
                        <p><strong>Name</strong> {collection.name}</p>
                        <p><strong>Slug</strong> {collection.slug}</p>
                        <p><strong>Related Slug</strong> {collection.related_slug}</p>
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
