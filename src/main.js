import Vue from 'vue';
import App from './App.vue';
import loadData from './dataLoader';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

(async () =>
{
    let dramaData = null;
    try
    {
        dramaData = await loadData();
    }
    catch(e) {}
    Vue.prototype.$dramaData = dramaData;
    
    new Vue({
        vuetify,

        render: function(h)
        {
            return h(App);
        }
    }).$mount('#app');
})();
