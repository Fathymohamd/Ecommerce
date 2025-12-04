import React from 'react'

function ProductsImda({dataproduct}) {
  return (
      <div className="imgs-ietm">
            <div className="big-img">
              <img id='src' src={dataproduct.images[0]} alt={dataproduct.title} />
        
            </div>
         <div className="sum-img">
              {dataproduct.images.map((img, index) => (
                <img key={index} src={img} onClick={()=>document.getElementById("src").src  = img}/>
              ))}
            </div>
          </div>
  )
}

export default ProductsImda