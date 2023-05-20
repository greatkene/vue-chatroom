<template>
    <div class="chat-footer">
        <form>

            <Input type="text" placeholder="Enter your message here..." />
            <ion-icon class="chat-send-btn" name="navigate-outline"></ion-icon>
        </form>
    </div>
</template>

<script>
import Input from "../../components/forms/Input.vue";

export default {
    components: {
        Input
    }
};
</script>