
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import "./Style/index.css"
import Cartcontext from './Ecommerce/CreateConxte'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter basename='/'>
     <Cartcontext >
        <App/>
      </Cartcontext>
    </BrowserRouter>

  </StrictMode>,
)

