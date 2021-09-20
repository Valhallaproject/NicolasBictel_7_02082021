import {useState} from "react"

const LogiqueDelete = () => {
    const [displayDelete, setDisplayDelete] = useState(false);
    function toggleDelete(){
        setDisplayDelete(!displayDelete)
    }

    return {
        displayDelete,
        toggleDelete
    }
}
    
export default LogiqueDelete