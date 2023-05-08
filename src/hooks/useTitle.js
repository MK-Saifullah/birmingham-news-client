import { useEffect } from "react"

const useTitle = title => {
    useEffect( () => {
        document.title = `${title} - Birmingham News`;
    }, [title])
}

export default useTitle;