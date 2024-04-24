import NewTodoForm from '@/components/NewTodoForm'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col gap-4 justify-start items-start">
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
