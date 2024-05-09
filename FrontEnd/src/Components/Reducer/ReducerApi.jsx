const reducer = (state, action)=>{
        switch (action.type) {
            case "Add_Todos":
                return {...state, name : action.payload.name};
            default:
                return state;
        }
}
export default reducer