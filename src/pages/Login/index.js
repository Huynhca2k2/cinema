import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>ĐĂNG NHẬP</div>
                <form className={cx('form-user')}>
                    <input type="text" placeholder="Tài khoản" className={cx('account-user')}></input>
                    <input type="text" placeholder="Mật khẩu" className={cx('password-user')}></input>
                </form>
                <div className={cx('btn-submit')}>
                    <Link to={'/'} className={cx('btn-login')}>
                        Đăng nhập
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
