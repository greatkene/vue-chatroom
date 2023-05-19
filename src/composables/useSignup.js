import { ref } from 'vue'
import { projectAuth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const error = ref(null)
const signup = async (email, password, username) => {
  try {
    const res = await createUserWithEmailAndPassword(projectAuth, email, password)
    if (!res) {
      throw new Error('Could not complete the signup')
    }
    console.log(res.user)
  } catch (err) {
    console.log(err.message)
    throw new Error(err.message)
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup
