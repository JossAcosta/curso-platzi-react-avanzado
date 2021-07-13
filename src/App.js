import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import Logo from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Home } from './pages/Home';

import { BrowserRouter, Route, Switch} from 'react-router-dom'


export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)

  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId 
        ? <PhotoCardWithQuery id={detailId}/>
        : (<BrowserRouter>
              <Switch>
              <Route exact path='/' render={(props) => <Home {...props} />} />
      <Route exact path='/pet/:id' render={(props) => <Home {...props} />} />
              </Switch>
            </BrowserRouter>
          )
      }
      
    </div>
    )
}