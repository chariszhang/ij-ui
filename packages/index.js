import formInterface from './forms/form-interface.vue';
import formItem from './forms/form-item.vue';
import './style/index.less'
export default function (Vue) {
    Vue.component('formInterface', formInterface);
    Vue.component('formItem', formItem);
}
