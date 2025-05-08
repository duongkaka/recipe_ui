import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './RecipeCard.module.scss';
import img1 from '~/assets/images/img1.jpg';

import { motion } from 'framer-motion';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const cx = classNames.bind(styles);
function RecipeCard({ title, description, image }) {
    const MotionCard = motion(Card);
    return (
        <Card className={cx('card')}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        D
                    </Avatar>
                }
                action={
                    <Button primary small>
                        Follow
                    </Button>
                }
                title={
                    <Typography variant="h6" sx={{ fontSize: '12px', fontWeight: 600 }}>
                        Shrimp and Chorizo Paella
                    </Typography>
                }
                subheader="2025/05/07"
            />
            <CardMedia component="img" height="194" image={img1} alt="Food" />
            <CardContent>
                <Typography variant="h6" sx={{ color: 'text.secondary', fontSize: '12px', fontWeight: 600 }}>
                    Mien sao chua ngot
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add
                    1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={cx('card-actions')}>
                <Box className={cx('card-box')}>
                    <IconButton className={cx('favorite-icon')} aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <Typography className={cx('favorite-num')}>1000</Typography>
                </Box>

                <Box className={cx('card-box')}>
                    <IconButton className={cx('save-icon')} aria-label="share">
                        <BookmarkIcon />
                    </IconButton>
                </Box>

                <Box className={cx('card-box')}>
                    <IconButton className={cx('view-icon')} aria-label="views">
                        <RemoveRedEyeIcon />
                    </IconButton>
                    <Typography className={cx('view-num')}>2345</Typography>
                </Box>
            </CardActions>
        </Card>
    );
}

export default RecipeCard;
