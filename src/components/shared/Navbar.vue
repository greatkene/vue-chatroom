<template>
    <nav>
        <div class="nav-container">
            <img src="../../assets/images/logo.svg" />

            <div class="menu" :class="{ 'is-active': isNavbarActive }">
                <RouterLink v-for="item in navbarItems" :key="item.title" :to="item.link"
                    :class="{ 'is-active': isActive(item.link) }">
                    {{ item.title }}
                </RouterLink>
            </div>

            <div class="nav-btn">
                <button :class="['hamburger', { 'is-active': isNavbarActive }]" @click="toggleNavbar">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <button v-if="user" class=" btn-secondary logout" @click="handleLogout">
                    Logout
                </button>
            </div>
        </div>
    </nav>
</template>
  
<script>
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { navbarItems } from "../../utils/constants";
import useLogout from "../../composables/useLogout";
import getUser from "../../composables/getUser"

export default {
    components: {
        RouterLink,
    },
    setup() {
        const isNavbarActive = ref(false);
        const route = useRoute();
        const { logout, error } = useLogout();
        const { user } = getUser()


        const toggleNavbar = () => {
            isNavbarActive.value = !isNavbarActive.value;
        };

        const isActive = (link) => {
            return route.path === link;
        };

        const handleLogout = async () => {
            await logout()
            if (!error.value) {
                console.log('user logged out')
            }
        }

        return {
            isNavbarActive,
            navbarItems,
            toggleNavbar,
            isActive,
            handleLogout,
            user
        };
    },
};
</script>
  