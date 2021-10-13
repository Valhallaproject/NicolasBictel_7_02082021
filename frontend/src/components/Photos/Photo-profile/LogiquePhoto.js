import {useState} from "react"

const LogiquePhoto = () => {
    const [displayPhoto, setDisplayPhoto] = useState(false);
    function togglePhoto(){
        setDisplayPhoto(!displayPhoto)
    }

    return {
        displayPhoto,
        togglePhoto
    }
}
    
export default LogiquePhoto