import { useState } from 'react'
import './App.css'
import { Button } from "antd";

const onClick = (e: React.MouseEvent) => { 
  alert("ops " + e); 
}

function App() {
  return (
    <>
        <Button color="primary" variant="dashed" onClick={onClick}>click</Button>
    </>
  )
}

export default App
