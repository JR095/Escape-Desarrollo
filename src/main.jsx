import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SearchDropdown } from './components/search/SearchDropdown.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      <BrowserRouter>
        <SearchDropdown/>
      </BrowserRouter>
  </>
)
