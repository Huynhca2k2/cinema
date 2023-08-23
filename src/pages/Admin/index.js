import styles from './Admin.module.scss';
import classNames from 'classnames/bind';
import Film from '../Film/film';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard, faTv, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Admin({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col-2')}>
                        <div className={cx('sidebar')}>
                            <Link to={'/'}>
                                <img
                                    className={cx('logo')}
                                    src="https://logo.com/image-cdn/images/kts928pd/production/4010957932bc920adbe0f0bfa5a4beeb58844766-500x375.webp?w=640&q=72"
                                    alt="logo-cinema"
                                ></img>
                            </Link>
                            <div className={cx('sidebar-item')}>
                                <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                                User
                            </div>
                            <Link to={'/admin/film'} className={cx('sidebar-item')}>
                                <FontAwesomeIcon icon={faClapperboard} className={cx('icon')} />
                                Films
                            </Link>
                            <div className={cx('sidebar-item')}>
                                <FontAwesomeIcon icon={faTv} className={cx('icon')} />
                                Showtimes
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-10')}>
                        <div className={cx('navbar')}>
                            <div className={cx('navbar-item', 'user')}>
                                <img
                                    className={cx('user-avatar')}
                                    src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                                    alt="avatar user"
                                ></img>
                                <div className={cx('user-name')}>Dang xuat</div>
                            </div>
                        </div>
                        <div className={cx('content')}>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
