import Vue from 'vue';
import App from './App.vue';
import loadData from './dataLoader';

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
        render: function(h)
        {
            return h(App);
        }
    }).$mount('#app');
})();
