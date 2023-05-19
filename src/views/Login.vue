<template>
    <section class="section">
        <form @submit.prevent="handleSubmit" class="login">

            <h2>Welcome back 🥳 !!</h2>
            <p>Please login and enjoy</p>
            <div class="error">{{ error }}</div>
            <Input v-model="email" label="Email" type="email" placeholder="Enter your email" />

            <Input v-model="password" label="Password" type="password" placeholder="Enter your password" />

            <button class="btn btn-primary">Login</button>
            <div class="form-footer">
                <a href="#">Forgot password</a>
                <a href="#">Create account</a>
            </div>
        </form>
    </section>
</template>
  
<script>
import { ref } from "vue";
import { useRouter } from 'vue-router'
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

        const handleSubmit = async () => {
            await login(email.value, password.value);
            if (!error.value) {
                console.log('user logged in');
                router.push('/chatroom');
            }
        };

        return { email, password, handleSubmit, error };
    }
};
</script>
