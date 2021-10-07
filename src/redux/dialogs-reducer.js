const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Vitaliy' },
        { id: 3, name: 'Roland' },
        { id: 4, name: 'Irene' },
        { id: 5, name: 'Toni' },
        { id: 6, name: 'Ostap' },
    ], messages: [
        { id: 1, message: 'Servus!' },
        { id: 2, message: 'Grüß Gott!' },
        { id: 3, message: 'Gruezi!' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
        { id: 6, message: 'Yo' },
    ]

}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }

}


export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}


export default dialogsReducer;