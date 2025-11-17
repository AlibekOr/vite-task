import {Suspense} from "react";
import {Outlet} from 'react-router'

export default function Layout() {
    return (
        <Suspense fallback={'loading...'}>
            <Outlet/>
        </Suspense>
    )
}
