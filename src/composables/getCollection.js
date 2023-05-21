import { ref } from 'vue'
import { collection, onSnapshot } from 'firebase/firestore'
import { projectFirestore } from '../firebase/config'

const getCollection = (collectionName) => {
  const documents = ref(null)
  const error = ref(null)

  let collectionRef = collection(projectFirestore, collectionName).orderBy('createdAt')

  onSnapshot(
    collectionRef,
    (snap) => {
      let results = []
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
      })
      documents.value = results
      error.value = null
    },
    (err) => {
      console.log(err.message)
      documents.value = null
      error.value = 'could not fetch data'
    }
  )
  return { documents, error }
}
export default getCollection
