import { ref, watchEffect } from 'vue'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { projectFirestore } from '../firebase/config'

const getCollection = (collectionName) => {
  const documents = ref(null)
  const error = ref(null)

  const q = query(collection(projectFirestore, collectionName), orderBy('createdAt'))

  const unsubscribe = onSnapshot(
    q,
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

  watchEffect((onInvalidate) => {
    onInvalidate(() => {
      unsubscribe()
    })
  })

  return { documents, error }
}

export default getCollection
