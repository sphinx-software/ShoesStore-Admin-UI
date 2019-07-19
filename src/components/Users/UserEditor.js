import React, { Component } from 'react';
import {
  Badge,
  Button, Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label
} from "reactstrap";

export default class UserEditor extends Component {
    render() {
       return(
         <Card>
           <CardHeader>
             <strong>Create User</strong>
           </CardHeader>
           <CardBody>
             <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
               <FormGroup row>
                 <Col md="3">
                   <Label htmlFor="text-input">Username</Label>
                 </Col>
                 <Col xs="12" md="9">
                   <Input type="text" id="text-input" name="text-input" placeholder="Enter your Username" />
                   <FormText color="muted">Please enter your Username</FormText>
                 </Col>
               </FormGroup>
               <FormGroup row>
                 <Col md="3">
                   <Label htmlFor="email-input">Email</Label>
                 </Col>
                 <Col xs="12" md="9">
                   <Input type="email" id="email-input" name="email-input" placeholder="Enter your Email" autoComplete="email"/>
                   <FormText className="help-block">Please enter your email</FormText>
                 </Col>
               </FormGroup>
               <FormGroup row>
                 <Col md="3">
                   <Label htmlFor="password-input">Password</Label>
                 </Col>
                 <Col xs="12" md="9">
                   <Input type="password" id="password-input" name="password-input" placeholder="Enter your Password" autoComplete="new-password" />
                   <FormText className="help-block">Please enter a complex password</FormText>
                 </Col>
               </FormGroup>
               <FormGroup row>
                 <Col md="3">
                   <Label htmlFor="text-input">Phone Number</Label>
                 </Col>
                 <Col xs="12" md="9">
                   <Input type="text" id="text-input" name="text-input" placeholder="Enter your Phone Number" />
                   <FormText color="muted">Please enter your Phone Number</FormText>
                 </Col>
               </FormGroup>
               <FormGroup row>
                 <Col md="3">
                   <Label htmlFor="text-input">Address</Label>
                 </Col>
                 <Col xs="12" md="9">
                   <Input type="text" id="text-input" name="text-input" placeholder="Enter your Address" />
                   <FormText color="muted">Please enter your Address</FormText>
                 </Col>
               </FormGroup>
               <FormGroup row>
                 <Col md="3">
                   <Label>Gender</Label>
                 </Col>
                 <Col md="9">
                   <FormGroup check className="radio">
                     <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                     <Label check className="form-check-label" htmlFor="radio1">Male</Label>
                   </FormGroup>
                   <FormGroup check className="radio">
                     <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                     <Label check className="form-check-label" htmlFor="radio2">Female</Label>
                   </FormGroup>
                 </Col>
               </FormGroup>
               <FormGroup row>
                 <Col md="3">
                   <Label htmlFor="textarea-input">Textarea</Label>
                 </Col>
                 <Col xs="12" md="9">
                   <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                          placeholder="Content..." />
                 </Col>
               </FormGroup>
               <FormGroup row>
                 <Col md="3">
                   <Label htmlFor="select">Select</Label>
                 </Col>
                 <Col xs="12" md="9">
                   <Input type="select" name="select" id="select">
                     <option value="0">Please select</option>
                     <option value="1">Option #1</option>
                     <option value="2">Option #2</option>
                     <option value="3">Option #3</option>
                   </Input>
                 </Col>
               </FormGroup>
               <FormGroup row>
                 <Col md="3">
                   <Label htmlFor="file-input">File input</Label>
                 </Col>
                 <Col xs="12" md="9">
                   <Input type="file" id="file-input" name="file-input" />
                 </Col>
               </FormGroup>
               <FormGroup row>
                 <Col md="3">
                   <Label htmlFor="file-multiple-input">Multiple File input</Label>
                 </Col>
                 <Col xs="12" md="9">
                   <Input type="file" id="file-multiple-input" name="file-multiple-input" multiple />
                 </Col>
               </FormGroup>
               <FormGroup row hidden>
                 <Col md="3">
                   <Label className="custom-file" htmlFor="custom-file-input">Custom file input</Label>
                 </Col>
                 <Col xs="12" md="9">
                   <Label className="custom-file">
                     <Input className="custom-file" type="file" id="custom-file-input" name="file-input" />
                     <span className="custom-file-control"></span>
                   </Label>
                 </Col>
               </FormGroup>
             </Form>
           </CardBody>
           <CardFooter>
             <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Create</Button>
             <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
           </CardFooter>
         </Card>
       );
    }
}
