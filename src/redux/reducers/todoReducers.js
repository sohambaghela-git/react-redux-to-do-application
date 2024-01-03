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

        case "UPDATE":
            const updatedList = state.list.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        data: action.payload.data
                    };
                }
                return item;
            });
        
            return {
                ...state,
                list: updatedList
            };          

        default: return state;
    }
}

export default todoReducers;