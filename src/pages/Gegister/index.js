import styles from './Gegister.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Gegister() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>ĐĂNG KÝ</div>
                <form className={cx('form-user')}>
                    <input type="text" placeholder="Tài khoản" className={cx('account-user')}></input>
                    <input type="text" placeholder="Mật khẩu" className={cx('password-user')}></input>
                    <input type="text" placeholder="Nhập lại mật khẩu" className={cx('password2-user')}></input>
                    <input type="text" placeholder="Họ và tên" className={cx('name-user')}></input>
                    <input type="text" placeholder="Email" className={cx('email-user')}></input>
                    <input type="text" placeholder="Số điện thoại" className={cx('phone-user')}></input>
                </form>
                <div className={cx('btn-submit')}>
                    <input type="submit" className={cx('btn-gegister')} value={'Đăng ký'}></input>
                    <Link to={'/login'} className={cx('btn-gegister')}>
                        Đăng nhập
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Gegister;
