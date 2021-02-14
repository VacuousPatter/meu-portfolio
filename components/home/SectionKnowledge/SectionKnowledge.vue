<template>
  <section id="conhecimentos">
    <b-container class="py-4">
      <b-row>
        <b-col cols="12">
          <h2 class="text-center">
            Conhecimentos
          </h2>
        </b-col>
      </b-row>
      <b-row class="mt-3 add-padding">
        <b-col
          v-for="categoria in knowledge"
          :key="categoria.name"
          cols="12"
          md="6"
          lg="4"
        >
          <b-card :title="categoria.name">
            <b-row
              v-for="conhecimento in categoria.values"
              :key="conhecimento.name"
            >
              <b-col cols="12">
                <p class="mb-0">
                  {{ conhecimento.name }}
                </p>
                <b-progress max="100" class="mb-3">
                  <b-progress-bar :value="conhecimento.value" />
                </b-progress>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
const knowledge = require('../../../static/data/knowledge.json')
export default Vue.extend({
  data () {
    return {
      knowledge
    }
  }
})
</script>

<style scoped>
h2 {
  color: #6c5ce7;
}

.card {
  border-color: #a29bfe;
  border-width: 2px;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.025);
}

.progress-bar {
  background-color: #6c5ce7;
}

.row.add-padding > * {
  padding: 10px;
}
</style>
