import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('sidebar-item')}>
            <img
                src="https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/7/0/700x1000-oppen.jpg"
                alt="movie1"
                className={cx('sidebar-img')}
            ></img>
        </div>
    );
}

export default Sidebar;
