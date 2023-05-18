<template>
    <nav>
        <div class="container">
            <h1>Chatroom</h1>
            <div class="menu">
                <RouterLink to="/" class="is-active">Home</RouterLink>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/">Home</RouterLink>
            </div>
            <button :class="['hamburger', { 'is-active': isNavbarActive }]" @click="toggleNavbar">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isNavbarActive: false
        };
    },
    methods: {
        toggleNavbar() {
            this.isNavbarActive = !this.isNavbarActive;
        }
    }
};

</script>