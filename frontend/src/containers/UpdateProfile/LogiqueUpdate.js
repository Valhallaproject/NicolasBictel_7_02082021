import {useState} from "react"

const LogiqueUpdate = () => {
    const [displayUpdate, setDisplayUpdate] = useState(false);
    function toggleUpdate(){
        setDisplayUpdate(!displayUpdate)
    }

    return {
        displayUpdate,
        toggleUpdate
    }
}
    
export default LogiqueUpdate