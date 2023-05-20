<template>
    <div class="chat-header">
        <h1 class="section-title">Welcome, {{ user?.displayName }}</h1>
    </div>
</template>


<script>
import getUser from "../../composables/getUser"

export default {
    setup() {
        const { user } = getUser()
        return { user }
    }
}
</script>