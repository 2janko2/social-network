import profileReducer, { deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'How is it going?', likesCount: 12 },
        { id: 2, message: 'Thanks, fine. And you?', likesCount: 27 },
    ]

}


it('length of the posts should be incremented', () => {

    let action = addPostActionCreator("it-kamasutra.com");
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

it('after deleting length of messages should be decrement', () => {

    let action = deletePost(1);
    let newState = profileReducer(state, action);


    expect(newState.posts.length).toBe(5);
});

it(`after deleting length of messages shouldn't be decrement if id is incorrect`, () => {

    let action = deletePost(1000);
    let newState = profileReducer(state, action);


    expect(newState.posts.length).toBe(4);
});