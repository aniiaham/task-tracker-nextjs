import { newTodo } from '@/utils/actions'

const NewTodoForm = ({}) => {
  return (
    <div>
      <form action={newTodo}>
        <input
          type="text"
          className="border border-black/25"
          name="content"
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default NewTodoForm
