const initialData = {
    list: []
}

const todoReducers = (state=initialData, action) =>{
    switch (action.type) {
        case "ADD":
            const {id, data} = action.payload;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

        case "DELETE":
            const newList = state.list.filter((data)=> data.id != action.id)
            return {
                ...state,
                list: newList
            }

        default: return state;
    }
}

export default todoReducers;