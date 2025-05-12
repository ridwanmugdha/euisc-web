import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Teachers from '../components/Teachers'
import url from '../utils/urls'

export default function ManagementPage() {

  const [teachers, setTeachers] = useState(null)

  const getNameDes = (title , type) =>{
    if(type === 'name'){
      if(title.includes('#')){
        let split = title.split('#')
        let name = split[0]
        return name
      }
    }else if(type === 'des'){
      if(title.includes('#')){
        let split = title.split('#')
        let des = split.length > 1 ? split[1] : null
        return des
      }
    }
}

  useEffect(() => {
   async function loadData(params) {
    try {
      let res = await axios.get(url+ '/events?event_type_id=3')
      if(res && res.data){
        let formatedArray = []
        Object.entries(res.data).forEach(el=>{
          el[1].forEach(elm=>{
            let obj = {}
            obj.name = getNameDes(elm.title , 'name')
            obj.designation = getNameDes(elm.title , 'des')
            obj.image = elm.file
            formatedArray.push(obj)
          })
        })

        setTeachers(formatedArray)
      }
    } catch (error) {
      
    }

   }
   loadData()
  }, [])
  
  return (
    <div>
        <Header title={'Management'} />
        {teachers && <Teachers teachers={teachers} title="Meet Our Management" />}
    </div>
  )
}
