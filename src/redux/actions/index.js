export const addToDo = (data) =>{
    return {
        type: "ADD",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteToDo = (id) =>{
    return {
        type: "DELETE",
        id
    }
}

export const updateToDo = (id, data) =>{
    return {
        type: "UPDATE",
        payload: {
            data: data,
            id
        }
    }
}