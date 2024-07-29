const EMAIL_ID_SERVICE = import.meta.env.VITE_APP_EMAIL_ID_SERVICE ?? ''
const EMAIL_ID_TEMPLATE = import.meta.env.VITE_APP_EMAIL_ID_TEMPLATE ?? ''
const EMAIL_ID_USER = import.meta.env.VITE_APP_EMAIL_ID_USER ?? ''

export {
  EMAIL_ID_USER,
  EMAIL_ID_SERVICE,
  EMAIL_ID_TEMPLATE,
}

export const config =  {rules: [
    {
      required: true,
      message: 'Campo requerido',
    },
  ]}