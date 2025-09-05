import React from 'react'
import WatchList from './WatchList'
import Summary from './Summary'
import Orders from './Orders'
import Holdings from './Holdings'
import Positions from './Positions'
import {Routes,Route} from 'react-router-dom'
import Funds from './Funds.jsx'
import App from '../App.jsx'
import { GeneralContextProvider } from './GeneralContext.jsx'

const Dashboard = () => {
  return (
<div className="dashboard-container">
    <GeneralContextProvider>
        <WatchList/>
    </GeneralContextProvider>
    
    <div className="content">
        <Routes>
            <Route path='/' element={<Summary/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/holdings' element={<Holdings/>}/>
            <Route path='/positions' element={<Positions/>}/>
            <Route path='/funds' element={<Funds/>}/>
            <Route path='/apps' element={<App/>}/>
        </Routes>
    </div>
</div>
)
}

export default Dashboard