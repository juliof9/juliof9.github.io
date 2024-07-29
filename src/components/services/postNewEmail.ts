import emailjs from '@emailjs/browser'
import { EMAIL_ID_SERVICE, EMAIL_ID_TEMPLATE, EMAIL_ID_USER } from '../../config'

interface FormData {
  name: string,
  lastname: string,
  email: string,
  phoneNumber: string,
}

const postNewEmail = async (formData: FormData) => {
  try {
    const response = await emailjs.send(EMAIL_ID_SERVICE, EMAIL_ID_TEMPLATE, {...formData}, EMAIL_ID_USER)

    return {
      success: true,
      ...response
    }
  } catch (error) {
    return {
      success: false,
      error
    }
  }
}

export default postNewEmail