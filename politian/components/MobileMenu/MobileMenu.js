import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Main Home',
                link: '/home'
            },
            {
                id: 12,
                title: 'Election Home',
                link: '/home2'
            },
            {
                id: 13,
                title: 'Male Candidate',
                link: '/home3'
            },
            {
                id: 14,
                title: 'Female Candidate',
                link: '/home4'
            },
        ]
    },

    {
        id: 2,
        title: 'About',
        link: '/about',
    },

    {
        id: 6,
        title: 'Campaign',
        link: '/campaign-2',
        submenu: [
            {
                id: 62,
                title: 'Campaigns',
                link: '/campaign-2'
            },
            {
                id: 64,
                title: 'Campaign Single',
                link: '/campaign-single/Support-for-Womans'
            },
        ]
    },
    {
        id: 3,
        title: 'Solutions',
        link: '/',
        submenu: [
            {
                id: 388,
                title: 'Solutions',
                link: '/service'
            },
            {
                id: 389,
                title: 'Solution Single',
                link: '/service-single/Economic-Establishment'
            },
            {
                id: 371,
                title: 'Shop',
                link: '#',
            },
            {
                id: 31,
                title: 'Gallery',
                link: '/gallery'
            },
            {
                id: 322,
                title: 'Testimonial',
                link: '/testimonial'
            },
            {
                id: 385,
                title: 'Team',
                link: '/team',
            },
            {
                id: 386,
                title: 'Team Single',
                link: '/team-single/Esther-Howard'
            },
            {
                id: 33,
                title: 'FAQ',
                link: '/faq'
            },
            {
                id: 39,
                title: 'Volunteer',
                link: '/volunteer'
            },
            {
                id: 34,
                title: '404 Error',
                link: '/404'
            },
            {
                id: 35,
                title: 'Login',
                link: '#'
            },
            {
                id: 36,
                title: 'Register',
                link: '#'
            },
        ]
    },

    {
        id: 5,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 52,
                title: 'Blogs',
                link: '/blog-left-sidebar'
            },
            {
                id: 55,
                title: 'Blog single',
                link: '/blog-single-left-sidebar/support-progressive-change'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    href={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        href={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;