import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Import route components
import Home from './feature/products'

// Import Shared components
import NavBar from './shared/navbar'

class App extends Component {
  constructor(){
    super()
    this.state = {
      w: 0, 
      h: 0,
      products: ['jackets', 'shirts', 'pants']
    }
  }

  componentWillMount(){
    window.addEventListener('resize', this.handleWindowResize.bind(this))
    this.handleWindowResize()
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleWindowResize.bind(this))
  }

  handleWindowResize(){
    let w = window.innerWidth
    let h = window.innerHeight
    this.setState({w, h})
  }


  render() {
    let {w, h, products} = this.state
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavBar />
            <div className="row">
              <div className="col-12">
                <Switch>
                  <Route path='/' render={() => (<Home w={w} h={h} display={products} />)} exact />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
