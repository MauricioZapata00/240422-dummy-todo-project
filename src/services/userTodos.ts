import axios from 'axios'

type UserTodo = {
    todoId: string,
    name: string
}
const userTodos = async(userId: string) => {
  const responseNotifications: UserTodo[] = await axios.get(process.env.URL_NOTIFICATIONS_API + "/" + userId)
  .then(response => response.data)
  .catch(error => error)
  return { responseNotifications }
}

export default userTodos