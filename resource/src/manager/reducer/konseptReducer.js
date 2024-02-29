import { storedata } from "../../data/konsept";


export const konseptReducer =(state=storedata,action)=>{
    switch (action.type) {
        case 'ADD_KONSEPT':      
           return [...state,action.konsept];
        case 'REMOVE_KONSEPT':
            return state.filter(item=>item.id !== action.myid);

        case 'GET_KONSEPTS':
            return action.konsepts
        case 'EDIT_KONSEPT':
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

