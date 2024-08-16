import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'> 
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Descripción</div>
        <div className="descriptionbox-nav-box fade">Reseñas (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Libero quae similique nemo reiciendis deleniti, omnis aliquid 
        ratione iure non obcaecati accusantium voluptates dolorum excepturi, 
        atque, ea assumenda. Cum, dolorum et.</p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Facere enim officiis molestias error quisquam. Dolorum, ullam 
        in perspiciatis accusamus eaque atque nemo aspernatur corporis 
        fuga ut maiores, repellat illum qui?
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
