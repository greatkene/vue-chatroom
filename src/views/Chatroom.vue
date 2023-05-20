<template>
    <div class="chat">
        <main class="chat-container">
            <ChatHeader />
            <ChatBody />
            <ChatFooter />
        </main>
    </div>
</template>

<script>
import ChatHeader from '../components/chatroom/ChatHeader.vue';
import ChatBody from '../components/chatroom/ChatBody.vue'
import ChatFooter from '../components/chatroom/ChatFooter.vue'

import getUser from '../composables/getUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
    components: { ChatHeader, ChatBody, ChatFooter },
    name: 'Chatroom',
    setup() {
        const { user } = getUser()
        const router = useRouter()

        watch(user, () => {
            if (!user.value) {
                router.push('/')
            }
        })
    }
}
</script>