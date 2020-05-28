//basic structure for the journal data
//used for debugging

const redux = require('redux')
const createStore = redux.createStore

const SUBMIT = 'SUBMIT_JOURNAL'

class journal {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }
}

function submitJournal(title, text) {
    let newJournal = new journal(title, text)
    return {
        type: SUBMIT,
        object: newJournal
    }
}

var journalArray = []
//0 journal in the beginning
//no journal in the beginning so empty
const initialState = {
    numOfJournal: 0,
    Array: journalArray
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT: {
                let newArray = state.Array
                newArray.splice(newArray[0], 0, action.object)
            return {
                ...state,
                numOfJournal: state.numOfJournal + 1,
                //add a new journal object to the array
                Array: newArray
            }
        }
        default: return state
    }
}

const store = createStore(reducer)
// console.log('Initial state', store.getState())
// const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(submitJournal("title1", "1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"))
store.dispatch(submitJournal("title2", "2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"))
store.dispatch(submitJournal("title3", "3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"))
store.dispatch(submitJournal("title4", "4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"))
store.dispatch(submitJournal("title5", "5: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"))
console.log('Updated state', store.getState())

// unsubscribe();

