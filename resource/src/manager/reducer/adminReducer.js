
const initialstate = [
   {
    email:'nigar.baxshiyeva03@gmail.com',
    password:"10zmal"
   },

];

export const adminReducer =(state=initialstate,action)=>{
    switch (action.type) {
        case 'ADD_ADMIN':      
           return [...state,action.admin];
        case 'REMOVE_ADMIN':
            return state.filter(item=>item.id !== action.myid);

        case 'GET_ADMIN':
            return action.admins
        case 'EDIT_ADMIN':
            return state.map(i=>{
                if (i.id === action.id) {
                    return{
                        ...i,...action.update
                    }    
                }
                else{
                    return i;
                }
            });
    
        default:
            return state;
        
    }

}