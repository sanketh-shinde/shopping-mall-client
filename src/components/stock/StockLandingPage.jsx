import React from 'react'
import AsideNavBar from './AsideNavBar'
import ShowStocks from './ShowStocks'
import StockNavBar from './StockNavBar'

const StockLandingPage = () => {
  return (
    <div>
      <StockNavBar/>
      <AsideNavBar/>
      <ShowStocks/>
    </div>
  )
}

export default StockLandingPage