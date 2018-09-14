import React, {Component} from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import * as EmailValidator from 'email-validator'
import {colors, fonts, brand} from '../../shared/theme'

import Carousel from './carousel'
import ProductGroup from './product_group'
import { jackets } from './products'
import { shirts } from './products'
import { pants } from './products'

const MainWrapper = styled.div `
  margin-bottom: 45px;
`
const Header = styled.div`
  margin-top: 0;
  margin-bottom: 20px;
  padding: 65px 15px 25px 15px;
  background-color: ${colors.sub_dark};
  color: white;
`
const H1 = styled.h1`
  font-weight: bold;
  font-size: ${fonts.size.head_h1};

  ${media.lessThan('large')`
    text-align: center;
  `}
`
const BrandSpan = styled.span`
  color: ${colors.main};
`
const SuccessDiv = styled.div`
  &.no-alert {
    display: none;
  }

  &.alert {
    color: ${colors.sub_light};
  }
`
const ErrorDiv = styled.div`
  &.no-alert {
    display: none;
  }

  &.alert {
    color: ${colors.sub_light};
  }
`

export default class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      success: false,
      error: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
  }

  handleChange(e) {
    let nEmail = e.target.value
    this.setState({email: nEmail})
  }

  handleSubmit(e) {
    e.preventDefault()
    let {email} = this.state
    if(!this.validateEmail(email)){
      this.setState({
        error: true
      })
      setTimeout(() => this.setState({error: false}), 4000)
      return
    }
    this.setState({
      email: '',
      success: true
    })
    setTimeout(() => this.setState({success: false}), 4000)
  }

  validateEmail(e){
    let valid = true
    if(e === null || e === '') valid = false
    if(!EmailValidator.validate(e)) valid = false
    return valid
  }

  render(){
    let {display} = this.props
    let {email, success, error} = this.state

    return (
      <MainWrapper className="container">
        <Header className="row">
          <div className="col-12">
            <SuccessDiv className={!success ? 'no-alert row' : 'alert row'}>
              <div className="col-12 text-center">
                Submitted Successfully!
              </div>
            </SuccessDiv>
            <ErrorDiv className={!error ? 'no-alert row' : 'alert row'}>
              <div className="col-12 text-center">
                Please enter a valid email address
              </div>
            </ErrorDiv>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                <H1>Welcome to <BrandSpan>{brand.company_name}</BrandSpan> | Trendy Fashion</H1>
              </div>
              <form 
                onSubmit={this.handleSubmit}
                className="col-12 col-sm-12 col-md-12 col-lg-5">
                <div className="input-group mb-3">
                  <input 
                    type="text"
                    name="email"
                    className="form-control" 
                    placeholder="Join our mailing list | enter email" 
                    aria-label="Recipient's username" 
                    aria-describedby="button-addon2" 
                    value={email}
                    onChange={this.handleChange}
                  />
                  <div className="input-group-append">
                    <button 
                      className="btn btn-outline-secondary" 
                      type="submit" 
                      id="button-addon2" 
                    >
                      Join
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="row">
              <div className="col-12">
                <Carousel />
              </div>
            </div>
          </div>
        </Header>
        <div>
          <div className="row">
            <div className="col-12">
              {display.map(type => {
                return (
                  <div className="row">
                    {type === 'jackets' ? <ProductGroup title='Jackets' items={jackets} /> : '' }
                    {type === 'shirts' ? <ProductGroup title='Shirts' items={shirts} /> : '' }
                    {type === 'pants' ? <ProductGroup title='Pants' items={pants} /> : '' }
                  </div>
                ) 
              })}
            </div>
          </div>
        </div>
      </MainWrapper>
    )
  }
}