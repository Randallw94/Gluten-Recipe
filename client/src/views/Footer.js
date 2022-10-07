import React from 'react'

const Footer = () => {
    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDay()}/${current.getFullYear()}`;
  return (
    <div>
        <h3 style={{color:"white", margin:0}} >&copy; {date} Gluten Recipes</h3>
    </div>
  )
}

export default Footer