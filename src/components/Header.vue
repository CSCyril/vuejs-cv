<template>
    <div id="header">
        <div class="container">
            <div class="top-header">
                <vue-scroll-progress-bar @complete="handleComplete" height="0.2rem" backgroundColor="#1B75BC" />
                <div class="inner-top-header container">
                    <div class="top-header-left">
                        <h5 class="top-header-title">CG.</h5>
                    </div>
                    <div class="top-header-right">
                    </div>
                </div>
            </div>
            <div class="head">
                <!--<h1>{{ infos.firstName }} {{ infos.lastName }}</h1>-->
                <h1>Cyrille GREINER</h1>
                <!--<h4>{{ infos.headline }}</h4>-->
                <h4>{{ jobs[0].jobTitle }}</h4>
                <div class="button-wrapper">
                    <a class="button-about" href="#about"><font-awesome-icon icon="eye" /><span> Voir mon profil</span></a>
                    <a class="button-contact" href="#contact"><font-awesome-icon icon="envelope" /><span> Me contacter</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header',
    props: {
        infos: Array,
        jobs: Array
    },
    methods: {
    }
}
</script>

<style>
@media (max-width: 575px) {
    #header .head {
        width: 90%;
    }
    #header .head .button-wrapper a {
        display: block;
        margin-bottom: 20px;
    }
    #header .head .button-wrapper .button-about {
        width: 100%;
    }
}

#header {
    height: 100%;
    text-align: center;
}

.head {
    width: 90%;
    position: absolute;
    top: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    left: 50%;
    right: 0;
}

#header .container {
    height: 100%;
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

.top-header {
    position: fixed;
    background: #191a1b;
    z-index: 999;
    width: 100%;
    left: 0;
    padding-top: 0.2rem;
    height: calculate(70px + 0.2rem);
}

.inner-top-header {
    padding-top: 12px;
    padding-bottom: 12px;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.top-header-left {
    text-align: left;
}

.top-header-title {
    color: #1B75BC;
    position: relative;
    font-weight: 800;
    line-height: 1.3;
    font-size: 2em;
}

.top-header-title::before {
    content: "";
    display: block;
    height: 100%;
    width: 2px;
    left: -12px;
    top: 0;
    position: absolute;
    background: #fff;
}

.top-header-title::after {
    content: "";
    display: block;
    height: 2px;
    width: calc(100% + 25px);
    bottom: -2px;
    left: -12px;
    background: #fff;
    position: absolute;
}

.button-wrapper a {
    border: 1px solid #fff;
    display: inline-block;
    text-transform: uppercase;
    color: #fff;
    padding: 17px 30px;
    position: relative;
}

.button-wrapper svg {
    margin-right: 10px;
}

.button-wrapper a:first-child {
    margin-right: 20px; 
}

.button-wrapper a:first-child::after {
    background: #fff;
}

.button-wrapper a::after {
    content: "";
    z-index: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    background: #191a1b;
    border: 1px solid #fff;
    left: 0.5em;
    top: -0.5em;
    -webkit-transition: left 150ms ease-out, top 150ms ease-out;
    -moz-transition: left 150ms ease-out, top 150ms ease-out;
    -o-transition: left 150ms ease-out, top 150ms ease-out;
    transition: left 150ms ease-out, top 150ms ease-out;
}

.button-wrapper a:first-child span, .button-wrapper a:first-child svg {
    color: #191a1b;
}

.button-wrapper a span, .button-wrapper a svg {
    z-index: 2;
    position: relative;
    display: inline-block;
    top: -0.5em;
    left: 0.5em;
    -webkit-transition: left 150ms ease-out, top 150ms ease-out;
    -moz-transition: left 150ms ease-out, top 150ms ease-out;
    -o-transition: left 150ms ease-out, top 150ms ease-out;
    transition: left 150ms ease-out, top 150ms ease-out;
}

.button-wrapper a:hover::after, .button-wrapper a:hover span, .button-wrapper a:hover svg {
    left: 0.25em;
    top: -0.25em;
}
</style>
