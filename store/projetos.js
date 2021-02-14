export const state = () => {
  return {
    searchForm: {
      name: '',
      categories: [],
      technologies: []
    }
  }
}

export const mutations = {
  setSearchFormName (state, val) {
    state.searchForm.name = val
  },
  setSearchFormCategories (state, val) {
    state.searchForm.categories = val
  },
  setSearchFormTechnologies (state, val) {
    state.searchForm.technologies = val
  }
}
