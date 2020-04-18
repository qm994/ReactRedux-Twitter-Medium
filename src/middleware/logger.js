// So logger is going to show us anytime a new action is dispatched;
// As well as the what is the new state after it's dispatched; 
const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log("The action: ", action)
        // next will be dispatch function
        const returnValue = next(action);
        //get the new state
        console.log("The new state is: ", store.getState())
    console.groupEnd()

    return returnValue
}

export default logger