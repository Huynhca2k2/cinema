import styles from './Film.module.scss';
import classNames from 'classnames/bind';
import { Form, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Film() {
    return (
        <div className={cx('inner')}>
            <div className={cx('title')}>Quan ly Phim</div>
            <Link to={'/admin/addfilm'} className={cx('btn-add-film')}>
                Them Phim
            </Link>
            <div className={cx('search')}>
                <input type="text" placeholder="Input search text" className={cx('search-input')}></input>
                <div className={cx('btn-search')}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
            <table className={cx('films')}>
                <tr className={cx('title-films')}>
                    <td>Ma phim</td>
                    <td>Hinh anh</td>
                    <td>Ten phim</td>
                    <td>Mo ta</td>
                    <td>Hanh dong</td>
                </tr>
                <tr className={cx('text-films')}>
                    <td>1314</td>
                    <td>
                        <img
                            src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201-uu.jpg"
                            alt="cinema"
                            className={cx('film-img')}
                        ></img>
                    </td>
                    <td>My toan</td>
                    <td>Phim hay qua</td>
                    <td>
                        <div className={cx('action')}>
                            <div className={cx('btn-update')}>
                                <FontAwesomeIcon icon={faPen} />
                            </div>
                            <div className={cx('btn-delete')}>
                                <FontAwesomeIcon icon={faTrash} />
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className={cx('text-films')}>
                    <td>1314</td>
                    <td>
                        <img
                            src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201-uu.jpg"
                            alt="cinema"
                            className={cx('film-img')}
                        ></img>
                    </td>
                    <td>My toan</td>
                    <td>Phim hay qua</td>
                    <td>
                        <div className={cx('action')}>
                            <div className={cx('btn-update')}>
                                <FontAwesomeIcon icon={faPen} />
                            </div>
                            <div className={cx('btn-delete')}>
                                <FontAwesomeIcon icon={faTrash} />
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Film;
