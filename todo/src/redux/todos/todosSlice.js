import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name:'todos',
    initialState: {
        items: [
            {
                id: '1',
                title: 'learn react',
            },
            {
                id:'2',
                title:'read js',
            }

        ]
    }
})


export default todosSlice.reducer;