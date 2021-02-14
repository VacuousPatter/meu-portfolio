<template>
  <section>
    <b-card
      id="sobre"
      class="card-about"
      :class="{ open: cardOpen }"
      :img-left="ImageOnLeft"
      img-width="256"
      :img-height="ImageOnLeft ? 256 : undefined"
      img-src="../../../static/images/foto-perfil.png"
      title="Sobre Mim"
    >
      <b-card-body>
        <b-card-text>
          Sou um desenvolvedor web que é apaixonado pelo que faz e ama novas
          tecnologias. E nas horas vagas gosto daquela gameplay diferenciada no
          Valorant.
        </b-card-text>
      </b-card-body>

      <b-card-body>
        <a
          v-for="contato in contact.socialNetworks"
          :key="contato.name"
          v-b-tooltip.hover="contato.name"
          :href="contato.url"
          target="_blank"
          class="card-link"
        >
          <b-icon :icon="contato.icon" />
        </a>
      </b-card-body>
    </b-card>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

const contact = require('../../../static/data/contact.json')

export default Vue.extend({
  components: {},
  data () {
    return {
      cardOpen: false,
      contact
    }
  },
  computed: {
    ImageOnLeft () {
      return window.innerWidth > 630
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 25) {
        this.cardOpen = true
      } else {
        this.cardOpen = false
      }
    })
  }
})
</script>

<style scoped>
section {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.card-about {
  width: 80%;
  max-width: 800px;
  margin-top: 0px;
  opacity: 0;
  transition: all 0.5s;
}

.card-about.open {
  margin-top: -128px;
  opacity: 1;
}

.card-link {
  font-size: 24px;
  color: #7d7cc5;
}
</style>
