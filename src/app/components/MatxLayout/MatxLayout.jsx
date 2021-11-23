import React from 'react'
import { MatxSuspense } from '../index'
import Layout from './Layout1/Layout1'
import { inject } from 'mobx-react'

@inject(({AuthStore}) => {
    return {
        userData: AuthStore.userData,
        logout: AuthStore.logout
    }
})

class MatxLayout extends React.Component {
    render() {
        return (
            <MatxSuspense>
                <Layout {...this.props} />
            </MatxSuspense>
        )
    }

}

export default MatxLayout
