<template>
  <section>
    <div class="presentation" :class="{ off: !showPresentation }">
      <p class="hello">
        Olá, eu sou
      </p>
      <h1>Maycon Pinto</h1>
      <hr>
      <p class="description">
        Eu desenvolvo websites completos desde o front-end ate o back-end para
        você ou sua empresa.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      showPresentation: true
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        this.showPresentation = false
      } else {
        this.showPresentation = true
      }
    })
  }
})
</script>

<style scoped>
section {
  height: calc(100vh - 56px);
  background: linear-gradient(116.82deg, #9795ef 0%, #f9c5d1 100%);

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  color: #fff;
}

.presentation {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  animation: animationOpen 0.5s ease 0s 1 normal forwards;
}

.presentation.off {
  animation: animationClose 0.5s ease 0s 1 normal forwards;
}

.presentation > * {
  text-shadow: 0px 0px 15px #00000055;
}

.presentation p.hello,
.presentation h1 {
  font-family: Josefin Sans, sans-serif;
  font-style: normal;
  text-align: center;
}

.presentation p.hello {
  font-family: Josefin Sans, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;
}

.presentation h1 {
  font-family: Josefin Sans, sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px;
}

.presentation hr {
  width: 80%;
  max-width: 500px;
  border-color: #fff;
  border-top-width: 1px;
}

.presentation p.description {
  font-family: 'Times New Roman', Times, serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  width: 80%;
  max-width: 600px;
  text-align: center;
}

@keyframes animationOpen {
  0% {
    opacity: 0;
    margin-top: 50px;
  }
  100% {
    opacity: 1;
    margin-top: -100px;
  }
}

@keyframes animationClose {
  0% {
    opacity: 1;
    margin-top: -100px;
  }
  100% {
    opacity: 0;
    margin-top: -200px;
  }
}
</style>
