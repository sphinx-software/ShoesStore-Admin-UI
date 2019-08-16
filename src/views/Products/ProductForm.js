import React, { Component } from 'react';


class Image extends Component {

  state = {
    url : ''
  }


  render() {

    let style = {
      width   : 200,
      height  : 200
    }


    const { url } = this.state;

    return (
      <div className={'float-left mt-5 mr-5'} style={style}>
        <img style={{ width:'100%', height:'100%'}} src={url} alt=""/>
        <input type="file" accept="image/x-png,image/gif,image/jpeg" onChange={(event)=>{
          this.setState({
            url: URL.createObjectURL(event.target.files[0])
          })
        }}/>
      </div>
    )
  }
}


export default class ProductForm extends Component {

  state = {
    Variations: [],
  };


  removeVariation(index) {
    const variations = this.state.Variations;
    variations.splice(index, 1)
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
