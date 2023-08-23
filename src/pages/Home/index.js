import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import Movie from '../../components/Movie';
import Cinema from '../../components/cinema';

import sliderImage1 from '../../assets/img/980wx448h-min_2.jpg';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <img src={sliderImage1} alt="banner1" className={cx('banner-area-img')}></img>
            <div className={cx('container')}>
                <div className={cx('nav-filter')}>
                    <div className={cx('title')}>Moi cap nhat</div>
                    <div className={cx('title')}>Sap ra mat</div>
                    <div className={cx('title')}>Top luot xem</div>
                </div>
                <div className={cx('row')}>
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                </div>
                <Cinema />
            </div>
        </div>
    );
}

export default Home;
