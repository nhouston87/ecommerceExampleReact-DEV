import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const Col = styled.div`
  display: flex;
  margin-top: 15px; 
`
const Card = styled.div`
  ${media.lessThan('medium')`
    margin: 0 auto;
  `} 
`
const CardDesc = styled.p`
  overflow-y: hidden;
`

export default (props) => {
  let {data} = props
  return(
    <Col className="col-12 col-sm-6 col-md-4 col-lg-3">
      <Card className="card">
        {<img className="card-img-top img-fluid" src={data.img ? data.img : './products/img/no_img_ava.JPG'} alt={data.name} />}
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <CardDesc className="card-text">
            {data.description.length > 31 ? `${data.description.substr(0, 30)}...` : data.description}
          </CardDesc>
          <p className="card-text">{`$${data.price}.00`}</p>
        </div>
      </Card>
    </Col>
  )
}