<template>
  <div>
    <b-navbar class="header" toggleable="md" type="dark" sticky>
      <b-navbar-brand to="/" no-prefetch>
        Maycon Pinto
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" if="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item no-prefetch to="/#sobre">
            Sobre
          </b-nav-item>
          <b-nav-item no-prefetch to="/#servicos">
            Serviços
          </b-nav-item>
          <b-nav-item no-prefetch to="/#conhecimentos">
            Conhecimentos
          </b-nav-item>
          <b-nav-item no-prefetch to="/projetos">
            Projetos
          </b-nav-item>
          <b-nav-item no-prefetch to="/contato">
            Contato
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  components: {}
})
</script>

<style scoped>
.header {
  background: linear-gradient(90.11deg, #9795ef 0%, #dab6da 100%);
}
</style>
