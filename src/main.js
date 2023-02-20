import { createApp } from 'vue';
import { createPinia } from 'pinia';

import 'bootstrap';
import { LoadingPlugin } from 'vue-loading-overlay';
import VueAwesomePaginate from 'vue-awesome-paginate';

import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'vue-awesome-paginate/dist/style.css';
import 'vue-loading-overlay/dist/css/index.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import Router from './router';
import App from './App.vue';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

library.add(faSpinner, faXmark);

createApp(App)
  .use(createPinia())
  .use(Router)
  .use(LoadingPlugin)
  .use(VueAwesomePaginate)
  .component('Form', Form)
  .component('Field', Field)
  .component('ErrorMessage', ErrorMessage)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
