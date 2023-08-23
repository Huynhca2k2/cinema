import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('container')}>
                <div>
                    <img
                        className={cx('logo')}
                        src="https://logo.com/image-cdn/images/kts928pd/production/4010957932bc920adbe0f0bfa5a4beeb58844766-500x375.webp?w=640&q=72"
                        alt="logo-cinema"
                    ></img>
                    <div className={cx('content')}>197 Hoc Vien Cong Nghe va Buu Chinh Vien Thong</div>
                    <div className={cx('content')}>Quan 9, Thanh Pho Ho Chi Minh, Viet Nam</div>
                    <div className={cx('content')}>Call us: (+84) 39 888 4505</div>
                </div>
                <ul className={cx('footer-text')}>
                    <span className={cx('title')}>Chinh Sach</span>
                    <li className={cx('content')}>Team of Use</li>
                    <li className={cx('content')}>Privacy Policy</li>
                    <li className={cx('content')}>Security</li>
                </ul>
                <ul className={cx('footer-text')}>
                    <span className={cx('title')}>Tai Khoan</span>
                    <li className={cx('content')}>My Account</li>
                    <li className={cx('content')}>WhatchList</li>
                    <li className={cx('content')}>Collections</li>
                    <li className={cx('content')}>User Guide</li>
                </ul>
            </div>
            <div className={cx('footer-final')}>
                <div className={cx('footer-box')}>
                    <div className={cx('content')}>Nguyen Phu Tuan</div>
                    <div className={cx('content')}>Back to Top</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
