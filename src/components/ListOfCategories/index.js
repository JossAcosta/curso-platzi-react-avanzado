import React, {Fragment,useState, useEffect} from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'
// import { categories as mockCategories } from '../../../api/db.json';

function useCategoriesData(){
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function (){
    setLoading(true)
    window.fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading }= useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);


  useEffect(function(){
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed != newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
    return ()=> document.addEventListener('scroll', onScroll)
  }, [showFixed])

  
  const renderList = (fixed) => {
    return (
      <List fixed={fixed}>
        
        {
          loading ? <Item key= 'loading'><Category /></Item> 
          : categories.map(category => <Item key={category.id}><Category {... category}/></Item>)
        }
      </List>
    )
}

  // if(loading){
  //   return 'Cargando...'
  // }
  return (
      <div>
        {renderList()}
        {showFixed && renderList(true)}
    </div>
    )
}