import { redirect } from "react-router-dom"

const useRedirectTo = () => {
  const handleRedirectTo = (url: string) => redirect(url)

  return { handleRedirectTo }
}

export default useRedirectTo