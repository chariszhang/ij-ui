<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { reactive } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
function change() {
}
const dataRef = reactive({
  text: ''
})
</script>

<template>
<div style="display: flex;">
    <form-interface label="text：" flex="33">
      <form-item
        type="text"
        v-model="dataRef.text"
        @change="change"
        :validate-rule="{ required: true, maxLength: 13 }"
      />
    </form-interface>
    <form-interface label="text：" flex="33">
      <form-item
        type="text"
        v-model="dataRef.text"
        @change="change"
        :validate-rule="{ required: true, maxLength: 13 }"
      />
    </form-interface>
  </div>
  

  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
