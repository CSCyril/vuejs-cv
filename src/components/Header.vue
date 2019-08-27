<template>
    <div id="header">
        <div class="container">
            <div class="head">
                <h1>{{ infos.firstName }} {{ infos.lastName }}</h1>
                <h4>{{ infos.headline }}</h4>
                <div class="button-wrapper">
                    <a class="" href="#about"><font-awesome-icon icon="eye" /><span> Voir mon profil</span></a>
                    <a class="" href="#contact"><font-awesome-icon icon="envelope" /><span> Me contacter</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header',
    props: {
        infos: Array
    },
    methods: {
    }
}
</script>

<style>
#header {
    height: 100%;
    text-align: center;
}

.head {
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 0;
    right: 0;
}

#header h1 {
    color: #1B75BC;
    text-transform: uppercase;
    font-size: 5em;
    font-weight: 800;
}

#header h4 {
    color: #fff;
    font-size: 1.3em;
    margin-bottom: 50px;
    font-weight: 400;
}

#header .button-wrapper a {
    border: 1px solid #fff;
    text-transform: uppercase;
    color: #fff;
    padding: 17px 30px;
}

#header .button-wrapper a:first-child {
    background: #fff;
    margin-right: 20px;
}

#header .button-wrapper a:first-child > span, #header .button-wrapper a:first-child > svg {
    color: #191a1b;
}
</style>
