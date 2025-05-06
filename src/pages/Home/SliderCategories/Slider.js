// import React, { useState } from 'react';
// import styles from './Slider.module.scss';
// import classNames from 'classnames/bind';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/grid';
// import 'swiper/css/pagination';
// // import required modules
// import { Grid, Pagination } from 'swiper/modules';
// const cx = classNames.bind(styles);
// const images = [
//     'https://th.bing.com/th/id/R.ba71b3934b3cf7821a3fe03f870f21d9?rik=r2PO5ZD8nkvQ7g&riu=http%3a%2f%2fimg.mp.sohu.com%2fupload%2f20180801%2f03890ee7a6a546e6ad7718dfcbe76292_th.png&ehk=c%2bTz87ONj8FvyXKtQ0NTtnQSzSsowtnx3vIAs4x7VJA%3d&risl=&pid=ImgRaw&r=0',
//     'https://media.gettyimages.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?b=1&s=170667a&w=0&k=20&c=RKgGJW8aIINIPpisynZ2x6UWFiMZ0afmEN32gmbYvVI=',
//     'https://img-tsuyaplus.com/wp-content/uploads/2019/11/a97058359980c594cfe382be1f046512.png',
// ];

// function Slider() {
//     return (
//         <div className={cx('slider-container')}>
//             <Swiper
//                 slidesPerView={3}
//                 grid={{ rows: 2 }}
//                 spaceBetween={30}
//                 pagination={{ clickable: true }}
//                 modules={[Grid, Pagination]}
//                 className={cx('mySwiper')}
//             >
//                 {[...Array(9)].map((_, index) => (
//                     <SwiperSlide key={index}>Slide {index + 1}</SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );

//     // const [currentIndex, setCurrentIndex] = useState(0);
//     // const handlePrev = () => {
//     //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//     // };
//     // const handleNext = () => {
//     //     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//     // };
//     // return (
//     //     <div className={cx('slider')}>
//     //         <button className={cx('nav prev')} onClick={handlePrev}>
//     //             <FontAwesomeIcon className={cx('icon')} icon={faChevronLeft} />
//     //         </button>
//     //         <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className={cx('slide-image')} />
//     //         <button className={cx('nav next')} onClick={handleNext}>
//     //             <FontAwesomeIcon className={cx('icon')} icon={faChevronRight} />
//     //         </button>
//     //     </div>
//     // );
// }

// export default Slider;
