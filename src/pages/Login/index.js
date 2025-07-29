import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Login.module.scss';
import pho2 from '~/assets/images/pho2.jpg';
import classNames from 'classnames/bind';
import { TextField, Button, Box, Typography } from '@mui/material';
import logo2 from '~/assets/images/logo2.png';
import Image from '~/components/Image';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        navigate('/');
    };

    return (
        <div>
            <div className={cx('login-container')}>
                <header className={cx('header')}>FoodCham</header>
                <div className={cx('body')}>
                    <Image src={pho2} className={cx('image')} />
                    <Box className={cx('form')} component="form" onSubmit={handleSubmit(onSubmit)}>
                        <Typography variant="h5" mb={3} color="#5c3d00">
                            ログイン
                        </Typography>
                        <TextField
                            className={cx('email input')}
                            {...register('email', { required: 'メールを入力してください' })}
                            label="メールアドレス"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={!!errors.email}
                            helperText={errors.email?.message || ' '}
                            color="#5c3d00"
                        ></TextField>
                        <TextField
                            className={cx('password input')}
                            {...register('password', { required: 'パスワードを入力してください' })}
                            error={!!errors.password}
                            helperText={errors.password?.message || ' '}
                            label="パスワード"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            color="#5c3d00"
                            fullWidth
                        ></TextField>
                        <Button className={cx('login-btn')} type="submit" fullWidth variant="contained">
                            ログイン
                        </Button>
                    </Box>
                </div>
                <footer>
                    <div className={cx('footer-content')}>
                        <div className={cx('footer-logo')}>FoodCham</div>
                        {/* <div className={cx('footer-links')}>
                            <a href="/about">Giới thiệu</a>
                            <a href="/contact">Liên hệ</a>
                            <a href="/terms">Điều khoản</a>
                        </div> */}
                        <div className={cx('copyright')}>© 2025 FoodCham. All rights reserved.</div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Login;
