import { useEffect, useState } from "react"

export const HomeView = () => {
    const [count, setcount] = useState(0)

    useEffect(() => {
        alert("component is being rendered")
        return () => {
            alert("component b removed")
        }
    }, [count])
    return(
        <div>
            <h1> {count}</h1>
            <button onClick={() => setcount(count + 1)}> plussa 1</button>
        </div>
    )
}