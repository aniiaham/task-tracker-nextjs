import { newTodo } from '@/utils/actions'

const NewTodoForm = () => {
  return (
    <div className="container mx-auto ">
      <h1 className="text-lg font-medium uppercase text-blue-950">Task List</h1>
      <form action={newTodo}>
        <input
          type="text"
          name="todo"
          className="border border-black/90 rounded mb-8 w-full max-w-lg py-2 px-4"
        />
        <button
          type="submit"
          className="ml-4 border border-blue-950/90 rounded px-4 py-2 hover:bg-blue-700/30 active:bg-blue-700/30"
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default NewTodoForm
