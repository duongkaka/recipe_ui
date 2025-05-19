import React from 'react';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import Slider from 'react-slick';

import images from '~/assets/images';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function SliderCategories() {
    const slides = [
        images.img1,
        images.img2,
        images.img3,
        images.img4,
        images.img5,
        images.img6,
        images.img7,
        images.img8,
        images.img9,
        images.img10,
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className={cx('wrapper')}>
            <Slider {...settings}>
                {slides.map((src, index) => (
                    <div key={index}>
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className={cx('img')}
                            // style={{
                            //     width: '100%',
                            //     height: '160px',
                            //     objectFit: 'cover',
                            //     borderRadius: '8px',
                            // }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SliderCategories;
