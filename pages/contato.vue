<template>
  <div class="contato-wrapper">
    <div class="header">
      <h1>Contato</h1>
      <p class="description">
        Quer me contratar ou fazer um orçamento? Entre em contato comigo.
      </p>
    </div>
    <b-container class="mt-4">
      <b-row>
        <b-col cols="12" md="6">
          <h2>Redes Sociais</h2>
          <RedeSocial
            v-for="contato in contact.socialNetworks"
            :key="contato.name"
            :link="contato.url"
            :icon="contato.icon"
            :username="contato.username"
            :name="contato.name"
          />
        </b-col>
        <b-col cols="12" md="6">
          <h2>Contato Direto</h2>
          <RedeSocial
            v-for="contato in contact.directContact"
            :key="contato.name"
            :link="contato.url"
            :icon="contato.icon"
            :username="contato.username"
            :name="contato.name"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import RedeSocial from '../components/contato/RedeSocial/RedeSocial.vue'
const contact = require('../static/data/contact.json')

export default Vue.extend({
  components: { RedeSocial },
  data () {
    return {
      contact
    }
  }
})
</script>

<style scoped>
.contato-wrapper {
  background-color: #dfe6e9;
  min-height: calc(100vh - 56px);
}

.header {
  background: linear-gradient(90.66deg, #9795ef 0%, #dab6da 100%);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 50px;
  text-align: center;
  color: #fff;
}

.header h1 {
  font-size: 48px;
  font-family: Ubuntu, sans-serif;
  font-weight: 700;
}

.header p.description {
  font-size: 18px;
  font-family: Ubuntu, sans-serif;
  font-weight: 300;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
}

h2 {
  font-size: 24px;
  font-weight: 400;
  color: #6c5ce7;
  font-family: Ubuntu, sans-serif;
  margin-bottom: 15px;
}
</style>
