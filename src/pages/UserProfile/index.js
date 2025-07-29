import React, { useState } from 'react';
import styles from './UserProfile.module.scss';
import classNames from 'classnames/bind';
import MyProfileSidebar from '~/components/MyProfileSidebar';

const cx = classNames.bind(styles);

function UserProfile({ user }) {
    const [selectedTab, setSelectedTab] = useState('アクティビティ');

    const tabs = ['アクティビティ', '投稿', 'お気に入り', '保存済み'];

    return (
        <div className={cx('wrapper')}>
            <MyProfileSidebar />

            <div className={cx('profile-container')}>
                {/* 基本情報 */}
                <div className={cx('basic-info')}>
                    <img src={user.avatar} alt="アバター" className={cx('avatar')} />
                    <div>
                        <h2>{user.name}</h2>
                        <p>@{user.username}</p>
                        <p>メールアドレス: {user.email}</p>
                        <p>自己紹介: {user.bio}</p>
                        <p>登録日: {new Date(user.joinDate).toLocaleDateString('ja-JP')}</p>
                        <button className={cx('edit-btn')}>プロフィールを編集</button>
                        <button className={cx('edit-btn')}>パスワードを変更</button>
                    </div>
                </div>

                {/* 統計情報 */}
                <div className={cx('stats')}>
                    <div>
                        <strong>{user.postCount}</strong> 投稿
                    </div>
                    <div>
                        <strong>{user.likes}</strong> いいね
                    </div>
                    <div>
                        <strong>{user.saved}</strong> 保存済みレシピ
                    </div>
                </div>

                {/* タブ */}
                <div className={cx('tabs')}>
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={cx('tab-btn', { active: selectedTab === tab })}
                            onClick={() => setSelectedTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* タブ内容 */}
                <div className={cx('tab-content')}>
                    {selectedTab === 'アクティビティ' && <p>最近のアクティビティを表示します...</p>}
                    {selectedTab === '投稿' && <p>ユーザーの投稿一覧を表示します...</p>}
                    {selectedTab === 'お気に入り' && <p>お気に入りのレシピを表示します...</p>}
                    {selectedTab === '保存済み' && <p>保存された投稿やレシピを表示します...</p>}
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
