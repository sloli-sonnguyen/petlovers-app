import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import NewFeedItem from './NewFeedItem';
import './style.scss';
import { useEffect } from 'react';
import { useState } from 'react';

NewFeed.propTypes = {
    userInfo: PropTypes.object,
    followings: PropTypes.array
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}




function NewFeed(props) {

    const [posts, setPosts] = useState([]);
    const { userInfo, followings } = props;

    useEffect(() => {

        console.log('run effect newfeed')
        // get theo userid
        // let id = userInfo.id;
        // const url = process.env.REACT_APP_API_URL + `posts/by-userId/${id}`;
        // axios.get(url)
        //     .then(res => {
        //         console.log('oke');
        //         const data = res.data.reverse();
        //         setPosts([
        //             ...posts,
        //             ...data
        //         ]);
        //     })
        // Lay post cua nhung nguoi minh dang follow
        const postUserId = followings || [userInfo.id];
        if (postUserId) {
            const url = process.env.REACT_APP_API_URL + `posts/by-userId/`;
            let arrayAxios = [];
            for (let i = 0; i < postUserId.length; i++) {
                arrayAxios.push(axios.get(url + postUserId[i]));
            }
            axios.all(arrayAxios).then(resArray => {
                let dataArray = resArray.map(item => {
                    return item.data;
                })
                let newPosts = dataArray.reduce((a, b) => {
                    return a.concat(b);
                }, []);

                shuffleArray(newPosts);
                setPosts(newPosts);
            });
        }

    }, [followings]);

    return (
        <div className="newfeeds">
            {
                posts.map((post, index) => {
                    return (
                        <NewFeedItem key={index} post={post} currentUserInfo={userInfo} />
                    )
                })
            }
        </div>
    );
}

export default NewFeed;