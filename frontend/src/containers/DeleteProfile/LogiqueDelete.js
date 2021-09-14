import {useState} from "react"

const LogiqueUpdate = () => {
    const [display, setDisplay] = useState(false);
    function toggle(){
        setDisplay(!display)
    }

    return {
        display,
        toggle
    }
}
    
export default LogiqueUpdate