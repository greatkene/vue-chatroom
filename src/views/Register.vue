<template>
    <section class="section">
        <form @submit.prevent="handleSubmit" class="login">
            <h2>Welcome to GetChaty!</h2>
            <p>Please register and get chatty</p>
            <Input v-model="username" label="Username" placeholder="Enter your username" />

            <Input v-model="email" label="Email" type="email" placeholder="Enter your email" />

            <Input v-model="password" label="Password" type="password" placeholder="Enter your password" />

            <button class="btn btn-primary">Register</button>
            <div class="form-footer">
                <span>Do you have an account?</span>
                <RouterLink to="/login">Login</RouterLink>
            </div>
        </form>
    </section>
</template>
  
<script>
import { ref } from "vue";
import Input from "../components/forms/Input.vue";
import useSignup from "../composables/useSignup";

export default {
    components: {
        Input
    },
    setup() {
        const { error, signup } = useSignup()

        // refs
        const username = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await signup(email.value, password.value, username.value)
        }

        return { username, email, password, handleSubmit }
    }
};
</script>
  