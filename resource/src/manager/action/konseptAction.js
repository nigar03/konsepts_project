import database from "../../firebase/firebaseConfig";

export const addKonsept = (konsept)=>({
    type:'ADD_KONSEPT',
    konsept
  });

  export const addKonseptToDatabase = (konseptData={})=>{
    return (dispatch) => {
        const { image='', title='',price='',style='',tags='',description='',category='',sku='',imageone='',imagetwo='',imagethree='',imagefour='',titleaz='',descaz='',styleaz='',tagaz='',name=''} = konseptData;
        const konsept = {image,title,price,style,tags,description,category,sku,imageone,imagetwo,imagethree,imagefour,titleaz,descaz,styleaz,tagaz,name};

        database.ref("konsepts").push(konsept).then((res) => {
            dispatch(addKonsept({
                id: res.key,
                ...konsept
            }))
        })
    }
        
}

  export const deleteKonsept =(id)=>({
    type:'REMOVE_KONSEPT',
    myid:id
  });

  export const deleteKonseptFromDatabase = (id) => {
    return (dispatch) => {
        return database.ref(`konsepts/${id}`).remove().then(() => {
            dispatch(deleteKonsept(id));
        })
    }   
};

  export const editKonsept =(id,update)=>({
    type:'EDIT_KONSEPT',
    id,
    update
  });

  export const editKonseptFromDatabase = (id, updates) => {
    return (dispatch) => {
        return database.ref(`konsepts/${id}`).update(updates).then(() => {
            dispatch(editKonsept(id,updates));
        })
    }
}


  export const getKonsepts = (konsepts) => ({
    type: "GET_KONSEPTS",
    konsepts
});

export const getKonseptsFromDatabase = () => {
    return (dispatch) => {
        return database.ref("konsepts").once("value").then((snapshot) => {
            const konsepts = [];
            snapshot.forEach((konsept) => {
                konsepts.push({
                    id: konsept.key,
                    ...konsept.val()
                })
            })

            dispatch(getKonsepts(konsepts));
        })
    }
}

