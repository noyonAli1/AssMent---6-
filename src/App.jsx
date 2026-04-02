
import { useState } from 'react'
import './App.css'

import Cartsection from './assets/Component/cartsection/Cartsection'
import Models from './assets/Component/models/Models'

import Tabs from './assets/Component/tabs/Tabs'
import NavBer from './assets/Component/naber/NavBer'
import Ratting from './assets/Component/ratting/Ratting'
import PreDigital from './assets/Component/prem/PreDigital'
import GetStart from './assets/Component/getStart/GetStart'
import SimplePriceSection from './assets/Component/simpleSection/SimplePriceSection'
import WorkFlow from './assets/Component/workfolw/WorkFlow'
import Footer from './assets/Component/footer/Footer'
import Banner from './assets/Component/banner/Banner'



const getModels = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

const modelPromise = getModels()



function App() {
const [activeTab, setActiveTab] = useState("Products");
const [cart, setCart] = useState([]);


  return (
    <>
    <NavBer cart= {cart} ></NavBer>
    <Banner></Banner>
   
   <Ratting></Ratting>
   <PreDigital></PreDigital>
    <Tabs activeTab={activeTab} setActiveTab={setActiveTab} cart={cart}></Tabs>
    {activeTab === "Products" && <Models cart={cart} setCart={setCart} modelPromise ={modelPromise}></Models>}
    {activeTab === "Cart" && <Cartsection cart={cart} setCart={setCart}  ></Cartsection>}
    
     
    <GetStart></GetStart>
    <SimplePriceSection></SimplePriceSection>
   <WorkFlow></WorkFlow>
   <Footer></Footer>

    



    



    
    


    

    

      

      

      
    </>
  )
}

export default App
