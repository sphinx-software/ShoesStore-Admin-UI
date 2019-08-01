import React, { Component } from 'react';
import { CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import {renderedDive} from "enzyme/src/Utils";


class Image extends Component{
  state={
    url :''
  }
  render() {
    let style = {
      // backgroundImage:'url(' + 'https://sm.mashable.com/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.png' + ')',
      width:200,
      height:200
    }

    return(
      <div className={'float-left mt-5 mr-5'} style={style}>
        <img style={{
          width:'100%',
          height:'100%'
        }} src={this.state.url} alt=""/>


        <input  type="file" accept="image/x-png,image/gif,image/jpeg"  onChange={(event)=>{
          this.setState({
            url:URL.createObjectURL(event.target.files[0])
          })
        }} />
      </div>
    )
  }
}

class ProductForm extends Component{
  state = {
    Variations:[],
  }


  removeVariation(index) {
    const variations = this.state.Variations;
    variations.splice(index,1)
    this.setState({
      Variations:variations,
      index:0
    })
  }

  variations() {
    return (
      <div>
        <label htmlFor="size">Color</label>
        <input name={'size'} id={'size'} type="text"/>
        <label htmlFor="color"> Size</label>
        <input id={'color'} name={'color'} type="number"/>
        <label htmlFor="qty">Quantity</label>
        <input type="number" id={'qty'}/>
        <button onClick={()=>{
          this.removeVariation(this.state.index)
        }}>remove</button>
      </div>
    )
  }

  render() {
    return(
      <div className={'row form-group '}>
        <div className={'col-md-6'}>
          <p><strong>Name:</strong><input type="text" className={'form-control'}/>
          </p>
          <p><strong>Collection:</strong><input type="text" className={'form-control'}/>
          </p>
          <p><strong>Price:</strong><input type="text"  className={'form-control'}/>
          </p>
          <p><strong>Total quantity:</strong><input type="text"  className={'form-control'}/>
          </p>
          <p><strong>Description:</strong><textarea  className={'form-control'}/>
          </p>

          {
            this.state.Variations.map((item, index)=>{
              return (
                <div>
                  {item}
                </div>
              )
            })
          }
          <div>
            <button type="button" className="btn btn-primary" onClick={()=>{
              let array = this.state.Variations;
              array.push(this.variations())
              this.setState({
                Variations:array
              })
            }}>+</button>

          </div>
        </div>
        <div className={'col-md-6  '}>
          <Image/>
          <Image/>
          <Image/>
          <Image/>
          <Image/>
          <Image/>
          <Image/>
          <Image/>
        </div>
        <div className={'btn btn-primary col-md-5 mx-auto'}>
          Save change
        </div>


      </div>
    )
  }


}
export default ProductForm;
