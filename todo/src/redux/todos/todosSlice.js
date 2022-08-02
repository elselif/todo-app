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
    destroy : (state,action) => {
        const id = action.payload; // id'i obje olarak almak istemediğimiz için süslü paranteze koymadık
        const filtered = state.items.filter((item) => item.id !== id); //item.id denk değilse id'e filtre içine eklensin
        state.items = filtered;
    },

})

export const {addTodo,toggle,destroy} = todosSlice.actions; 
export default todosSlice.reducer;