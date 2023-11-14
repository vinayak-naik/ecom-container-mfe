
import { useState } from 'react'
import './App.css'
// import { AccountBalance } from '@mui/icons-material'
import LayoutMfe from 'layoutMfe/App'
// import AuthMfe from 'authMfe/App'

function App() {
  const [name, setName] = useState("initial")

  return (
    <div style={{background:"lightgrey"}}><div>Container Micro Frontend</div>
     <LayoutMfe update={(e)=>setName(e)}/>
    
     <div>message:{name}</div>
    </div>
  )
}

export default App
