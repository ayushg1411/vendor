import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'


import Login from './Screens/Login'
import LandingScreen from './Screens/LandingScreen'
import Layout from './Layout/Layout'
import Child from './Screens/Child'
import Help from './Screens/Help'
import Transactions from './Screens/Transactions'
import Gaurds from './Screens/Gaurds'
import Accounts from './Screens/Accounts'
import Parkings from './Screens/Parkings'
import Profile from './Screens/Profile'
import ParkingDetail from './Screens/ParkingDetail'
import GaurdDetail from './Screens/GaurdDetail'
import GLayout from './Layout/GLayout'
import GLandingScreen from './Screens/GaurdScreens/GLandingScreen'
import BookingsG from './Screens/GaurdScreens/BookingScreens'
function App() {


  return (
      <>
       <Router>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Layout><Profile /></Layout>} />
        <Route path="/parkings" element={<Layout><Parkings /></Layout>} />
        <Route path="/accounts" element={<Layout><Accounts /></Layout>} />
        <Route path="/gaurds" element={<Layout><Gaurds /></Layout>} />
        <Route path="/transactions" element={<Layout><Transactions /></Layout>} />
        <Route path="/help" element={<Layout><Help /></Layout>} />
        <Route path="/parkingid" element={<Layout><ParkingDetail /></Layout>} />
        <Route path="/gaurdid" element={<Layout><GaurdDetail /></Layout>} />



        <Route path="/GaurdHome" element={<GLayout>< Profile /></GLayout>} />
        <Route path="/guardbookings" element={<GLayout>< BookingsG /></GLayout>} />










      </Routes>
    </Router>
      </>
  )
}

export default App
