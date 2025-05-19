import SliderCategories from './SliderCategories';
import RecipeCard from './RecipeCard';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import img1 from '~/assets/images/img1.jpg';
import img2 from '~/assets/images/img2.jpg';
import img3 from '~/assets/images/img3.jpg';
import img4 from '~/assets/images/img4.jpg';
import img5 from '~/assets/images/img5.jpg';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <SliderCategories />
            <div className={cx('posts')}>
                <RecipeCard img={img1} />
                <RecipeCard img={img2} />
                <RecipeCard img={img3} />
                <RecipeCard img={img4} />
                <RecipeCard img={img5} />
            </div>
        </div>
    );
}

export default Home;
