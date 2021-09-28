import { useEffect, useState } from "react"
import Axios from "axios"

export const HomeView = () => {
    const [data, setData] = useState()

    const fetchDataFromExternalApi = () => {
        Axios.get("https://thecocktaildb.com/api/json/v1/1/random.php")
        .then((response) => setData(response.data))
        .catch((error) => console.log(error))
    }

    // const displayData = () => {
    //     if(data) {
    //         return <div>              
    //             <h3> Name: {data.drinks[0].strDrink}</h3>
                
    //         </div>
    //     }
    // }

    const displayData = () => {
        if(data) {
            return (
                <div>              
                {data.map((data) =>{
                   <h6> {data}</h6>
                }    
                    
                </div>
                )}
          }

    return (
        <div>
            <h1>homeview</h1>
            <button onClick={() => fetchDataFromExternalApi()}>Make api call</button>

            {displayData()}
            <button onClick={() => console.log(data)}>Show State</button>
        </div>
    )
}
    