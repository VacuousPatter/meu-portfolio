<template>
  <b-card>
    <b-card-body class="flex">
      <b-card-title class="d-block text-center">
        {{ serviceName }}
      </b-card-title>
      <b-card-text class="text-center mb-0">
        {{ serviceDescription }}
      </b-card-text>
      <b-button
        class="button"
        no-prefetch
        :to="{ path: '/projetos', query: { 'service-type': serviceId } }"
      >
        Projetos
      </b-button>
    </b-card-body>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    serviceName: {
      type: String,
      default: undefined
    },
    serviceDescription: { type: String, default: undefined },
    serviceId: { type: String, default: undefined }
  }
})
</script>

<style scoped>
.card {
  width: 100%;
  height: 220px;
  border: 2px solid #a29bfe;
  position: relative;
  background-image: none;
  transition: all ease 0.3s;
  margin-top: 15px;
}

.flex {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.button {
  background-color: #6c5ce7 !important;
  color: #fff;
  height: 0px;
  opacity: 0;
  padding: 0px;
  border-width: 0px;
  margin-top: 0px;
  transition: all 0.3s;
}

.card:hover .button {
  height: 38px;
  opacity: 1;
  padding: 6px 12px 6px 12px;
  border-width: 1px;
  margin-top: 15px;
}

.button:focus {
  border-color: #6c5ce7 !important;
}

.button:active {
  background-color: #6c5ce7 !important;
  border-color: #6c5ce7 !important;
  color: #fff;
}
</style>
