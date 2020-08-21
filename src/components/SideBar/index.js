import React from 'react';
import "./sidebar.scss"

const SideBar = () => {
const  links = [
    {
        label: 'Dashboard',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>,
    },
    {
        label: 'Chat',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>,
        count: '5',
    },
    {
        label: 'Mail',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
        subLinks: [
            {
                label: 'one',
                path: '/one'
            },
            {
                label: 'tow',
                path: '/tow'
            },
            {
                label: 'three',
                path: '/three'
            }
        ]
    }
]
    return (
    <aside className="sidebar">
        <img src="/img/logo.png" alt="logo"/>
        <ul className="sidebar__links">
            {
                links.map((link, index) => {
                    return link.subLinks ? (<Dropdwon link={link} />) : (<li key={index}>
                            <a href="">
                                {link.icon}
                                {link.label}
                                {link.count ? link.count : null }
                            </a>
                        </li>)
                    
                })
            }
        </ul>
    </aside>
    )
}



export default SideBar

const Dropdwon = ({link}) => {
    return  (<li>
        <a>{link.icon}{link.label}</a>
        <ul className="list-unstyled">
            {link.subLinks.map((sisi, index) => {
                return (<li kye={index}><a href="">{sisi.label}</a></li>)
            })}
        </ul>
    </li>)
}