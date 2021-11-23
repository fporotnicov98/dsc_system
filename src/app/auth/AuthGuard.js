import React, {
    useEffect,
    useState,
} from 'react'
import { Redirect, useLocation } from 'react-router-dom'

const AuthGuard = (props) => {
    const {
        isAuthenticated
    } = props

    const [previouseRoute, setPreviousRoute] = useState(null)
    const { pathname } = useLocation()

    let authenticated = isAuthenticated

    useEffect(() => {
        if (previouseRoute !== null) setPreviousRoute(pathname)
    }, [pathname, previouseRoute])

    if (authenticated) return <>{props.children}</>
    else {
        return (
            <Redirect
                to={{
                    pathname: '/session/signin',
                    state: { redirectUrl: previouseRoute },
                }}
            />
        )
    }
}

export default AuthGuard
