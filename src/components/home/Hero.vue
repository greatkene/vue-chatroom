<template>
    <section class="section hero" aria-label="hero" id="home">
        <div class="container">

            <div class="hero-content">
                <h1 class="h1 hero-title">Make an Impression & Chat More With GetChatty</h1>
                <p class="section-text">
                    Engage, connect, and discover a vibrant world of conversations on our chat platform. Whether you're
                    seeking a place to meet new people, discuss shared interests, or simply unwind and have fun, we've got
                    you covered.
                </p>

                <div class="btn-list">
                    <RouterLink class="btn btn-primary" to="/register">
                        Get Started
                    </RouterLink>
                    <RouterLink class="btn btn-secondary" to="/login">
                        Login
                    </RouterLink>
                </div>

            </div>

            <figure class="hero-banner">
                <img src="../../assets/images/hero-banner.svg" width="769" height="804" alt="hero banner" class="w-100">
            </figure>

        </div>
    </section>
</template>