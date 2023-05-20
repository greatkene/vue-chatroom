<template>
    <main class="chat-container">
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
    </main>
</template>

<script>
import ChatHeader from '../components/chatroom/ChatHeader.vue';
import ChatBody from '../components/chatroom/ChatBody.vue'
import ChatFooter from '../components/chatroom/ChatFooter.vue'

export default {
    components: { ChatHeader, ChatBody, ChatFooter },
    name: 'Chatroom'
}
</script>