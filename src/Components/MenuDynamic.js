import React, { useState, useEffect } from 'react';
import menu_json from "../DummyData/menu_data.json";
import UseDisplayMenu from '../Hooks/UseDisplayMenu';

export default function MenuPage() {
  const [menuData, setMenuData] = useState(null);
  const [headers, setHeaders] = useState(null)
  useEffect(() => {
    setMenuData(menu_json);
    setHeaders(Object.keys(menu_json))
  
  }, [])

  const typeHandler = (check) => {
    return Array.isArray(check) ? "array": "object"
  }

  const generateOptions = (option) => {
    if(typeHandler(option) === 'object') {
      let keys = Object.keys(option)
      // console.log(keys)
      let render = keys.map(key => {
        console.log(option[key])
        return (
          <>
            <h6>{key}</h6>
            <p>{Object.keys(option[key])}</p>
            <p>{Object.values(option[key])}</p>
          </>
        )
      })
      
      return (
        <>
          {render}
        </>
      )
    } else {
      let render = option.forEach(key => {
        return (
          <>
            <p>{key}</p>
          </>
        )
      })
      return render

    }
  }

  const generateHeaders = (menuData, headers) => {
    return headers.map(header => {
    
      const options = menuData[header]
    
      return (
        <>
        {/* {console.log(options)} */}
          <h3>{header}</h3>
          {generateOptions(options)}
        </>

      )
    })
  }
  
  
  return (

    <section>
      <h1>Menu</h1>
      <section>
        {/* {menuData ? UseDisplayMenu(menuData): "loading"} */}
      {menuData ? generateHeaders(menuData, headers): "loading"}
      </section>
    </section>
  )
}