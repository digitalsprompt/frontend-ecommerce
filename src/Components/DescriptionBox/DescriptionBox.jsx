import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod adipisci eligendi velit porro quas rem dolores vitae sed rerum exercitationem. Magni, nostrum? Veniam mollitia voluptate soluta at, fuga magnam quisquam inventore. Aspernatur corrupti pariatur assumenda, veritatis id exercitationem repellendus sapiente tempore, corporis accusamus velit error. Distinctio modi quam soluta inventore.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sint eos inventore quas voluptates quod, sequi fugit voluptatum deleniti porro quasi ducimus esse labore dolorem, natus itaque totam culpa magnam.</p>
        </div>
    </div>
  )
}

export default DescriptionBox