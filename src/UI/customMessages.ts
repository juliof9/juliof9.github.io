import { toast } from "react-hot-toast"

const customMessage = (type: string, message: string) => {
  switch (type) {
    case 'success':
      return toast.success(message)
    case 'waiting':
      return toast.loading(message)
    case 'error':
      return toast.error(message)
    default:
      return toast.success(message)
  }
}

export default customMessage
