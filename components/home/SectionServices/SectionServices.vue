<template>
  <section id="servicos">
    <b-container class="py-4">
      <b-row>
        <b-col cols="12">
          <h2 class="text-center">
            Serviços
          </h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          v-for="service in services"
          :key="service.id"
          cols="12"
          md="6"
          lg="4"
        >
          <ServiceCard
            :service-name="service.name"
            :service-description="service.description"
            :service-id="service.id"
          />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import ServiceCard from './ServiceCard/ServiceCard.vue'
const services = require('../../../static/data/services.json')

export default Vue.extend({
  components: { ServiceCard },

  data () {
    return {
      services
    }
  }
})
</script>

<style scoped>
h2 {
  color: #6c5ce7;
}
</style>
