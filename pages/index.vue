<template>
  <div>
    <h1>Devine le nombre !</h1>

    <div v-if="state === 'init'">
      <p>
        Nous avons généré un nombre aléatoire entre 1 et 100. Vous devez le deviner en 10 tours maximum !<br />
        Proposez des nombres et nous vous dirons si votre estimation est trop haute ou trop basse.
      </p>
      <button @click="start">C'est parti!</button>
    </div>

    <div v-if="state !== 'init'">
      <p>
        Il vous reste {{ tries }} essais.<br />
        Votre proposition:
      </p>
      <input type="number" v-model.number="value" />
      <button @click="check">Valider</button>

      <ul v-if="history.length">
        <li v-for="item in history" :key="item.value">
          <strong>{{ item.value }}</strong> : c'est {{ item.hint }}
        </li>
      </ul>
    </div>

    <div v-if="state === 'end'">
      <p>La partie est terminée</p>
      <button @click="start">Recommencer</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: 'init',
      value: null,
      target: null,
      tries: 10,
      history: [],
      hint: null
    }
  },
  methods: {
    start() {
      this.target = Math.round(Math.random() * 100)
      this.tries = 10
      this.history = []
      this.hint = null
      this.state = 'playing'
    },
    check() {
      if (this.value === this.target) {
        this.state = 'end'
        this.history.unshift({ value: this.value, hint: 'gagné !' })
      } else if (this.tries <= 0) {
        this.state = 'end'
        this.history.unshift({ value: this.value, hint: 'perdu' })
      } else {
        this.tries--
        this.hint = this.value > this.target ? 'moins' : 'plus'
        this.history.unshift({ value: this.value, hint: this.hint })
        this.value = null
      }
    }
  }
}
</script>
