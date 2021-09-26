import { useEffect, useState } from "react"
import Axios from "axios"

export const HomeView = () => {
    const [data, setData] = useState()

    const fetchDataFromExternalApi = () => {
        Axios.get("https://thecocktaildb.com/api/json/v1/1/random.php")
        .then((response) => setData(response.data))
        .catch((error) => console.log(error))
    }

    const displayData = () => {
        if(data) {
            return <div>              
                <h3> Name: {data.drinks[0].strDrink}</h3>
                
            </div>
        }
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
    // const [count, setcount] = useState(0)

//     useEffect(() => {
//         alert("component is being rendered")
//         return () => {
//             alert("component b removed")
//         }
//     }, [count])
//     return(
//         <div>
//             <h1> {count}</h1>
//             <button onClick={() => setcount(count + 1)}> plussa 1</button>
//         </div>
//     )
// }