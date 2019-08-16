import React, { Component }                                                                        from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';


export default class CollectionUpdate extends Component {

  constructor(props) {
    super(props);
    this.state = {
        url               : process.env.REACT_APP_API_URL + 'collections/',
        collections       : [],
        collection_name   : '',
        parent_collection : '',
        related_slug      : '',
        collection_detail : ''
    };
  }


  onSubmit(e) {
    e.preventDefault();
  }


  onChangeCollectionName(e) {
    this.setState({
      collection_name: e.target.value
    });
  }


  onChangeParentCollection(e) {
    this.setState({
      parent_collection: e.target.value
    });
  }


  onChangeRelatedSlug(e) {
    this.setState({
      related_slug: e.target.value
    });
  }


  async getCollections() {
    await fetch(this.state.url)
      .then(res => res.json())
      .then(res => this.setState({ collections: res.Collections }));
  }


  async componentDidMount() {
    await this.getCollections();
    this.getCollectionDetail();
  }


  getCollectionDetail() {
    const collection_detail = this.state.collections.find(collection => collection.data.id.toString() === this.props.match.params.id).data;
    this.setState({
      collection_detail
    })
  }


  render() {

    const collection                                       = this.state.collection_detail;
    const { collections, parent_collection, related_slug } = this.state;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Update Collection</strong>
              </CardHeader>
              <CardBody>
                <Form onSubmit={ () => this.onSubmit() } className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"
                             id="text-input"
                             name="text-input"
                             placeholder="Collection Name"
                             value={collection.name}
                             onChange={ () => this.onChangeCollectionName() }
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Select Parent Collection</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select"
                             name="select"
                             id="select"
                             onCh ange={ () => this.onChangeParentCollection() }
                             value={parent_collection}>
                        <option value='0'>Please select</option>
                        {
                          collections.map((collection, index) =>
                            (collection.data.id === this.state.collection_detail.id)
                            ? (<option key={index} selected value={collection.data.id}>{collection.data.name}</option>)
                            : (<option key={index} value={collection.data.id}>{collection.data.name}</option>)
                          )
                        }
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Related Slug</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="List of Related Slug"
                             value={related_slug}
                             onChange={ () => this.onChangeRelatedSlug() }
                      />
                    </Col>
                  </FormGroup>
                  <CardFooter>
                    <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                  </CardFooter>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
