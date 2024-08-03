import customMessage from "../../UI/customMessages"
import postNewEmail from "../services/postNewEmail"

interface FormData {
  name: string,
  lastname: string,
  email: string,
  phoneNumber: string,
}

const useMessages = () => {
  const sendNewEmail = async(formData: FormData) => {
    const response = await postNewEmail(formData)

    if (response.success) {
      customMessage('success', 'Tu correo se ha enviado exitosamente')
      return true
    }

    customMessage('error', 'Ha ocurrido un error, por favor vuelve a intentarlo')
    return false
  }

  return {
    sendNewEmail
  }
} 

export default useMessages
