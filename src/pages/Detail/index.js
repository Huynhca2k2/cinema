import Sidebar from '../../components/Sidebar';
import Cinema from '../../components/cinema';
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Detail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('col-4')}>
                    <Sidebar />
                </div>
                <div className={cx('col-8')}>
                    <div className={cx('title')}>JOKER</div>
                    <h3 className={cx('text')}>
                        Nút đăng ký và đăng nhập mở ra popup form đăng ký đăng nhập hoặc thiết kế trang đăng ký đăng
                        nhập. Và link đến trang đó. + Nếu dùng link sẽ link đến /dangky
                    </h3>
                    <div className={cx('content-box')}>
                        <span className={cx('content-rate')}>9.5/10</span>
                        <span className={cx('content-rate')}>Rate this Movie : </span>
                    </div>
                    <div className={cx('nav-filter')}>
                        <div className={cx('title-sup')}>Moi cap nhat</div>
                        <div className={cx('title-sup')}>Sap ra mat</div>
                        <div className={cx('title-sup')}>Top luot xem</div>
                    </div>
                    <Cinema />
                </div>
            </div>
        </div>
    );
}

export default Detail;
