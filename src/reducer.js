const initialState = {
    number: 0,
    checked: false,
    password: '',
}

const reducer = (state = initialState, action) => {
    console.log(state, action);
    
    if (action.type === "BUTTON_PLUS_CLICK") {
        const nextNumber = state.number + action.payload;
        return {
            ...state,
            number: nextNumber,
            checked: nextNumber % 2 === 0,
        };
    }
    if (action.type === "BUTTON_MINUS_CLICK") {
        const nextNumber = state.number - action.payload;
        return {
            ...state,
            number: nextNumber,
        };
    }
    if (action.type === "CHECKBOX_CHECKED") {
        return {
            ...state,
            checked: !state.checked,
        };
    }
    if (action.type === "PASSWORD_CHANGED") {
        return {
            ...state,
            password: action.payload,
        };
    }
    return state;
};

export default reducer