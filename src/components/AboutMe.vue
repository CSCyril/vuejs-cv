<template>
    <div id="about">
        <div class="container">
            <div class="header-section">
                <h2 class="separator">A propos de moi</h2>
            </div>
            <div class="body-section">
                <div class="description">
                    <p class="col-lg-8 offset-lg-2">{{ general.description }}</p>
                </div>
                <div class="profile row">
                    <div class="informations col-lg-7">
                        <div class="personnal row">
                            <ul class="col-md-5">
                                <li><font-awesome-icon :icon="['far', 'dot-circle']" /><span>Prénom -</span> {{ general.firstName }}</li>
                                <li><font-awesome-icon :icon="['far', 'dot-circle']" /><span>Nom -</span> {{ general.lastName }}</li>
                                <li><font-awesome-icon :icon="['far', 'dot-circle']" /><span>Anniversaire -</span> {{ details.birthday }}</li>
                                <li><font-awesome-icon :icon="['far', 'dot-circle']" /><span>Nationnalité -</span> Français</li>
                            </ul>
                            <ul class="col-md-7">
                                <li><font-awesome-icon :icon="['far', 'dot-circle']" /><span>Téléphone -</span> 06 86 43 89 58</li>
                                <li><font-awesome-icon :icon="['far', 'dot-circle']" /><span>Mail -</span> {{ details.mail }}</li>
                                <!-- <li><font-awesome-icon :icon="['far', 'dot-circle']" /><span>Localisation -</span> {{ general.location }}</li> -->
                                <li><font-awesome-icon :icon="['far', 'dot-circle']" /><span>Localisation -</span> Strasbourg, France</li>
                                <li><font-awesome-icon :icon="['far', 'dot-circle']" /><span>Langues -</span> Français, Anglais, Allemand</li>                        
                            </ul>
                            <div class="col-md-12 social">
                                <a href="#"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
                                <a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
                                <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
                                <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                            </div>
                            <div class="col-md-12 infos">
                                <p>/!\ INTEGRATION RECOMMANDATIONS LINKEDIN
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="picture col-lg-5">
                        <!-- <img class="img-fluid" src="../assets/profile.jpg" /> -->
                        <img class="img-fluid" v-bind:src="general.imgUrl" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'about',
    props: {
        general: Array,
        details: Array
    },
    methods: {
    }
}
</script>

<style>
#about {
    background: #f7f8fa;
}

.header-section h2 {
    text-align: left;
    color: #191a1b;
}

.body-section p {
    background: #fff;
    padding: 30px 30px;
    border-left: 5px solid #1B75BC;
    color: #727271;
    line-height: 2;
    margin-bottom: 50px;
}

.personnal span {
    color: #191a1b;
}

.personnal ul {
    margin-bottom: 25px;
}

.personnal li {
    color: #727271;
    list-style: none;
    margin-bottom: 15px; 
}

.personnal svg {
    color: #1B75BC;
    margin-right: 10px;
}

.social {
    margin-bottom: 40px;
}

.social a {
    border: 1px solid #1B75BC;
    color: #1B75BC;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    position: relative;
    display: inline-block;
    margin-right: 10px;
    transition: 0.4s ease-out;
}

.social a svg {
    position: absolute;
    left:50%;
    top: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: inherit;
}

.social a:hover {
    background: #1B75BC;
    color: #fff;
}

.picture img {
    border-right: 5px solid #1B75BC;
    width: 100%;
}
</style>