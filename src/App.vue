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
            <div class="buttons">
              <a class="button is-primary" @click="regeneratePassword()">
                Regenerate
              </a>
              <a class="button" @click="copyTextToClipboard(password)">
                Copy to clipboard
              </a>
            </div>
          </div>
          <div class="field">
            <label class="label">Length</label>
            <div class="control">
              <input class="input" type="number" id="length" :min="MIN_LENGTH" :max="MAX_LENGTH" v-model="length" ref="length" @click="$refs.length.focus()" @blur="validateLength()">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="flags.uppers" @change="regeneratePassword()">
                A-Z
              </label>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="flags.digits" @change="regeneratePassword()">
                0-9
              </label>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="flags.symbols" @change="regeneratePassword()">
                !@#$%^&amp;*
              </label>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="flags.ambiguous" @change="regeneratePassword()">
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
const MIN_LENGTH = 4
const MAX_LENGTH = 256
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
    regeneratePassword () {
      this.password = generatePassword(this.length, this.flags)
    },
    validateLength () {
      let length = parseInt(this.length, 10)
      if (isNaN(length)) {
        length = DEFAULT_LENGTH
      } else if (length < MIN_LENGTH) {
        length = MIN_LENGTH
      } else if (length > MAX_LENGTH) {
        length = MAX_LENGTH
      }
      this.length = length
      this.regeneratePassword()
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

#length {
  width: 8rem;
}
</style>
