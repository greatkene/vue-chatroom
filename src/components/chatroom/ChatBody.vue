<template>
    <div>
        <div v-if="error">{{ error }}</div>

        <div class="chat-container" ref="container">
            <div class="chat-body" v-for="doc in documents" :key="doc.id" ref="messages">
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
import { ref, watch, nextTick } from 'vue';

export default {
    setup() {
        const { error, documents } = getCollection('messages');

        const formatDate = (date) => {
            return moment(date.toDate()).fromNow();
        };

        const container = ref(null);
        const messages = ref([]);

        watch(
            documents,
            () => {
                nextTick(() => {
                    scrollToBottom();
                });
            },
            { immediate: true }
        );

        const scrollToBottom = () => {
            if (container.value && messages.value.length > 0) {
                const lastMessage = messages.value[messages.value.length - 1];
                lastMessage.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        };

        return { error, documents, formatDate, container, messages };
    },
};
</script>
  