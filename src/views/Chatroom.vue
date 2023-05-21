<template>
    <div class="chat">
        <div class="chat-container">
            <ChatHeader />
            <div class="chat-body-container">
                <ChatBody />
            </div>
            <ChatFooter />
        </div>
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