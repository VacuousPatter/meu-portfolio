<template>
  <div class="header">
    <div>
      <h1>Projetos</h1>
      <p class="description">
        Aqui você vai encontrar projetos reais/fictícios feitos por mim afim de
        comprovar meu conhecimento.
      </p>
    </div>
    <b-container>
      <b-row align-h="center">
        <b-col cols="12" md="6" lg="5">
          <b-form-input
            :value="searchForm.name"
            placeholder="Procurar Projeto"
            @input="setSearchFormName"
          />
        </b-col>
      </b-row>
      <b-row v-show="moreFiltersOpen" class="mt-3" align-h="center">
        <b-col cols="8" md="6" lg="4" xl="3">
          <b-form-group v-slot="{ ariaDescribedby }" label="Categorias">
            <b-form-checkbox-group
              id="checkbox-group-categories"
              :checked="searchForm.categories"
              :options="projectCategories.categories"
              text-field="name"
              value-field="id"
              :aria-describedby="ariaDescribedby"
              name="categorias"
              stacked
              @input="setSearchFormCategories"
            />
          </b-form-group>
        </b-col>
        <b-col cols="8" md="6" lg="4" xl="3">
          <b-form-group v-slot="{ ariaDescribedby }" label="Tecnologias">
            <b-form-checkbox-group
              id="checkbox-group-technologies"
              :checked="searchForm.technologies"
              :options="projectCategories.technologies"
              text-field="name"
              value-field="id"
              :aria-describedby="ariaDescribedby"
              name="tecnologias"
              stacked
              @input="setSearchFormTechnologies"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col
          cols="auto"
          class="text-center mais-filtros"
          @click="moreFiltersOpen = !moreFiltersOpen"
        >
          <b-icon
            :icon="moreFiltersOpen ? 'arrow-up-circle' : 'arrow-down-circle'"
            scale="1.5"
          />
          <br>
          <span>{{ moreFiltersOpen ? 'Menos Filtros' : 'Mais Filtros' }}</span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import vuex from 'vuex'

const projectCategories = require('../../../static/data/project-categories.json')

export default Vue.extend({
  data () {
    return {
      projectCategories,

      moreFiltersOpen: false
    }
  },

  computed: {
    ...vuex.mapState('projetos', ['searchForm'])
  },

  methods: {
    ...vuex.mapMutations('projetos', [
      'setSearchFormCategories',
      'setSearchFormName',
      'setSearchFormTechnologies'
    ])
  }
})
</script>

<style scoped>
.header {
  background: linear-gradient(90.66deg, #9795ef 0%, #dab6da 100%);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 50px;
  padding-bottom: 10px;
  text-align: center;
  color: #fff;
}

.header > h1 {
  font-size: 48px;
  font-family: Ubuntu, sans-serif;
  font-weight: 700;
}

.header > p.description {
  font-size: 18px;
  font-family: Ubuntu, sans-serif;
  font-weight: 300;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
}

.header .container {
  margin-top: 25px;
}

.header .mais-filtros {
  padding-top: 15px;
  cursor: pointer;
}

.header .mais-filtros span {
  font-weight: 300;
  font-size: 15px;
  margin-top: 5px;
}
</style>
