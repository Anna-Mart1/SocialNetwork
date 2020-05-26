import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


/*const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onchangeNewPost = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                };

                return <MyPosts updateNewPostText={onchangeNewPost}
                                onAddPost={addPost}
                                newPostText={state.profilePage.newPostText}
                                posts={state.profilePage.posts}/>
            }}

        </StoreContext.Consumer>
    )
}*/

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text)),
        onAddPost: () => dispatch(addPostActionCreator()),
    }
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

