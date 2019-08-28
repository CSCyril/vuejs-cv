<template>
    <div id="jobs">
        <div class="container">
            <div class="job row">
                <div class="col-md-12 text-center">
                    <h3 class="separator">Experiences professionnelles</h3>
                </div>
                <div class="single-job col-md-6" v-for="job in jobs">
                    <ul>
                        <li class="title">{{ job.jobTitle }}</li>
                        <li class="date">{{ job.dateRange }}</li>
                        <li class="place">
                            <font-awesome-icon :icon="['far', 'dot-circle']" />
                            <span>{{ job.companyName }}</span>
                        </li>
                        <li class="description">{{ job.description }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'jobs',
    props: {
        jobs: Array
    },
    methods: {
    }
}
</script>

<style>
#jobs {
    color: #fff;
}

.single-job ul {
    background: rgba(0, 0, 0, 0.15);
    padding: 39px 30px 40px;
    border-bottom: 5px solid #2c3e50;
    min-height: 275px;
    list-style-type: none;
}

.single-job li {
    margin-bottom: 10px;
}

.title {
    color: #1B75BC;
}

.place svg {
    margin-right: 10px;
    color: #1B75BC;
}

.single-job .place {
    padding-bottom: 15px;
}
</style>