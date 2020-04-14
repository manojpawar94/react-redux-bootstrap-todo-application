import { TodoActions } from "../constants/TodoConstant";

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case TodoActions.ADD_ITEM:
            //console.log(`test -> ${action.type} : ${action.payload}`);
            return [
                ...state,
                Object.assign({},
                    {
                        id: state.length + 1,
                        text: action.payload,
                        completed: false

                    })
            ];

        case TodoActions.EDIT_ITEM:
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


        case TodoActions.REMOVE_ITEM:
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

        case TodoActions.TODO_COMPLETED:
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

        case TodoActions.TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )

        default:
            return state;
    }

}

export default todosReducer;