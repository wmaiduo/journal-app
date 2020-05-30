class Journal {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }
}

const initialState = {
    numOfJournal: 0,
    journalArray: []
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'SUBMIT_JOURNAL':
            let newArray = state.Array
            newArray.splice(newArray[0], 0, Journal(action.title, action.text))
            return {
                ...state,
                numOfJournal: state.numOfJournal + 1,
                journalArray: newArray
            }
        default:
            return newState
    }
};

export default reducer