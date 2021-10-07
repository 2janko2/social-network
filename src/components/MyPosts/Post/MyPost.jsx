import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../commons/FormsControls/FormsControls';
import Message from '../../Dialogs/Message/Message';
import { maxLengthCreator, required } from '../../../utils/validator';
import classes from './MyPost.module.css';
import Post from './Post/Post';


let maxLength10 = maxLengthCreator(10);

const MyPost = React.memo(props => {

    // componentDidUpdate(prevProps, prevState, snapshot) {

    // }

    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);


    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }



    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={classes.item}>
                {postsElements}
            </div>
        </div >
    )

});


let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder={"Post Message"}
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <button> Add Post </button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);


export default MyPost;