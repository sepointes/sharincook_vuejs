import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
const requireComponent = require.context(
    './components', // the relative path of the directory to search
    false, // subdirectories will not be searched
    /Base[A-Z]\w+\.(vue|js)$/ // regular expression that searches for components starting with "Base" and ending in .vue or .js
)

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)

    const componentName = upperFirst(
        camelCase(
            fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
        )
    )

    Vue.component(
        componentName,
        componentConfig.default || componentConfig
    )
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
