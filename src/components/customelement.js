import { defineCustomElement } from 'vue'


import CustomElement from './customelement.vue'

const CurrentTimeElement = defineCustomElement(CustomElement)

customElements.define('custom-element', CurrentTimeElement)
