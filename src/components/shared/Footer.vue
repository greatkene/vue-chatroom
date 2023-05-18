<template>
    <footer class="footer">

        <div class="section footer-top">
            <div class="container">

                <div class="footer-brand">
                    <img src="../../assets/images/logo.svg" alt="logo" />
                    <p class="section-text footer-desc">
                        With our user-friendly interface and real-time messaging capabilities, staying connected has never
                        been easier.
                    </p>
                    <ul class="social-list">
                        <RouterLink v-for="item in socials" :key="item.link" :to="item.link" class="social-link">
                            <ion-icon :name="item.icon"></ion-icon>
                        </RouterLink>
                    </ul>

                </div>

                <ul class="footer-list">
                    <li>
                        <p class="footer-list-title">Company</p>
                    </li>
                    <li>
                        <RouterLink v-for="item in companyLinks" :key="item.title" :to="item.link" class="footer-link">{{
                            item.title }}
                        </RouterLink>
                    </li>
                </ul>

                <ul class="footer-list">
                    <li>
                        <p class="footer-list-title">Useful Links</p>
                    </li>
                    <li>
                        <RouterLink v-for="item in usefulLinks" :key="item.title" :to="item.link" class="footer-link">{{
                            item.title }}
                        </RouterLink>
                    </li>
                </ul>

                <ul class="footer-list">

                    <li>
                        <p class="footer-list-title">Get In Touch</p>
                    </li>

                    <RouterLink v-for="item in contact" :key="item.text" :to="item.text" class="footer-item">
                        <ion-icon :name="item.icon"></ion-icon>
                        <a href="#" class="item-link">{{ item.text }}</a>

                    </RouterLink>

                </ul>

            </div>
        </div>

        <div class="footer-bottom">
            <div class="container">

                <p class="copyright">
                    &copy; 2023 All Rights Reserved by <a href="#" class="copyright-link">getchatty</a>.
                </p>

            </div>
        </div>

    </footer>
</template>

<script>
import { companyLinks, contact, socials, usefulLinks } from '../../utils/constants';
export default {
    data() {
        return {
            companyLinks: companyLinks,
            contact: contact,
            socials: socials,
            usefulLinks: usefulLinks
        };
    },

}
</script>