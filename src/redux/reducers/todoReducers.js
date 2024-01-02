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
        default: return state;
    }
}

export default todoReducers;