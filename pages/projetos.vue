<template>
  <div class="projetos-wrapper">
    <Header />

    <b-container class="py-4">
      <b-row v-if="projectsFiltred.length === 0">
        <b-col cols="12">
          <b-alert variant="danger" show>
            Nenhum projeto encontrado nos filtros aplicados!
          </b-alert>
        </b-col>
      </b-row>
      <b-row v-for="project in projectsFiltred" :key="project.id">
        <b-col cols="12">
          <div class="project rounded">
            <div v-if="project.image" class="image-box">
              <div
                class="image"
                :style="{ 'background-image': `url(${project.image})` }"
                :alt="project.name"
              />
            </div>
            <div class="content py-3">
              <h2 class="title">
                {{ project.name }}
              </h2>
              <p class="description mt-3 mb-0">
                {{ project.description }}
              </p>
              <div class="badges mt-3">
                <span class="badges-title">
                  Tecnologias:
                </span>
                <b-badge
                  v-for="tag in project.tags"
                  :key="tag"
                  class="mx-1"
                  variant="primary"
                >
                  <span v-if="getCategory(tag)">{{
                    getCategory(tag).name
                  }}</span>
                  <span v-else> "{{ tag }}" </span>
                </b-badge>
              </div>
              <div class="links mt-3">
                <b-button-group>
                  <b-button
                    v-for="link in project.links"
                    :key="link.name + link.url"
                    target="_blank"
                    :href="link.url"
                  >
                    <b-icon class="icon" :icon="link.icon" />
                    {{ link.name }}
                  </b-button>
                </b-button-group>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import vuex from 'vuex'

import Header from '../components/projetos/Header/Header.vue'
const projects = require('../static/data/projects.json')
const projectCategories = require('../static/data/project-categories.json')
export default Vue.extend({
  components: { Header },
  data () {
    return {
      projectCategories
    }
  },

  computed: {
    projectsFiltred () {
      let projectsCloneFiltred = [...projects]

      if (
        this.searchForm.technologies.length > 0 ||
        this.searchForm.categories.length > 0
      ) {
        const allFilters = [
          ...this.searchForm.technologies,
          ...this.searchForm.categories
        ]

        projectsCloneFiltred = projects.reduce((pv: any, project: any) => {
          if (this.checkIfIncluedsAllTags(allFilters, project.tags)) {
            pv.push(project)
            return pv
          } else {
            return pv
          }
        }, [])
      }

      if (this.searchForm.name) {
        projectsCloneFiltred = projectsCloneFiltred.filter(p =>
          p.name.toLowerCase().includes(this.searchForm.name.toLowerCase())
        )
      }

      return projectsCloneFiltred
    },
    ...vuex.mapState('projetos', ['searchForm'])
  },

  methods: {
    getCategory (id: string) {
      return (
        this.projectCategories.categories.find((c: any) => c.id === id) ||
        this.projectCategories.technologies.find((c: any) => c.id === id)
      )
    },
    checkIfIncluedsAllTags (required: string[], tags: string[]) {
      let possuiTudo = true
      required.forEach((tag) => {
        if (!tags.includes(tag)) {
          possuiTudo = false
        }
      })
      tags.forEach((tag) => {
        if (!required.includes(tag)) {
          possuiTudo = false
        }
      })
      return possuiTudo
    }
  }
})
</script>

<style scoped>
.projetos-wrapper {
  background-color: #dfe6e9;
  min-height: calc(100vh - 56px);
}

.project {
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  align-items: stretch;
  background-color: #fff;

  border: 2px solid #a29bfe;

  transition: all 0.3s;
}

.project:hover {
  transform: scale(1.01);
}

.project .image-box {
  width: 400px;
  margin-right: 16px;
}

.project .image-box .image {
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.project .title {
  font-size: 2rem;
  font-family: Josefin Sans, sans-serif;
  margin-bottom: 5px;
}

.project .badges .badges-title {
  font-weight: bold;
  font-family: Ubuntu, sans-serif;
}

.project .links .btn {
  background-color: #a29bfe;
  color: #fff;
  border-color: white;
}

.project .links .btn:focus {
  border-color: #6c5ce7 !important;
  box-shadow: 0 0 0.2rem #a29bfe !important;
}

.project .links .btn .icon {
  width: 0px;
  margin-left: -3px;
  margin-right: 0px;
  font-size: 18px;
  transition: all 0.3s;
}
.project .links .btn:hover .icon {
  width: 18px;
  margin-left: 0px;
  margin-right: 2px;
}

@media (max-width: 1000px) {
  .project {
    flex-flow: column nowrap;
  }

  .project .image-box {
    width: unset;
    height: 400px;
    margin-right: 0px;
  }

  .project .content {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
