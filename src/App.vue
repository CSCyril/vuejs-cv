<template>
  <div id="app">
    <Header :infos="resume[0].general" />
    <AboutMe :general="resume[0].general" :details="resume[0].details" />
    <div id="myprofile">
      <div class="container">
        <div class="cv text-right">
          <h2 class="separator">Mon profil</h2>
        </div>
        <Formations :formations="resume[0].schools" />
        <Jobs :jobs="resume[0].jobs" />
        <Hobbies/>
      </div>
    </div>
    <Contact :general="resume[0].general" />
  </div>
</template>

<script>
// componenets
import Jobs from './components/Jobs.vue'
import Formations from './components/Formations.vue'
import AboutMe from './components/AboutMe.vue'
import Header from './components/Header.vue'
import Hobbies from './components/Hobbies.vue'
import Contact from './components/Contact.vue'

// models
import msg from './models/Message.js'
import cv from './models/Cv.js'
import { log } from 'util';

export default {
  name: 'app',
  components: {
    Jobs,
    Formations,
    AboutMe,
    Header,
    Hobbies,
    Contact
  },
  data () {
    return {
      resume: ''
    }
  },
  created () {
    this.getCV()
  },
  methods: {
    getCV () {
      return cv.getInitCV()
        .then(cv => this.resume = cv)
    }
  }
}
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  height: 100%;
}

html, body {
  background: #191a1b;
  height: 100%;
}

.separator::before, .separator::after {
  content: "";
  display: block;
  width: 50%;
  height: 4px;
  background: #1B75BC;
  position: absolute;
}

.separator::before {
  top: 0;
  left: 0;
}
.separator::after {
  right: 0;
  bottom: 0;
}

h2 {
  text-transform: uppercase;
  font-weight: 800;
  font-size: 3em;
  margin: 70px 0 70px 0;
  padding: 20px 0 20px 0;
  display: inline-block;
  position: relative;
}

h3 {
  text-transform: uppercase;
  font-weight: 800;
  font-size: 1.5em;
  margin: 70px 0 70px 0;
  padding: 20px 0 20px 0;
  display: inline-block;
  position: relative;
}

.cv h2:first-child {
  color: #fff;
}
</style>
