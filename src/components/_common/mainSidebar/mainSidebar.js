import { NavLink } from "react-router-dom"
import {FaUserAlt, FaAngleLeft, FaCircleNotch} from "react-icons/fa"
import { useEffect } from "react";

export default function MainSidebar() {
    useEffect(() => {
        document.querySelectorAll('.main-sidebar .nav-sidebar > .nav-item').forEach( (item) => {
            item.querySelector('.nav-link').addEventListener('click', function (e) {
                e.preventDefault();

                if (item.classList.contains('menu-is-opening') && item.classList.contains('menu-open')) {
                    item.classList.remove('menu-is-opening');
                    item.classList.remove('menu-open');
                } else {
                    item.classList.add('menu-is-opening');
                    item.classList.add('menu-open');
                }
            })
        });
    }, [])
    return(
        <>
            <div className="main-sidebar sidebar-dark-primary">
                <a href="http://localhost:3000/" className="brand-link">
                    <img src="/images/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image image-circle elevation-3"/>
                    <span className="brand-text fw-light">Base Admin</span>
                </a>
                <div className="sidebar">
                    <div className="sidebar-content">
                        <div className="user-panel mt-3 pb-3 d-flex">
                            <div className="image">
                                <img src="/images/avatar.png" className="img-circle elevation-2" alt="User"/>
                            </div>
                            <div className="info">
                                <NavLink
                                    to={'profile'}
                                    className={"nav-link"}
                                    end
                                >
                                    User Name
                                </NavLink>
                            </div>
                        </div>

                        <nav className="mt-2 sidebar-menu">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accorion="false">
                                <li className="nav-item menu-open menu-is-opening">
                                    <a href="http://localhost:3000/" className="nav-link active">
                                        <FaUserAlt className="nav-icon"/>
                                        <p>
                                            Quản lý Users
                                            <FaAngleLeft className="right"/>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <NavLink
                                                to={'users'}
                                                className={"nav-link"}
                                                end
                                            >   
                                                <FaCircleNotch className="nav-icon"/>
                                                <p>
                                                    Danh sách Users
                                                </p>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                to={'users/create'}
                                                className={"nav-link"}
                                                end
                                            >  
                                                <FaCircleNotch className="nav-icon"/>
                                                <p>
                                                    Thêm mới Users
                                                </p>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item menu-open menu-is-opening">
                                    <a href="http://localhost:3000/" className="nav-link active">
                                        <FaUserAlt className="nav-icon"/>
                                        <p>
                                            Quản lý Post
                                            <FaAngleLeft className="right"/>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <NavLink
                                                to={'posts'}
                                                className={"nav-link"}
                                                end
                                            >   
                                                <FaCircleNotch className="nav-icon"/>
                                                <p>
                                                    Danh sách Post
                                                </p>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                to={'posts/media'}
                                                className={"nav-link"}
                                                end
                                            >  
                                                <FaCircleNotch className="nav-icon"/>
                                                <p>
                                                    Media
                                                </p>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                to={'posts/comments'}
                                                className={"nav-link"}
                                                end
                                            >  
                                                <FaCircleNotch className="nav-icon"/>
                                                <p>
                                                    Comments
                                                </p>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}