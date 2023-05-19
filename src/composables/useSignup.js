import { ref } from 'vue'
import { projectAuth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const error = ref(null)
const signup = async (email, password, displayName) => {
  try {
    const res = await createUserWithEmailAndPassword(projectAuth, email, password)
    if (!res) {
      throw new Error('Could not complete the signup')
    }
    await updateProfile(res.user, {
      displayName
    })
    error.value = null
    return res
  } catch (err) {
    throw new Error(err.message)
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup
