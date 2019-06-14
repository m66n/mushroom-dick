<template>
  <div id="app">
    <section v-if="showAlert" class="section">
      <div class="columns is-centered">
        <div class="column is-half-desktop">
          <div class="notification is-danger">
            <button class="delete" @click="showAlert=false"></button>
            A strong random number generator is not available.
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns is-centered">
        <div class="column is-two-thirds-tablet is-half-desktop">
          <div class="field">
           <div class="box has-text-centered" id="password">{{ password }}</div>
          </div>
          <div class="field">
            <div class="buttons is-centered">
              <a class="button is-primary" @click="generatePassword()">
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
    <section class="section">
      <div class="columns is-centered">
        <div class="column is-narrow">
          <div class="field is-grouped">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="flags.uppers" @change="generatePassword()">
                A-Z
              </label>
            </div>
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="flags.digits" @change="generatePassword()">
                0-9
              </label>
            </div>
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="flags.symbols" @change="generatePassword()">
                !@#$%^&amp;*
              </label>
            </div>
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="flags.ambiguous" @change="generatePassword()">
                Avoid ambiguous
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { flags, copyTextToClipboard, generatePassword } from '@/util'

const DEFAULT_LENGTH = 12
const DEFAULT_FLAGS = flags

export default {
  data () {
    return {
      showAlert: !!Window.crypto,
      length: DEFAULT_LENGTH,
      password: generatePassword(DEFAULT_LENGTH, DEFAULT_FLAGS),
      flags: DEFAULT_FLAGS
    }
  },
  methods: {
    copyTextToClipboard,
    generatePassword () {
      this.password = generatePassword(this.length, this.flags)
    }
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

.space-between {
  justify-content: space-between;
}
</style>
