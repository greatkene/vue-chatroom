<template>
    <section class="section about" id="about" aria-label="about">
        <div class="container">

            <figure class="about-banner">
                <img src="../../assets/images/about-sec.svg" loading="lazy" alt="about banner">
            </figure>

            <div class="about-content">
                <p class="section-subtitle">Our Acquaintance</p>
                <h2 class="section-title">Chat Moderation</h2>
                <p class="section-text">
                    Immerse yourself in a dynamic community of like-minded individuals, where lively discussions take place
                    around the clock. Explore an array of chat rooms tailored to various topics, from hobbies and
                    entertainment to technology and beyond.
                </p>

                <ul class="about-list">
                    <li class="about-item">
                        <div class="item-icon">
                            <ion-icon name="folder" aria-hidden="true"></ion-icon>
                        </div>

                        <div>
                            <h3 class="item-title">Stay Connected In Real-Time</h3>

                            <p class="item-text">
                                Lorem ipsum dolor sit amet, consec tetur adipiscing elit Lorem ipsum dolor sit amet, consec
                                tetur
                                adipiscing elit.
                            </p>
                        </div>
                    </li>

                    <li class="about-item">
                        <div class="item-icon">
                            <ion-icon name="pie-chart" aria-hidden="true"></ion-icon>
                        </div>

                        <div>
                            <h3 class="h3 item-title">Easy to Navigate</h3>

                            <p class="item-text">
                                Lorem ipsum dolor sit amet, consec tetur adipiscing elit Lorem ipsum dolor sit amet, consec
                                tetur
                                adipiscing elit.
                            </p>
                        </div>

                    </li>

                </ul>

                <RouterLink to="/register" class="btn btn-secondary">Join us</RouterLink>

            </div>

        </div>
    </section>
</template>