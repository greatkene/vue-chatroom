<template>
    <div>
        <div v-if="error">{{ error }}</div>

        <div v-if="documents" class="chat-container">
            <div v-for="doc in documents" :key="doc.id" class="chat-body">
                <span class="created-at">{{ formatDate(doc.createdAt) }}</span>
                <span class="chat-name">{{ doc.name }}</span>
                <p class="chat-message">
                    {{ doc.message }}
                </p>
            </div>
        </div>
    </div>
</template>
  
<script>
import getCollection from '../../composables/getCollection';
import moment from 'moment';

export default {
    setup() {
        const { error, documents } = getCollection('messages');

        const formatDate = (date) => {
            return moment(date.toDate()).fromNow();
        };

        return { error, documents, formatDate };
    },
};
</script>
  