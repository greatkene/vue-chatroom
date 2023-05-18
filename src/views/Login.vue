<template>
    <section class="section">
        <form @submit.prevent="handleSubmit" class="login">
            <h2>Welcome back 🥳 !!</h2>
            <p>Please login and enjoy</p>
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
import Input from "../components/forms/Input.vue";
import { ref } from "vue";

export default {
    components: {
        Input
    },
    setup() {
        const email = ref('')
        const password = ref('')

        const handleSubmit = () => {
            console.log(email.value, password.value);
        }

        return { email, password, handleSubmit }
    }
};
</script>
  