import styles from './AddFilm.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function AddFilm() {
    return (
        <div className={cx('inner')}>
            <div className={cx('title')}>Them moi Phim</div>
        </div>
    );
}

export default AddFilm;
