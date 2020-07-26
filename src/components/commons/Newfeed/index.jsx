import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import NewFeedItem from './NewFeedItem';
import './style.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import GuideBox from './GuideBox';

NewFeed.propTypes = {
    userInfo: PropTypes.object,
    followings: PropTypes.array
};

function sortArray(array) {
    array.sort((a, b) => {
        return a.creataAt > b.creataAt ? 1 : -1;
    });
}




function NewFeed(props) {

    const [posts, setPosts] = useState([]);
    const { userInfo, followings, type, currentUserInfo } = props;

    useEffect(() => {

        // Lay id cua nhung nguoi minh follow cua nhung nguoi minh dang follow
        let postUserIds = [];
        if (followings) {
            postUserIds = [...followings, userInfo.id];
        } else {
            postUserIds = [userInfo.id];
        }
        if (postUserIds) {
            const url = process.env.REACT_APP_API_URL + `posts/by-userId/`;
            let arrayAxios = [];
            for (let i = 0; i < postUserIds.length; i++) {
                arrayAxios.push(axios.get(url + postUserIds[i]));
            }
            axios.all(arrayAxios).then(resArray => {
                let dataArray = resArray.map(item => {
                    return item.data;
                })
                let newPosts = dataArray.reduce((a, b) => {
                    return a.concat(b);
                }, []);

                sortArray(newPosts);
                setPosts(newPosts);
            });
        }

    }, [followings, userInfo]);

    return (
        <div className="newfeeds">
            {posts.length > 0 &&
                posts.map((post, index) => {
                    return (
                        <NewFeedItem key={index} post={post} currentUserInfo={currentUserInfo} userInfo={userInfo} />
                    )
                })
            }
            {posts.length > 0 || <GuideBox type={type} userInfo={userInfo} />}
        </div>
    );
}

export default NewFeed;