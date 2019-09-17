<template>
    <div id="hobbies">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h3 class="separator">Centres d'intérêts</h3>
                </div>
                <div id="hobby" class="col-md-12">
                    <div class="row">
                        <div class="col-sm-6 col-md-4 text-center">
                            <font-awesome-icon icon="gamepad" size="3x" />
                            <p>Jeux vidéos</p>
                        </div>
                        <div class="col-sm-6 col-md-4 text-center">
                            <font-awesome-icon icon="robot" size="3x" />
                            <p>Nouvelles technologies</p>
                        </div>
                        <div class="col-sm-6 col-md-4 text-center">
                            <font-awesome-icon icon="camera" size="3x" />
                            <p>Photographie</p>
                        </div>
                        <div class="col-sm-6 col-md-4 text-center">
                            <font-awesome-icon icon="bicycle" size="3x" />
                            <p>Vélo</p>
                        </div>
                        <div class="col-sm-6 col-md-4 text-center">
                            <font-awesome-icon icon="laptop-code" size="3x" />
                            <p>Développement</p>
                        </div>
                        <div class="col-sm-6 col-md-4 text-center">
                            <font-awesome-icon icon="dog" size="3x" />
                            <p>Animaux</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hobbies',
    methods: {
    }
}
</script>

<style>
#hobbies {
    color: #fff;
    margin-bottom: 100px;
}

#hobbies svg {
    color: #1B75BC;
}

#hobby .row {
    background: rgba(0, 0, 0, 0.15);
    border-bottom: 5px solid #2c3e50;
    padding: 50px 30px 0;
}

#hobby .row div {
    margin-bottom: 40px;
}

#hobby .row p {
    text-transform: uppercase;
    margin-top: 10px;
}
</style>