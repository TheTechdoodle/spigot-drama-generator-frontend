import Vue from 'vue';
import App from './App.vue';
import loadData from './dataLoader';
import Vuetify from 'vuetify/lib';
import localforage from 'localforage';

localforage.config({
    name: 'spigot-drama-generator-frontend'
});

Vue.config.productionTip = false;
Vue.use(Vuetify);

(async() =>
{
    const theme = await localforage.getItem('theme');
    let dramaData = null;
    try
    {
        dramaData = await loadData();
    }
    catch(e)
    {
    }
    Vue.prototype.$dramaData = dramaData;
    
    new Vue({
        vuetify: new Vuetify({
            theme: {
                dark: theme !== 'light'
            }
        }),
        render: function(h)
        {
            return h(App);
        }
    }).$mount('#app');
})();
