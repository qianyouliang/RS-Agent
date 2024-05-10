import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Cesium from 'cesium'
import * as d3 from 'd3'
import * as echarts from 'echarts'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'ol/ol.css'
import { Map, View } from 'ol'
import * as THREE from 'three'
import { createVuetify } from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import './style.css'

const app = createApp(App)
const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(),
  routes: []
})
const vuetify = createVuetify()

app.use(pinia)
app.use(router)
app.use(Antd)
app.use(ElementPlus)
app.use(vuetify)

app.mount('#app')

// 暴露全局变量
window.Cesium = Cesium
window.d3 = d3
window.echarts = echarts
window.L = L
window.Map = Map
window.View = View
window.THREE = THREE