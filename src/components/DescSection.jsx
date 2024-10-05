import React from 'react'
import { shorten,count } from '../helperFunctions/HelperFunctions'

function DescSection(props) {

    const months = {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec"
    };

    React.useEffect(()=>{
        console.log("rendered")
        if(props.desc.length>155) 
        {  
            setDesc(props.desc.slice(0,155)+ "...more") 
            setExpanded(false)
            return
        }
       
        setExpanded(true)
        setDesc(props.desc) 
      
    
    },[props.desc])
    let [desc ,setDesc ] =React.useState("")
    let [expanded,setExpanded] =React.useState(false)
    
    function handleDescClick(){
        setExpanded(true)
        setDesc(props.desc)
    }

    function handleCompress(){
        setExpanded(false)
        if(props.desc.length>155) setDesc(props.desc.slice(0,155)+ "...more")

            
    }
    
    // function count(views) {

         
    //     if (views < 1000) return views
    //     if (views < 1000000) return ( Math.round(views/1000)/10)*10 + "k "

        
    //     if (views >= 1000000) return  (Math.round(views/1000000)/10)*10 + "m "

    // }


  return (
    <div className='bg-[#272727] rounded-lg'>
 <div className='hover:cursor-pointer mt-6 p-3 rounded-lg space-y-2' onClick={handleDescClick}>
     
     <div className='flex space-x-5'>
          <h1>{count(props.views)} views</h1>
          <h1>{props.date}</h1>
          <h1>
              {props.pureDate.split("-")[0]+" "+ months[parseInt(props.pureDate.split("-")[1])] +" "+ props.pureDate.split("-")[2].split("T")[0]}
          </h1>
     </div>

      <h1 className='duration-400'>{desc}

      </h1>
              
   
    
  </div>

          <h2 className={`hover:cursor-pointer ${expanded? "block": "hidden"} p-3` } onClick={handleCompress}>
            show less
        </h2>
    </div>
   
  )
}

export default DescSection
