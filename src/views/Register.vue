<template>
    <section class="section">
        <form @submit.prevent="handleSubmit" class="login">
            <h2>Welcome to GetChaty!</h2>
            <p>Please register and get chatty</p>
            <div class="error">{{ error }}</div>

            <Input v-model="displayName" label="Username" placeholder="Enter your username" />

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
import { useRouter } from "vue-router";
import { useToast } from "vue-toast-notification";
import Input from "../components/forms/Input.vue";
import useSignup from "../composables/useSignup";

export default {
    components: {
        Input
    },
    setup() {
        const { error, signup } = useSignup();

        // refs
        const displayName = ref("");
        const email = ref("");
        const password = ref("");

        const router = useRouter();
        const toast = useToast();

        const handleSubmit = async () => {
            try {
                await signup(email.value, password.value, displayName.value);
                console.log("user signed up");

                toast.success("Registration successful");

                router.push("/chatroom");
            } catch (err) {
                console.error(err);
                toast.error("Registration failed");
            }
        };

        return { displayName, email, password, handleSubmit, error };
    }
};
</script>
  