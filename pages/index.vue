<template>
  <div class="home-wrapper">
    <SectionPresentation />
    <SectionAbout />
    <SectionServices />
    <SectionKnowledge />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import SectionPresentation from '../components/home/SectionPresentation/SectionPresentation.vue'
import SectionAbout from '../components/home/SectionAbout/SectionAbout.vue'
import SectionServices from '../components/home/SectionServices/SectionServices.vue'
import SectionKnowledge from '../components/home/SectionKnowledge/SectionKnowledge.vue'

export default Vue.extend({
  components: {
    SectionPresentation,
    SectionAbout,
    SectionServices,
    SectionKnowledge
  }
})
</script>

<style scoped>
.home-wrapper {
  background-color: #dfe6e9;
  min-height: calc(100vh - 56px);
}
</style>
