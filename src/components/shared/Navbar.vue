<template>
    <nav>
        <div class="container">
            <h1>Chatroom</h1>
            <div class="menu" :class="{ 'is-active': isNavbarActive }">
                <ul>
                    <li>
                        <RouterLink v-for="item in navbarItems" :key="item.title" :to="item.link"
                            :class="{ 'is-active': isActive(item.link) }">{{
                                item.title }}
                        </RouterLink>
                    </li>
                </ul>
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