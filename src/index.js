import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from './context/GlobalContext'
// import "./index.css"

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,

  document.getElementById('root'),
)
