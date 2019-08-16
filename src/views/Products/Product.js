import React, {Component} from 'react';

class Image extends Component {
  state = {
    url: ''
  }

  render() {
    let style = {
      backgroundImage: 'url(' + this.state.url + ')',
      width: 200 + "px",
      height: 200 + "px",
      border: '1px solid',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }

    return (
      <div className={'float-left mt-3 mr-6 justify-content-between'}>
        <div style={style}>

        </div>
        <input className={'w-75'} type="file" accept="image/x-png,image/gif,image/jpeg" onChange={(event) => {
          this.setState({
            url: URL.createObjectURL(event.target.files[0])
          })
        }}/>
      </div>

    )
  }
}

class RemoveButton extends Component {
  render() {
    return (
      <div>
        <button onClick={() => {
          this.props.removeVariation();
        }}>remove
        </button>
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
        <label htmlFor="color"> Size</label>
        <input id={'color'} name={'color'} type="number"/>
        <label htmlFor="qty">Quantity</label>
        <input type="number" id={'qty'}/>
      </div>

    )
  }

}

class Product extends Component {
  state = {
    Variations: [],
  }


  removeVariation(index) {
    const variations = this.state.Variations;
    variations.splice(index, 1)
    this.setState({
      Variations: variations
    })
  }

  render() {
    return (
      <div className={'row form-group '}>
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
            this.state.Variations.map((item, index) => {
              return (
                <div className={'row d-inline-block '}>
                  <div className={'float-left'}>
                    <Variations/>
                  </div>
                  <div className={'float-left'}>
                    <RemoveButton removeVariation={() => {
                      this.removeVariation(index)
                    }}/>
                  </div>

                </div>
              )
            })
          }
          <div>
            <button type="button" className="btn btn-primary" onClick={() => {
              let array = this.state.Variations;
              array.push(<Variations/>)
              this.setState({
                Variations: array
              })
            }}>+
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

export default Product;
