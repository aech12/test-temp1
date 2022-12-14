import React from 'react'
import Link from "next/link"
import { useState } from 'react'
import useClickOutside from '../../util/outsideClick';

function Header() {
    const [openClass, setOpenClass] = useState(false);
    const [show, setShow] = useState(false);

    const handleOpen = () => setOpenClass(!openClass)
    const handleShow = () => setShow(!show)

    let domNode = useClickOutside(() => {
        setOpenClass(false);
    });
    return (
        <>
            <div class="header dashboard @@headerClass">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <nav class="navbar navbar-expand-lg navbar-light">
                                <Link href="/"><a class="navbar-brand"><img src="./images/logo.png" alt="" /></a></Link>
                                <button class="navbar-toggler" type="button" onClick={handleShow}>
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class={show ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarSupportedContent">
                                    <ul class="navbar-nav menu">
                                        <li class="nav-item">
                                            <Link href="/shop"><a class="nav-link">Shop</a></Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link href="/affiliate"><a class="nav-link">Affiliates</a></Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link href="/leaderboard"><a class="nav-link">Leaderboards</a></Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link href="/support"><a class="nav-link">Support</a></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="dashboard_log my-2">
                                    <div class="d-flex align-items-center">
                                        <div class="account_money">
                                            <ul>
                                                <li class="crypto">
                                                    <span>2500</span>
                                                    <img src="./images/icon/gem.svg" alt="" />
                                                </li>
                                                <li class="usd">
                                                    <span>4000 USD</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="profile_log dropdown" ref={domNode}>
                                            <div class="user" onClick={handleOpen} >
                                                <span class="thumb"><i class="la la-user"></i></span>
                                                <span class="name">Thomas Christ</span>
                                                <span class="arrow"><i class="la la-angle-down"></i></span>
                                            </div>
                                            <div class={openClass ? "dropdown-menu show dropdown-menu-end" : "dropdown-menu dropdown-menu-end"} style={{ "right": "0", "left": "auto" }}>
                                                <Link href="/profile"><a class="dropdown-item">
                                                    <i class="la la-user"></i>
                                                    Profile
                                                </a></Link>
                                                <Link href="/history"><a class="dropdown-item">
                                                    <i class="la la-book"></i>
                                                    History
                                                </a></Link>
                                                <Link href="/settings"><a class="dropdown-item">
                                                    <i class="la la-cog"></i>
                                                    Settings
                                                </a></Link>
                                                <Link href="/"><a class="dropdown-item logout">
                                                    <i class="la la-sign-out"></i>
                                                    Logout
                                                </a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
