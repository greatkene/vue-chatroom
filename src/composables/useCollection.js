import { ref } from 'vue'
import { collection, addDoc } from 'firebase/firestore'
import { projectFirestore } from '../firebase/config'

const useCollection = (collectionName) => {
  const error = ref(null)
  const addDocToCollection = async (doc) => {
    error.value = null
    try {
      await addDoc(collection(projectFirestore, collectionName), doc)
    } catch (err) {
      console.log(err.message)
      error.value = 'Could not send message'
    }
  }
  return { error, addDocToCollection }
}

export default useCollection
