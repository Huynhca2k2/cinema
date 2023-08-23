import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

//neu user da dang nhap thi gan currentUser bang true
let currentUser = true;

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <Link to={'/'}>
                    <img
                        className={cx('logo')}
                        src="https://logo.com/image-cdn/images/kts928pd/production/4010957932bc920adbe0f0bfa5a4beeb58844766-500x375.webp?w=640&q=72"
                        alt="logo-cinema"
                    ></img>
                </Link>
                <div>
                    <ul className={cx('navbar-list')}>
                        <li className={cx('navbar-item')}>HOME</li>
                        <li className={cx('navbar-item')}>SHOWING MOVIES</li>
                        <li className={cx('navbar-item')}>COMMING MOVIE</li>
                        {currentUser ? (
                            <div className={cx('navbar-item', 'user')}>
                                <img
                                    className={cx('user-avatar')}
                                    src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                                    alt="avatar user"
                                ></img>
                                <div className={cx('user-name')}>Phu Tuan</div>
                            </div>
                        ) : (
                            <>
                                <li className={cx('navbar-item')}>SIGN IN</li>
                                <li className={cx('navbar-item')}>SIGN UP</li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
