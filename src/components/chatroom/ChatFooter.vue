<template>
    <div class="chat-footer">
        <form>
            <Input type="text" />
            <button class="btn btn-primary">SEND</button>
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