import { HiBars3 } from 'react-icons/hi2';
import {FaRegCommentDots, FaRegStar, FaExpandArrowsAlt} from 'react-icons/fa';

export default function Navigation() {

    return (
        <>
            <nav className="main-header navbar navbar-expand-lg navbar-light bg-white">
                <div class="container-fluid p-0">
                    <ul className="navbar-nav mb-2 mb-lg-0 mx-3">
                        <li className="nav-item">
                            <a href="http://localhost:3000/" className="nav-link"><HiBars3/></a>
                        </li>
                    </ul>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li>
                                <a className='nav-link' aria-current='page' href='src/components/_common#'>Home</a>
                            </li>
                            <li>
                                <a className='nav-link' aria-current='page' href='src/components/_common#'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <ul className='navbar-nav mb-2 mb-lg-0'>
                        <li className='nav-item mx-3 dropdown'>
                            <a
                                className='nav-link'
                                href='#'
                                data-toggle = {"dropdown"}
                                aria-expanded = {"false"}
                            >
                                <FaRegCommentDots/>
                                <span className='badge bg-danger navbar-badge'>3</span>
                            </a>
                            <div
                                className='dropdown-menu dropdown-menu-lg dropdown-menu-right'
                                style={
                                    {
                                        left: 'inherit',
                                        right: '0px'
                                    }
                                }
                            >
                                <span className='dropdown-item dropdown-header'>15 Notification</span>
                                <div className='dropdown-divider'></div>
                                <a href='#' className='dropdown-item'>
                                    <div className='media'>
                                        <img
                                            src='/images/user1-128x128.jpg'
                                            alt='User Avatar'
                                            className='img-size-50 me-3 img-circle'
                                        />
                                            <div className='media-body'>
                                                <h3 className='dropdown-item-title'>
                                                    Admin Name
                                                    <span className='float-right text-sm text-danger'>
                                                        <FaRegStar/>
                                                    </span>
                                                </h3>
                                                <p className='text-sm'>Call me whenever you can...</p>
                                                <p className='text-sm text-muted'>
                                                    <i className='far fa-clock mr-1'></i> 4 Hours Ago
                                                </p>
                                            </div>
                                    </div>
                                </a>
                                <div className='dropdown-divider'></div>
                                <a href='#' className='dropdown-item dropdown-footer'>See All Notification</a>
                            </div>
                        </li>
                        <li className='nav-item mx-3'>
                            <a className='nav-link' href='#'>
                                <FaExpandArrowsAlt/>
                            </a>
                        </li>
                        <li className='nav-item max-3'>
                            <a className='nav-link active text-primary' href='#'>
                                Đăng xuất
                            </a>
                        </li>    
                    </ul>
                </div>
            </nav>
        </>
    )
}