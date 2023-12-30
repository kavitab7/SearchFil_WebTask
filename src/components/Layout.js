import React, { Children } from 'react'
import Header from './Header'

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ minHeight: "88vh" }} >{children} </main>
        </>
    )
}
