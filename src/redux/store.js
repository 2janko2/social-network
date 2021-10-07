import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'How is it going?', likesCount: 12 },
                { id: 2, message: 'Thanks, fine. And you?', likesCount: 27 },
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Vitaliy' },
                { id: 3, name: 'Roland' },
                { id: 4, name: 'Irene' },
                { id: 5, name: 'Toni' },
                { id: 6, name: 'Ostap' },
            ],
            messages: [
                { id: 1, message: 'Servus!' },
                { id: 2, message: 'Grüß Gott!' },
                { id: 3, message: 'Gruezi!' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
                { id: 6, message: 'Yo' },
            ],
            newMessageBody: "",
        }
    },
    _rerenderEntireTree() {
        console.log('State is changed');
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {


        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.profilePage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = sidebarReducer(this._state.sidebar, action);

        this._rerenderEntireTree(this._state);


    }

}







export default store