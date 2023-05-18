<template>
    <section class="section features" id="features" aria-label="features">
        <div class="container">

            <p class="section-subtitle">Our App Feature</p>

            <h2 class="h2 section-title">Awesome Features</h2>

            <ul class="features-list">
                <li class="features-item" v-for="feature in features" :key="feature.title">
                    <div class="features-card">
                        <div class="card-icon">
                            <ion-icon :name="feature.icon" aria-hidden="true"></ion-icon>
                        </div>
                        <h3 class="card-title">{{ feature.title }}</h3>
                        <p class="card-text">{{ feature.description }}</p>
                    </div>
                </li>
            </ul>

        </div>
    </section>
</template>

<script>
import { features } from '../../utils/constants';

export default {
    data() {
        return {
            features: features,
        };
    },
};
</script>