import {useState} from "react"

const LogiqueBanner = () => {
    const [displayBanner, setDisplayBanner] = useState(false);
    function toggleBanner(){
        setDisplayBanner(!displayBanner)
    }

    return {
        displayBanner,
        toggleBanner
    }
}
    
export default LogiqueBanner