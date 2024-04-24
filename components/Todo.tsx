'use client'

import { completeTodo } from '@/utils/actions'
import { useTransition } from 'react'

const Todo = ({ todo }) => {
  const [isPending, startTransitions] = useTransition()
  return (
    <div
      onClick={() => startTransitions(() => completeTodo(todo.id))}
      className={`border border-black/20 cursor-pointer ${
        todo.completed ? 'strike-through text-gray-900' : ''
      }`}
    >
      {todo.content}
    </div>
  )
}

export default Todo
