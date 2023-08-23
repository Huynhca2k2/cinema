import styles from './AddFilm.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function AddFilm() {
    return (
        <div className={cx('inner')}>
            <div className={cx('title')}>Thêm mới Phim</div>

            <div className={cx('row')}>
                <div className={cx('col-4')}>
                    <div className={cx('text')}>Form Size:</div>
                </div>
                <div className={cx('col-8')}>
                    <div className={cx('btn-size')}>Small</div>
                    <div className={cx('btn-size')}>Default</div>
                    <div className={cx('btn-size')}>Large</div>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('col-4')}>
                    <div className={cx('text')}>Tên phim:</div>
                </div>
                <div className={cx('col-8')}>
                    <input type="text" className={cx('name-film')}></input>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('col-4')}>
                    <div className={cx('text')}>Trailer:</div>
                </div>
                <div className={cx('col-8')}>
                    <input type="text" className={cx('name-film')}></input>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('col-4')}>
                    <div className={cx('text')}>Mô tả phhim:</div>
                </div>
                <div className={cx('col-8')}>
                    <input type="text" className={cx('name-film')}></input>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('col-4')}>
                    <div className={cx('text')}>Ngày khởi chiếu:</div>
                </div>
                <div className={cx('col-8')}>
                    <input type="date" className={cx('date-film')}></input>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('col-4')}>
                    <div className={cx('text')}>Đang chiếu:</div>
                </div>
                <div className={cx('col-8')}>
                    <input type="checkbox" className={cx('desc-film')}></input>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('col-4')}>
                    <div className={cx('text')}>Sắp chiêu:</div>
                </div>
                <div className={cx('col-8')}>
                    <input type="checkbox" className={cx('desc-film')}></input>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('col-4')}>
                    <div className={cx('text')}>HOT:</div>
                </div>
                <div className={cx('col-8')}>
                    <input type="checkbox" className={cx('desc-film')}></input>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('col-4')}>
                    <div className={cx('text')}>Số sao:</div>
                </div>
                <div className={cx('col-8')}>
                    <input type="text" className={cx('star-film')}></input>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('col-4')}>
                    <div className={cx('text')}>Hinh ảnh:</div>
                </div>
                <div className={cx('col-8')}>
                    <input type="file" className={cx('img-film')}></input>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('col-4')}>
                    <div className={cx('text')}>Cập nhật:</div>
                </div>
                <div className={cx('col-8')}>
                    <input type="submit" className={cx('btn-udate')} value={'Cập nhật'}></input>
                </div>
            </div>
        </div>
    );
}

export default AddFilm;
