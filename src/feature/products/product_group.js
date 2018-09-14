import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

// Bring in dependncy files
import Product from './product'

const Title = styled.div`
  border: 1px solid black;

  ${media.lessThan('medium')`
    margin: 10px auto;
  `}
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default (props) => {
  const {title, items} = props
  
  return (
    <div>
      <div className="row mt-3">
        <Title className="col-7 col-sm-12">
          <h4>{title}</h4>
        </Title>
      </div>
      <Row className="row">
        {items.map(item => <Product data={item} />)}
      </Row>
    </div>
  )
}