<template>
    <div id="contact">
        <b-container>
            <div class="header-section">
                <h2 class="separator">Me contacter</h2>
            </div>
            <div class="info-section">
                <b-row>
                    <b-col class="text-center contact-info">
                        <ul>
                            <li><font-awesome-icon icon="phone" size="3x" /></li>
                            <li>06 86 43 89 58</li>
                            <li><font-awesome-icon :icon="['far', 'dot-circle']" />TELEPHONE</li>
                        </ul>
                    </b-col>
                    <b-col class="text-center contact-info">
                        <ul>
                            <li><font-awesome-icon icon="map-marker-alt" size="3x" /></li>
                            <li>Vendenheim, FRANCE</li>
                            <li><font-awesome-icon :icon="['far', 'dot-circle']" />ADRESSE</li>
                        </ul>
                    </b-col>
                    <b-col class="text-center contact-info">
                        <ul>
                            <li><font-awesome-icon icon="envelope" size="3x" /></li>
                            <li>greinercyr@gmail.com</li>
                            <li><font-awesome-icon :icon="['far', 'dot-circle']" />EMAIL</li>
                        </ul>
                    </b-col>
                </b-row>
            </div>
            <div class="form-section info-section">
                <b-form @submit="onSubmit">
                    <b-form-group>
                        <div class="form-line form-group">
                            <b-row>
                                <b-col cols="6"><b-form-input id="input-1" v-model="form.name" required placeholder="Nom"></b-form-input></b-col>
                                <b-col cols="6"><b-form-input id="input-2" v-model="form.mail" type="email" required placeholder="Email"></b-form-input></b-col>
                            </b-row>
                            <!-- <div class="form-line-left">
                                <b-form-input class="first-form-line" id="input-1" v-model="form.name" required placeholder="Nom"></b-form-input>
                            </div>
                            <div class="form-line-right">
                                <b-form-input class="first-form-line" id="input-2" v-model="form.mail" type="email" required placeholder="Email"></b-form-input>
                            </div> -->
                        </div>
                        <div class="form-line form-group">
                            <b-form-input id="input-3" v-model="form.subject" required placeholder="Sujet"></b-form-input>
                        </div>
                        <div class="form-line form-group">
                            <b-form-input id="input-4" v-model="form.message" required placeholder="Message"></b-form-input>
                        </div>
                    </b-form-group>
                    <b-row>
                        <b-col class="text-center">
                            <b-button class="submit-button" type="submit"><font-awesome-icon icon="paper-plane" style="color: #fff" /><span>Envoyer</span></b-button>
                        </b-col>
                    </b-row>
                </b-form>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'contact',
    props: {
        general: Array,
    },
    data() {
        return {
            form: {
                name: '',
                mail: '',
                subject: '',
                message: '',
            }
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.form))
        }
    }
}
</script>


<style>
#contact {
    background: #f7f8fa;
    overflow: hidden;
}

.form-section {
    padding-bottom: 50px !important;
    margin-bottom: 100px !important;
}

.info-section {
    background: #fff;
    border-top: 5px solid #2c3e50;
    padding: 50px 30px 0;
    margin-bottom: 50px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
}

.info-section ul {
    list-style-type: none;
}

#contact svg {
    color: #1B75BC;
}

.contact-info {
    margin-bottom: 40px;
}

.first-form-line {
    width: 50%;
    float: left;
}

.form-line {
    width: 100%;
}

.form-line input {
    height: 50px;
    background: rgba(61, 64, 79, 0.1);
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid #2c3e50;
}

#input-4 {
    height: 200px;
}

.form-control:focus {
    box-shadow: none;
    background: rgba(61, 64, 79, 0.1);
}

.submit-button {
    display: inline-block;
    position: relative;
    border: 1px solid #1B75BC;
    background: transparent;
    color: #fff;
    border-radius: 0;
    padding: 15px 30px;
}

.submit-button:hover {
    background: transparent;
}

.submit-button::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0.5em;
    top: -0.5em;
    border-radius: 0;
    border: 1px solid #fff;
    z-index: 1;
    background: #1B75BC;
    -webkit-transition: left 150ms ease-out, top 150ms ease-out;
    -moz-transition: left 150ms ease-out, top 150ms ease-out;
    -o-transition: left 150ms ease-out, top 150ms ease-out;
    transition: left 150ms ease-out, top 150ms ease-out;
}

.submit-button svg, .submit-button span {
    left: 0.5em;
    top: -0.5em;
    z-index: 2;
    display: inline-block;
    position: relative;
    -webkit-transition: left 150ms ease-out, top 150ms ease-out;
    -moz-transition: left 150ms ease-out, top 150ms ease-out;
    -o-transition: left 150ms ease-out, top 150ms ease-out;
    transition: left 150ms ease-out, top 150ms ease-out;
}

.submit-button:hover::after, .submit-button:hover span, .submit-button:hover svg  {
    left: 0.25em;
    top: -0.25em;
}

.submit-button svg {
    color: #fff;
}

.submit-button span {
    padding-left: 10px;
}
</style>
