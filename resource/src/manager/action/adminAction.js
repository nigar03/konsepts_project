import database from "../../firebase/firebaseConfig";

export const addAdmin = (admin)=>({
    type:'ADD_ADMIN',
    admin
  });

  export const addAdminToDatabase = (adminData={})=>{
    return (dispatch) => {
        const { email='', password=''} = adminData;
        const admin = {email,password};

        database.ref("admins").push(admin).then((res) => {
            dispatch(addAdmin({
                id: res.key,
                ...admin
            }))
        })
    }
        
}

  export const deleteAdmin =(id)=>({
    type:'REMOVE_ADMIN',
    myid:id
  });

  export const deleteAdminFromDatabase = (id) => {
    return (dispatch) => {
        return database.ref(`admins/${id}`).remove().then(() => {
            dispatch(deleteAdmin(id));
        })
    }   
};

  export const editAdmin =(id,update)=>({
    type:'EDIT_ADMIN',
    id,
    update
  });

  export const editAdminFromDatabase = (id, updates) => {
    return (dispatch) => {
        return database.ref(`admins/${id}`).update(updates).then(() => {
            dispatch(editAdmin(id,updates));
        })
    }
}


  export const getAdmin = (admins) => ({
    type: "GET_ADMINS",
    admins
});

export const getAdminFromDatabase = () => {
    return (dispatch) => {
        return database.ref("admins").once("value").then((snapshot) => {
            const admins = [];
            snapshot.forEach((admin) => {
                admins.push({
                    id: admin.key,
                    ...admin.val()
                })
            })

            dispatch(getAdmin(admins));
        })
    }
}

