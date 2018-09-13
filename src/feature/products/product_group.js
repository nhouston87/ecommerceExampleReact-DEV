import React from 'react'
import styled from 'styled-components'

// Bring in dependncy files
import Product from './product'

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default (props) => {
  const {title, items} = props
  
  return (
    <div>
      <div className="row">
        <h3>{title}</h3>
      </div>
      <Row className="row">
        {items.map(item => <Product data={item} />)}
      </Row>
    </div>
  )
}