import React from 'react'
import './PortfolioItem.scss'

const PortfolioItem = ({img, link, name}) => (
  <div className="portfolio__item">
    <img src={img} alt={name}/>
    <div className="portfolio__itemHover">
      <a href={link}>{name}</a>
    </div>
  </div>
)

export default PortfolioItem
