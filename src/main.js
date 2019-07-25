import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faEye, faDog, faLaptopCode, faGamepad, faRobot, faCamera, faBicycle, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faDotCircle} from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn, faInstagram, faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope, faEye, faDotCircle, faDog, faLaptopCode, faGamepad, faRobot, faCamera, faBicycle, faPhone, faMapMarkerAlt, faLinkedinIn, faInstagram, faFacebookF, faTwitter, faPaperPlane)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
