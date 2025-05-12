import React, { useState } from "react";

export default function Gallery() {
    const [images, setImages] = useState([
        {
            title: 'School start event',
            images: [
                
            ]
        }
    ])
  return (
    <div>
      <div className="container-fluid pt-5 pb-3">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">Our Gallery</span>
            </p>
            <h1 className="mb-4">Our Kids School Gallery</h1>
          </div>
          <div className="row portfolio-container">
            
            

          </div>
        </div>
      </div>
    </div>
  );
}
