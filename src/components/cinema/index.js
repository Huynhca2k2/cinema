import classNames from 'classnames/bind';
import styles from './Cinema.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Cinema() {
    return (
        <div className={cx('cinema')}>
            <div className={cx('col-1')}>
                <ul className={cx('cinema-list')}>
                    <li className={cx('cinema-item')}>
                        <img
                            src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201-uu.jpg"
                            alt="cinema"
                            className={cx('cinema-img')}
                        ></img>
                    </li>
                    <li className={cx('cinema-item')}>
                        <img
                            src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201-uu.jpg"
                            alt="cinema"
                            className={cx('cinema-img')}
                        ></img>
                    </li>
                    <li className={cx('cinema-item')}>
                        <img
                            src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201-uu.jpg"
                            alt="cinema"
                            className={cx('cinema-img')}
                        ></img>
                    </li>
                </ul>
            </div>
            <div className={cx('col-4')}>
                <ul className={cx('cinema-list')}>
                    <li className={cx('cinema-desc')}>
                        <img
                            src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201-uu.jpg"
                            alt="cinema"
                            className={cx('desc-img')}
                        ></img>
                        <div className={cx('content-box')}>
                            <span className={cx('content-title')}>BDH Star Cineplex - Bitexco</span>
                            <br />
                            <Link to={'/detail'} className={cx('content-desc')}>
                                Chi tiet
                            </Link>
                        </div>
                    </li>
                    <li className={cx('cinema-desc')}>
                        <img
                            src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201-uu.jpg"
                            alt="cinema"
                            className={cx('desc-img')}
                        ></img>
                        <div className={cx('content-box')}>
                            <span className={cx('content-title')}>BDH Star Cineplex - Bitexco</span>
                            <br />
                            <Link to={'/detail'} className={cx('content-desc')}>
                                Chi tiet
                            </Link>
                        </div>
                    </li>
                    <li className={cx('cinema-desc')}>
                        <img
                            src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201-uu.jpg"
                            alt="cinema"
                            className={cx('desc-img')}
                        ></img>
                        <div className={cx('content-box')}>
                            <span className={cx('content-title')}>BDH Star Cineplex - Bitexco</span>
                            <br />
                            <Link to={'/detail'} className={cx('content-desc')}>
                                Chi tiet
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={cx('col-7')}>
                <ul className={cx('booking-list')}>
                    <li className={cx('cinema-booking')}>
                        <img
                            src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201-uu.jpg"
                            alt="cinema"
                            className={cx('booking-img')}
                        ></img>
                        <div className={cx('content-box')}>
                            <span className={cx('movie-title')}>Black Window</span>
                            <span className={cx('movie-content')}>Lau 3 Bitexco Icon 68, 2 Hai Trieu, Quan 1</span>
                            <div className={cx('booking-time')}>
                                <Link to={'/booking'} className={cx('time-item')}>
                                    10:10 AM
                                </Link>
                                <div className={cx('time-item')}>10:10 AM</div>
                                <div className={cx('time-item')}>10:10 AM</div>
                                <div className={cx('time-item')}>10:10 AM</div>
                                <div className={cx('time-item')}>10:10 AM</div>
                                <div className={cx('time-item')}>10:10 AM</div>
                                <div className={cx('time-item')}>10:10 AM</div>
                                <div className={cx('time-item')}>10:10 AM</div>
                            </div>
                        </div>
                    </li>
                    <li className={cx('cinema-booking')}>
                        <img
                            src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201-uu.jpg"
                            alt="cinema"
                            className={cx('booking-img')}
                        ></img>
                        <div className={cx('content-box')}>
                            <span className={cx('movie-title')}>Black Window</span>
                            <span className={cx('movie-content')}>Lau 3 Bitexco Icon 68, 2 Hai Trieu, Quan 1</span>
                            <div className={cx('booking-time')}>
                                <Link to={'/booking'} className={cx('time-item')}>
                                    10:10 AM
                                </Link>
                                <div className={cx('time-item')}>10:10 AM</div>
                                <div className={cx('time-item')}>10:10 AM</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Cinema;
