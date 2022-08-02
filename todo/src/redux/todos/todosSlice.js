import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name:'todos',
    initialState: {
        items: [
            {
                id: '1',
                title: 'learn react',
                complated:true,
            },
            {
                id:'2',
                title:'read js',
                complated:false,
            }

        ],

    },
    reducers:{
        addTodo : (state,action) => {
            state.items.push(action.payload)
        }
    },
    toggle: (state,action) => {
        const {id} = action.payload; //id almak için

        const item = state.items.find(item => item.id === id);

        item.complated = !item.complated;

    },  
})

export const {addTodo,toggle} = todosSlice.actions; 
export default todosSlice.reducer;