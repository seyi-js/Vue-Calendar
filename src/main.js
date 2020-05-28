import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app/'
import 'firebase/firestore'

Vue.use(VueTextareaAutosize)
Vue.config.productionTip = false
firebase.initializeApp( {
  apiKey: "AIzaSyDdWx3DLJohFyN4tRN6YSedqOjlQu0uSkY",
  authDomain: "calendar-8c89a.firebaseapp.com",
  databaseURL: "https://calendar-8c89a.firebaseio.com",
  projectId: "calendar-8c89a",
  storageBucket: "calendar-8c89a.appspot.com",
  messagingSenderId: "813330732835",
  appId: "1:813330732835:web:3a7b6be3d6458ead1f9e96"
} );

export const db = firebase.firestore();
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
