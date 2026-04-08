import { useState ,useEffect} from "react"
import { RES_MENU_URL } from "./constants";


const useResMenu=(resId)=>{

    const [resInfo,setRestaurantInfo]=useState(null)

    useEffect(()=>{

     fetchData();

    },[])

    const fetchData=async()=>{

        const data= await fetch(RES_MENU_URL+resId)

        const json= await data.json()

        setRestaurantInfo(json.data?.cards[2].card.card.info)
    }


    return resInfo
}

export default useResMenu 