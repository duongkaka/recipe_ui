import React from 'react';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function SliderCategories() {
    const slides = [
        'https://th.bing.com/th/id/R.c38923f3cda0e13fd9c462159a286e62?rik=xiO9lPayQobqcA&riu=http%3a%2f%2fchuyendeanngon.weebly.com%2fuploads%2f1%2f1%2f5%2f2%2f115247541%2fthuc-pham-giau-dam_orig.jpg&ehk=CP%2fcSwAsVCR927EQSCzr9xvioGXGysp1i1FJnD%2fp6y4%3d&risl=&pid=ImgRaw&r=0',
        'https://tse3.mm.bing.net/th/id/OIP.bxMlj6n26QogL46k_RbeQQHaE7?cb=iwp1&rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP.rImqbP6K25Ca0WtNqYEotQHaFj?w=236&h=180&c=7&r=0&o=7&cb=iwp1&pid=1.7&rm=3',
        'https://tse3.mm.bing.net/th/id/OIP.aN78Nu9rcG9BkFV2WI-atwHaLH?cb=iwp1&rs=1&pid=ImgDetMain',
        'https://tse3.mm.bing.net/th/id/OIP.6mRsdLcd_A5U_Kd8U6KcSgHaHa?cb=iwp1&rs=1&pid=ImgDetMain',
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <div className={cx('image-slider-container')}>
            <Slider {...settings}>
                {slides &&
                    slides.map((URL, index) => {
                        return (
                            <Image className={cx('image-slider-item')} alt={`slide-${index}`} key={index} src={URL} />
                        );
                    })}
            </Slider>
        </div>
    );
}

export default SliderCategories;
