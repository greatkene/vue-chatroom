<template>
    <section class="section">
        <form @submit.prevent="handleSubmit" class="login">
            <h2>Welcome, to GetChaty!</h2>
            <p>Please register and get chatty</p>
            <Input type="text" required placeholder="username" v-model="username" />
            <Input type="email" required placeholder="email" v-model="email" />
            <Input type="password" required placeholder="password" v-model="password" />
            <button class="btn btn-primary">Register</button>
            <div class="form-footer">
                <span> Do you have an account?</span> <a href="#">Login</a>
            </div>
        </form>
    </section>
</template>

<script>
import Input from "../components/forms/Input.vue"
import { ref } from 'vue'

export default {
    components: {
        Input
    },
    setup() {
        const username = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = () => {
            console.log(email.value, username.value, password.value)
        }

        return { username, email, password, handleSubmit }
    }
}
</script>
