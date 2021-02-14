<template>
  <div class="component-rede-social rounded">
    <div class="avatar">
      <b-icon :icon="icon" />
    </div>

    <div class="social-info">
      <a v-if="link" :href="link" class="username" target="_blank">
        {{ username }}
      </a>
      <p v-else class="username">
        {{ username }}
      </p>
      <p class="social-name">
        {{ name }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    link: {
      type: String,
      required: false,
      default: undefined
    },
    username: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
.component-rede-social {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  transition: all 0.3s;
}

.component-rede-social:hover {
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}

.avatar {
  background: #9795ef;
  border-radius: 999rem;
  color: white;
  width: 52px;
  height: 52px;
  font-size: 32px;
  text-align: center;
}

.social-info {
  margin-left: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
}

.username {
  color: black;
  font-size: 18px;
  font-family: 'Ubuntu', sans-serif;
  margin-bottom: 0px;
  text-decoration: none;
}

.social-name {
  color: #605e5e;
  font-family: Ubuntu, sans-serif;
  font-weight: 300;
  margin-bottom: 0px;
}
</style>
