import React from 'react';


const TodosList = ( {todos, setTodos, setEditTodo }) => {


    // const handleProgress = () => {
    //     setBoldText(!boldText);
    // }

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        )
    }


    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo); 
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

  return (
    <div>

        {todos.map((todo) => (
            <li className='list-item' key={todo.id}>
                <input 
                  type="text"
                  value={todo.title}
               
                    className={`list ${todo.completed ? "complete" : "" }`}

                // className={`list ${todo.completed ? 'complete' : ''} ${
                //     boldText ? 'bold' : 'bold' }`}

                //   onChange={(event) => event.preventDefault(todo)} 
                  />
          
                <div>
                    {/* <button className='button-progress task-button'
                    onClick={() => handleProgress(todo)}
                    >
                        <i className='fa fa-clock'></i>
                    </button> */}


                    <button className='button-complete task-button'
                    onClick={() => handleComplete(todo)}
                    >
                        <i className='fa fa-check-circle'></i>
                    </button>
                
                    <button className='button-edit task-button'
                    onClick={() => handleEdit(todo)}
                    >
                        <i className='fa fa-edit'></i>
                    </button>
                
                    <button className='button-delete task-button' 
                    onClick={() => handleDelete(todo)}
                    >
                        <i className='fa fa-trash'></i>
                    </button>
                
                </div>

            </li>
        ))}

    </div>
  )
}

export default TodosList;
