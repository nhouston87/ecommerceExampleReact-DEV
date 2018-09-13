import React from 'react'
import styled from 'styled-components'

import Carousel from './carousel'
import ProductGroup from './product_group'
import { jackets } from './products'
import { shirts } from './products'
import { pants } from './products'

const MainWrapper = styled.div `
  margin-top: 60px;
`

export default (props) => {
  let {display} = props
  return (
    <MainWrapper className="container">
      <div className="row">
        <div className="col-12">
          <Carousel />
        </div>
      </div>
        {display.map(type => {
         return (
            <div className="row">
              <div className="row">
                <div className="col-12">
                <h1>Our Products</h1>
                </div>
              </div>
              {type === 'jackets' ? <ProductGroup title='Jackets' items={jackets} /> : '' }
              {type === 'shirts' ? <ProductGroup title='Shirts' items={shirts} /> : '' }
              {type === 'pants' ? <ProductGroup title='Pants' items={pants} /> : '' }
            </div>
         ) 
        })}
    </MainWrapper>
  )
}