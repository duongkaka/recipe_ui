import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { TextField, Button, Box, Typography, IconButton, MenuItem, InputLabel, Autocomplete } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import styles from './Upload.module.scss';
import classNames from 'classnames/bind';
import Select from 'react-select';
import { Controller } from 'react-hook-form';

import StepImageUpload from '~/components/StepImageUpload';

const cx = classNames.bind(styles);

function Upload() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: '',
            comment: '',
            description: '',
            cookingTime: '',
            ingredients: [
                { name: '', amount: '' },
                { name: '', amount: '' },
                { name: '', amount: '' },
            ], // mặc định 3 nguyên liệu
            steps: [{ description: '', image: null }],
            image: null,
            categories: [],
            cost: '',
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'ingredients',
    });
    // Cho các bước 作り方
    const {
        fields: stepFields,
        append: appendStep,
        remove: removeStep,
    } = useFieldArray({
        control,
        name: 'steps',
    });

    const onSubmit = (data) => {
        console.log('Submitted Recipe:', data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={cx('upload-wrapper')}>
                <span className={cx('title')}>レシピを投稿する</span>

                {/* レシピタイトル */}
                <span className={cx('label')}>レシピタイトル</span>
                <TextField
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: 'white',
                            '&:hover fieldset': {
                                borderColor: '#ff6600',
                            },
                            '&.Mui-focused': {
                                '& fieldset': {
                                    borderColor: '#ff6600',
                                },
                            },
                        },
                    }}
                    className={cx('text-field')}
                    {...register('title', {
                        required: 'タイトルは必須です',
                        maxLength: {
                            value: 100,
                            message: '100文字以内で入力してください',
                        },
                    })}
                    placeholder="野菜たっぷり！トマト風味スパゲッティ"
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    error={!!errors.title}
                    helperText={errors.title?.message || ' '}
                    inputProps={{ maxLength: 100 }}
                />
                {/* 画像アップロード 調理時間　費用目安*/}

                <div className={cx('group')}>
                    {/* 画像アップロード */}
                    <StepImageUpload />
                    {/*調理時間　費用目安* */}
                    <div className={cx('cost-and-time')}>
                        {/* 調理時間 */}
                        <Controller
                            name="cookingTime"
                            control={control}
                            rules={{ required: '調理時間を選んでください' }}
                            render={({ field }) => (
                                <div className={cx('selectWrapper')}>
                                    <span className={cx('label')}>調理時間</span>
                                    <Select
                                        {...field}
                                        options={[
                                            { value: '10分以内', label: '10分以内' },
                                            { value: '10〜30分', label: '10〜30分' },
                                            { value: '30〜60分', label: '30〜60分' },
                                            { value: '60分以上', label: '60分以上' },
                                        ]}
                                        classNamePrefix="react-select"
                                        placeholder="選択してください"
                                    />
                                    {errors.cookingTime && (
                                        <Typography className={cx('error-text')}>
                                            {errors.cookingTime.message}
                                        </Typography>
                                    )}
                                </div>
                            )}
                        />

                        {/* 費用目安 */}
                        <Controller
                            name="cost"
                            control={control}
                            rules={{ required: '費用目安を選んでください' }}
                            render={({ field }) => (
                                <div className={cx('select-wrapper')}>
                                    <span className={cx('label')}>費用目安</span>
                                    <Select
                                        {...field}
                                        options={[
                                            { value: '~300円', label: '~300円以内' },
                                            { value: '~500円', label: '500円' },
                                            { value: '~800円', label: '800円' },
                                            { value: '~1000円', label: '1000円' },
                                        ]}
                                        placeholder="選択してください"
                                        classNamePrefix="react-select"
                                    />
                                    {errors.cookingTime && (
                                        <Typography className={cx('error-text')}>
                                            {errors.cookingTime.message}
                                        </Typography>
                                    )}
                                </div>
                            )}
                        />
                    </div>
                </div>

                {/* コメント */}
                <span className={cx('label')}>レシピコメント</span>
                <TextField
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: 'white',
                            '&:hover fieldset': {
                                borderColor: '#ff6600',
                            },
                            '&.Mui-focused': {
                                '& fieldset': {
                                    borderColor: '#ff6600',
                                },
                            },
                        },
                    }}
                    className={cx('text-field')}
                    {...register('comment', {
                        required: 'コメントは必須です',
                        maxLength: {
                            value: 100,
                            message: '100文字以内で入力してください',
                        },
                    })}
                    placeholder="このレシピの魅力やポイントを記入してください"
                    fullWidth
                    multiline
                    rows={2}
                    margin="normal"
                    error={!!errors.comment}
                    helperText={errors.comment?.message || ' '}
                    inputProps={{ maxLength: 100 }}
                />

                {/* 材料リスト */}

                <span className={cx('label')}>材料リスト</span>
                {fields.map((item, index) => (
                    <div className={cx('ingredient-field')} key={item.id}>
                        <TextField
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: 'white',
                                    '&:hover fieldset': {
                                        borderColor: '#ff6600',
                                    },
                                    '&.Mui-focused': {
                                        '& fieldset': {
                                            borderColor: '#ff6600',
                                        },
                                    },
                                },
                            }}
                            className={cx('field')}
                            {...register(`ingredients.${index}.name`, { required: '材料は必須です' })}
                            placeholder={`材料 ${index + 1}`}
                            fullWidth
                            margin="normal"
                            error={!!errors.ingredients?.[index]?.name}
                            helperText={errors.ingredients?.[index]?.name?.message || ' '}
                        />
                        <TextField
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: 'white',
                                    '&:hover fieldset': {
                                        borderColor: '#ff6600',
                                    },
                                    '&.Mui-focused': {
                                        '& fieldset': {
                                            borderColor: '#ff6600',
                                        },
                                    },
                                },
                            }}
                            className={cx('field')}
                            {...register(`ingredients.${index}.amount`, { required: '数量は必須です' })}
                            placeholder={`数量 ${index + 1}`}
                            fullWidth
                            margin="normal"
                            error={!!errors.ingredients?.[index]?.amount}
                            helperText={errors.ingredients?.[index]?.amount?.message || ' '}
                        />
                        <IconButton onClick={() => remove(index)} color="error">
                            <Delete />
                        </IconButton>
                    </div>
                ))}
                <Button
                    className={cx('add-ingredient-btn')}
                    variant="outlined"
                    startIcon={<Add />}
                    onClick={() => append({ name: '' })}
                >
                    材料を追加
                </Button>

                {/* 作り方 */}

                <span className={cx('label')}>作り方</span>
                {stepFields.map((step, index) => (
                    <div className={cx('step-field-img')} key={step.id}>
                        <TextField
                            sx={{
                                margin: 0,
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: 'white',
                                    '&:hover fieldset': {
                                        borderColor: '#ff6600',
                                    },
                                    '&.Mui-focused': {
                                        '& fieldset': {
                                            borderColor: '#ff6600',
                                        },
                                    },
                                },
                            }}
                            className={cx('field')}
                            {...register(`steps.${index}.description`, { required: '手順の説明は必須です' })}
                            placeholder={`手順  ${index + 1}の説明`}
                            fullWidth
                            multiline
                            rows={9}
                            maxLength={100}
                            margin="normal"
                            error={!!errors.steps?.[index]?.name}
                            helperText={errors.steps?.[index]?.name?.message || ' '}
                        />
                        <StepImageUpload size="medium" />

                        <IconButton onClick={() => removeStep(index)} color="error">
                            <Delete />
                        </IconButton>
                    </div>
                ))}
                <Button
                    className={cx('add-ingredient-btn')}
                    variant="outlined"
                    startIcon={<Add />}
                    onClick={() => appendStep({ name: '' })}
                >
                    作り方を追加する
                </Button>

                <span className={cx('label')}>カテゴリ</span>
                <Controller
                    name="categories"
                    control={control}
                    rules={{ required: 'カテゴリを1つ以上選んでください' }}
                    render={({ field }) => {
                        const allOptions = ['和食', '洋食', '中華', '韓国料理', 'デザート'];
                        const selectedValues = field.value || [];
                        const availableOptions = allOptions.filter((opt) => !selectedValues.includes(opt));

                        return (
                            <Autocomplete
                                multiple
                                options={availableOptions}
                                value={selectedValues}
                                onChange={(_, value) => field.onChange(value)}
                                openOnFocus
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="カテゴリを選んでください"
                                        error={!!errors.categories}
                                        helperText={errors.categories?.message || ' '}
                                    />
                                )}
                            />
                        );
                    }}
                />

                {/* Submit */}
                <Button type="submit" fullWidth variant="contained" className={cx('submit-btn')}>
                    投稿する
                </Button>
            </form>
        </div>
    );
}

export default Upload;
