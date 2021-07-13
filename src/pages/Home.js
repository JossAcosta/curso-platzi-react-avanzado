

import React, { Fragment } from 'react';
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'
export const Home = (props) => {
    const {
        match: {
          params: { id }
        }
      } = props
    return(
        <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId = {id}/>
        </Fragment>
    )
}