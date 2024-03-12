/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !==
                action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
            ...state,
            transactions: [action.payload, ...state.transactions]
            }    
        default:  
            return state;
    }
}

/*Line: 11,  "spread operator": helps in maintaing immutablity in you React Components. 
It Creates a new array or object instead of mutating the exisiting one, 
which is a kye principle in React. */