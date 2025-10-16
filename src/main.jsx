import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import ThemeProvider from './component/themeHandler/ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App/>
  </ThemeProvider>
)
