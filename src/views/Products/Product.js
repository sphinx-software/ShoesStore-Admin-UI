import React, { Component } from 'react';
import                           '../ui/product/product.css';


class Image extends Component {

  state = {
    url: ''
  };


  onChange(e) {
    this.setState({
      url: URL.createObjectURL(e.target.files[0])
    })
  };


  render() {
    return (
      <div className={'float-left mt-3 mr-6 justify-content-between'}>
        <div className="product" style={{ backgroundImage: 'url(' + this.state.url + ')' }}>
        </div>
        <input className={'w-75'} type="file" accept="image/x-png,image/gif,image/jpeg" onChange={ (e) => this.onChange(e) }/>
      </div>
    )
  }
}


class RemoveButton extends Component {

  render() {
    return (
      <div>
        <button onClick={ () => this.props.removeVariation() }>Remove</button>
      </div>
    )
  }
}


class Variations extends Component {

  render() {
    return (
      <div className={'d-inline-block'}>
        <label htmlFor="size">Color</label>
        <input name={'size'} id={'size'} type="text"/>
        <label htmlFor="color">Size</label>
        <input id={'color'} name={'color'} type="number"/>
        <label htmlFor="qty">Quantity</label>
        <input type="number" id={'qty'}/>
      </div>
    )
  }
}


export default class Product extends Component {

  state = {
    variations: [],
  };


  addVariation() {
    const { variations } = this.state;
    variations.push(<Variations/>);
    this.setState({ variations })
  };


  removeVariation(index) {
    const { variations } = this.state;
    variations.splice(index, 1)
    this.setState({ variations })
  };


  render() {

    const { variations } = this.state;

    return (
      <div className={'row form-group'}>
        <div className={'col-md-6'}>
          <p><strong>Name:</strong><input type="text" className={'form-control'}/>
          </p>
          <p><strong>Collection:</strong><input type="text" className={'form-control'}/>
          </p>
          <p><strong>Price:</strong><input type="text" className={'form-control'}/>
          </p>
          <p><strong>Total quantity:</strong><input type="text" className={'form-control'}/>
          </p>
          <p><strong>Description:</strong><textarea className={'form-control'}/>
          </p>
          {
            variations.map((item, index) => {
              return (
                <div className={'row d-inline-block '}>
                  <div className={'float-left'}>
                    <Variations/>
                  </div>
                  <div className={'float-left'}>
                    <RemoveButton removeVariation={ () => this.removeVariation(index) }/>
                  </div>
                </div>
              )
            })
          }
          <div>
            <button type="button" className="btn btn-primary" onClick={ () => this.addVariation() }>
               +
            </button>
          </div>
        </div>
        <div className={'col-md-6'}>
          <Image/>
          <Image/>
          <Image/>
          <Image/>
          <Image/>
          <Image/>
        </div>
        <div className={'btn btn-primary col-md-5 mx-auto mt-5'}>
          Save change
        </div>
      </div>
    )
  }
}
