import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM, TODO_COMPLETED } from "../constants/TodoConstant";

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            // console.log(`test -> ${action.type} : ${action.payload}`);
            return [
                ...state,
                Object.assign({},
                    {
                        id: state.length + 1,
                        text: action.payload,
                        completed: false

                    })
            ];

        case EDIT_ITEM:
            // console.log(`${action.type} : ${action.payload.id} : ${action.payload.text}`);
            return state.map(todo => {
                //console.log(`map: ${todo.id} = ${action.payload.id}`)
                if (todo.id === action.payload.id) {
                    let todoTemp = {
                        id: action.payload.id,
                        text: action.payload.text,
                        completed: todo.completed
                    };
                    console.log(todoTemp);
                    return todoTemp
                } else {
                    return todo
                }
            });


        case REMOVE_ITEM:
            //console.log(`${action.type} : ${action.payload}`);
            return state.filter(todo => todo.id !== action.payload)
                .map(
                    (todo, index) => (
                        {
                            id: index + 1,
                            text: todo.text,
                            completed: todo.completed
                        }
                    )
                );

        case TODO_COMPLETED:
            //console.log(`${action.type} : ${action.payload}`);
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        id: todo.id,
                        text: todo.text,
                        completed: !todo.completed
                    }
                } else {
                    return todo
                }
            })

        default:
            return state;
    }

}

export default todosReducer;