import classNames from 'classnames/bind';
import styles from './MyPosts.module.scss';
import RecipeCard from '~/pages/Home/RecipeCard';
import { Pagination } from '@mui/material';
import img1 from '~/assets/images/img1.jpg';
import img7 from '~/assets/images/img7.jpg';
import img8 from '~/assets/images/img8.jpg';
import img9 from '~/assets/images/img9.jpg';
import img10 from '~/assets/images/img10.jpg';
import img6 from '~/assets/images/img6.jpg';
import MyProfileSidebar from '~/components/MyProfileSidebar';
import Title from '~/layout/components/Title';
const cx = classNames.bind(styles);
function MyPosts() {
    return (
        <div className={cx('wrapper')}>
            <MyProfileSidebar />
            <div className={cx('user-posts')}>
                <Title title="投稿したレシピ" />

                <div className={cx('posts-list')}>
                    <RecipeCard img={img6} />
                    <RecipeCard img={img7} />
                    <RecipeCard img={img8} />
                    <RecipeCard img={img9} />
                    <RecipeCard img={img10} />
                    <RecipeCard img={img1} />
                </div>
                <Pagination
                    className={cx('pagination-container')}
                    count={10}
                    page={1}
                    //      onChange={handlePageChange} // C?p nh?t trang khi thay ??i
                    color="primary"
                    variant="outlined"
                    shape="rounded"
                />
            </div>
        </div>
    );
}

export default MyPosts;
