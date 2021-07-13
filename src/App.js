import React, {Fragment} from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { GlobalStyle } from './styles/GlobalStyles'
import Logo from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

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
        : <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId = {2}/>
        </Fragment>
      }
      
    </div>
    )
}