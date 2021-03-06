import React from 'react'
import styled from 'styled-components'

const Rounded = styled.div`
  border-radius: 5px;
`

export default () => {
  return(
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <Rounded className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="./products/img/carousel1.jpeg" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="./products/img/carousel2.jpeg" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="./products/img/carousel3.jpeg" alt="Third slide" />
        </div>
      </Rounded>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}