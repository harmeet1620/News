import { useState } from 'react'
import "./App.css"
import Search from './Component/Main/Search'
import Pagination from './Component/Main/Pagination'
import Newsmain from './Component/Main/Newsmain'

function App() {
 
  return (
    <>
     <Search/>
     <Pagination/>
     <Newsmain/>
    </>
  )
}

export default App
