<template>
    <div class="chat-footer">
        <form @submit.prevent="handleSubmit">
            <textarea type="text" placeholder="Enter your message here..." v-model="message"
                @keydown.enter="handleEnterKey"></textarea>
            <button type="submit">
                <ion-icon class="chat-send-btn" name="navigate-outline"></ion-icon>
            </button>
        </form>
    </div>
</template>
  
<script>
import { ref } from 'vue';
import getUser from '../../composables/getUser';
import { serverTimestamp } from '../../firebase/config';

export default {
    setup() {
        const { user } = getUser();
        const message = ref('');

        const handleSubmit = async () => {
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: serverTimestamp(),
            };
            message.value = '';
        };

        const handleEnterKey = (event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
                handleSubmit();
                event.preventDefault();
            }
        };

        return { message, handleSubmit, handleEnterKey, chat };
    },
};
</script>
  