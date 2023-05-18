<template>
    <nav>
        <div class="container">

            <img src="../../assets/logo.svg" />

            <div class="menu" :class="{ 'is-active': isNavbarActive }">
                <RouterLink v-for="item in navbarItems" :key="item.title" :to="item.link"
                    :class="{ 'is-active': isActive(item.link) }">{{
                        item.title }}
                </RouterLink>
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
import { navbarItems } from "../../utils/constants"

export default {
    data() {
        return {
            isNavbarActive: false,
            navbarItems: navbarItems
        };
    },
    methods: {
        toggleNavbar() {
            this.isNavbarActive = !this.isNavbarActive;
        },
        isActive(link) {
            return this.$route.path === link;
        }
    }
};

</script>