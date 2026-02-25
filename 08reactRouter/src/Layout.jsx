import React from "react";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/footer";

function Layout() {
    return (
        <>
            <Header />
            {/* The Outlet component acts as a placeholder. 
                It dynamically renders the child component (like Home, About, User) 
                that matches the current route, while keeping the Header and Footer consistent. */}
            <Outlet />
            <Footer />
        </>

    )
}

export default Layout