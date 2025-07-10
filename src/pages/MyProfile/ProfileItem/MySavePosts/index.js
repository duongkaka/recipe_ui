import classNames from 'classnames/bind';
import styles from './MySavePosts.module.scss';
import RecipeCard from '~/pages/Home/RecipeCard';
import { Pagination } from '@mui/material';
import img1 from '~/assets/images/img1.jpg';
import img2 from '~/assets/images/img2.jpg';
import img3 from '~/assets/images/img3.jpg';
import img4 from '~/assets/images/img4.jpg';
import img5 from '~/assets/images/img5.jpg';
import img6 from '~/assets/images/img6.jpg';
const cx = classNames.bind(styles);
function MySavePosts() {
    return (
        <div className={cx('user-save-posts')}>
            <strong>保存されたレシピ</strong>
            <div className={cx('posts-list')}>
                <RecipeCard img={img5} />
                <RecipeCard img={img4} />
                <RecipeCard img={img3} />
                <RecipeCard img={img2} />
                <RecipeCard img={img1} />
                <RecipeCard img={img6} />
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
    );
}

export default MySavePosts;
