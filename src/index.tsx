import React from 'react'
import {render} from 'react-dom'
import {App} from "./App";
import {Provider} from "react-redux";
import {store} from "./redux/store";


const renderApp = () =>
  render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp)
}

renderApp()
