import React, { Component }                                                                        from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { withRouter }                                                                              from 'react-router-dom';
import axios                                                                                       from 'axios';
import slug                                                                                        from 'slug';


class Forms extends Component {

  constructor(props) {
    super(props);
    this.state = {
        url               : process.env.REACT_APP_API_URL + 'collections/',
        collections       : [],
        collection_name   : '',
        parent_collection : null,
        related_slug      : ''
    };
  }


  onSubmit(e) {
    e.preventDefault();
    let slugName = slug(this.state.collection_name.toLowerCase());
    let collection = {
      name      : this.state.collection_name,
      slug      : slugName,
      parent_id : this.state.parent_collection,
    };

    axios.post(this.state.url, collection)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    this.props.history.push("/collections/add");
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
    await axios.get(this.state.url)
      .then(res => this.setState({ collections: res.data.Collections } ));
  }


  async componentDidMount() {
    await this.getCollections();
  }


  render() {

    const { collections, collection_name, parent_collection, related_slug } = this.state;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Add New Collection</strong>
              </CardHeader>
              <CardBody>
                <Form onSubmit={ () => this.onSubmit() } className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Collection Name"
                             value={collection_name}
                             onChange={ () => this.onChangeCollectionName() }
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Select Parent Collection</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select"
                             onChange={ () => this.onChangeParentCollection() }
                             value={parent_collection}>
                        <option>Please select</option>
                          {
                            collections.map((collection, index) => {
                              return(<option key={index} value={collection.data.id}>{collection.data.name}</option>)
                            })
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

export default withRouter(Forms);
