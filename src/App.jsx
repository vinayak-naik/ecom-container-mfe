import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import LayoutMfe from 'layoutMfe/App'
import AuthMfe from 'authMfe/App'

function App() {

  return (
    <div><div>Container Micro Frontend</div>
    <LayoutMfe/>
    <AuthMfe/>
    </div>
  )
}

export default App
