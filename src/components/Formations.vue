<template>
    <div id="formations">
        <div class="container">
            <div class="formation row">
                <div class="col-md-12 text-center">
                    <h3 class="separator">Education</h3>
                </div>
                <div class="single-formation col-md-6" v-for="formation in formations">
                    <ul>
                        <li class="degree">{{ formation.degree }} {{ formation.degreeSpec }}</li>
                        <li class="date">{{ formation.dateRange }}</li>
                        <li class="place">
                            <font-awesome-icon :icon="['far', 'dot-circle']" />
                            <span>{{ formation.schoolName }}</span>
                        </li>
                        <li class="description">{{ formation.description }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'formations',
    props: {
        formations: Array
    },
    methods: {
    }
}
</script>

<style>
#formations {
    color: #fff;
}
.single-formation ul {
    background: rgba(0, 0, 0, 0.15);
    padding: 39px 30px 40px;
    border-bottom: 5px solid #2c3e50;
    list-style-type: none;
}
.degree {
    color: #1B75BC;
}
.date {
    background: rgba(255, 255, 255, 0.075);
    color: rgba(255, 255, 255, 0.6);
    display: inline-block;
    padding: 3px 10px;
}
.single-formation li {
    margin-bottom: 10px;
}
.place {
    text-transform: uppercase;
    list-style-type: none;
}
.place svg {
    margin-right: 10px;
    color: #1B75BC;
}
</style>