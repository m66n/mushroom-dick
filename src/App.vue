<template>
  <div id="app">
    <div v-if="showAlert" class="columns is-centered pad-top">
      <div class="column is-half-desktop">
        <div class="notification is-danger">
          <button class="delete" @click="showAlert=false"></button>
          A strong random number generator is not available.
        </div>
      </div>
    </div>
    <section class="section">
      <div class="columns is-centered">
        <div class="column is-two-thirds-tablet is-half-desktop">
          <div class="field">
           <div class="box has-text-centered" id="password">{{ password }}</div>
          </div>
          <div class="field">
            <div class="buttons is-centered">
              <a class="button is-primary" @click="password=generatePassword(length)">
                Regenerate
              </a>
              <a class="button" @click="copyTextToClipboard(password)">
                Copy to clipboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { copyTextToClipboard, generatePassword } from '@/util'

const DEFAULT_LENGTH = 12

export default {
  data () {
    return {
      showAlert: !!Window.crypto,
      length: DEFAULT_LENGTH,
      password: this.generatePassword(DEFAULT_LENGTH)
    }
  },
  methods: {
    copyTextToClipboard,
    generatePassword
  }
}
</script>

<style>
#app {
  font-family: "Source Sans Pro", sans-serif;
}

#password {
  font-family: "Source Code Pro", monospace;
  overflow-wrap: break-word;
}

.pad-top {
  padding-top: 1rem;
}

.space-between {
  justify-content: space-between;
}
</style>
