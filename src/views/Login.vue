<template>
    <section class="section">
        <form @submit.prevent="handleSubmit" class="login">
            <h2>Welcome back 🥳 !!</h2>
            <p>Please login and enjoy</p>
            <div class="error">{{ error }}</div>
            <Input v-model="email" label="Email" type="email" placeholder="Enter your email" />

            <Input v-model="password" label="Password" type="password" placeholder="Enter your password" />

            <button class="btn btn-primary" :class="{ 'disabled': isLoggingIn }" :disabled="isLoggingIn">Login</button>
            <div class="form-footer">
                <a href="#">Forgot password</a>
                <RouterLink to="/register">Create account</RouterLink>
            </div>
        </form>
    </section>
</template>

<script>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { useToast } from "vue-toast-notification";
import Input from "../components/forms/Input.vue";
import useLogin from "../composables/useLogin";

export default {
    components: {
        Input
    },
    setup() {
        const email = ref('');
        const password = ref('');
        const { error, login } = useLogin();
        const router = useRouter();
        const toast = useToast();
        const isLoggingIn = ref(false);

        const handleSubmit = async () => {
            isLoggingIn.value = true;
            await login(email.value, password.value);
            if (!error.value) {
                console.log('user logged in');
                toast.success('Login successful');
                router.push('/chatroom');
            }
            isLoggingIn.value = false;
        };

        return { email, password, handleSubmit, error, isLoggingIn };
    }
};
</script>
