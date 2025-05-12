import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import url from '../utils/urls'

export default function GalleryPage() {
  const [images, setImages] = useState(null)
  useEffect(() => {
    async function loadData(params) {
     try {
       let res = await axios.get(url+ '/events?event_type_id=1')
       if(res && res.data){
         let formatedArray = []
         Object.entries(res.data).forEach(el=>{
           el[1].forEach(elm=>{
             let obj = {}
             obj.image = elm.file
             formatedArray.push(obj)
           })
         })
 
         setImages(formatedArray)
       }
     } catch (error) {
       
     }
 
    }
    loadData()
   }, [])
  return (
    <div>
        <Header title={'Gallery'} noMargin />
        <div className='imageGrid'>
        {images?.map(el=>(
          <img className="img-fluid w-100" src={el.image} alt="" />
          ))}
        </div>
    </div>
  )
}
