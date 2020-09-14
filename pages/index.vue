<template>
  <div>
    <h1>A toi de deviner le bon bombre !</h1>
    <div v-show="statut == 'notice'">
      <p>Bienvenue dans ce jeu</p>
      <p>
        Pour gagner, c'est très simple. Vous avez 10 tentatives pour trouver le nombre mystère qui est entre 1 et 100.
        Et à chaque fois que vous le trouverez, le nombre de tentative en début de partie diminuera de 1. A vous de
        jouer !
      </p>
      <button @click="initJeu">Commencer</button>
    </div>
    <div v-show="statut != 'notice'">
      <p>Il vous reste {{ tentatives }} tentatives</p>
      <form @submit.prevent="verification">
        <input type="number" v-model="essai" />
        <button>Valider</button>
      </form>
      <ul>
        <li v-for="item in essais" :key="item.rid">{{ item.valeur }}{{ item.resultat }}</li>
      </ul>
      <div v-show="statut == 'gagne'">
        <p>Félicitations tu as gagné !</p>
      </div>
      <div v-show="statut == 'perdu'">
        <p>Looser</p>
      </div>
      <div v-show="statut == 'gagne' || statut == 'perdu'">
        <p>Veux tu rejouer ?</p>
        <button @click="initJeu">Oui</button>
        <button @click="statut = 'notice'">Non</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tentatives: 10,
      cible: 0,
      essai: 0,
      essais: [],
      statut: 'notice'
    }
  },
  methods: {
    initJeu() {
      this.tentatives = 10
      this.essais = []
      this.statut = 'actif'
      this.cible = Math.floor(Math.random() * 100 + 1)
    },
    verification() {
      if (this.cible == this.essai) {
        this.statut = 'gagne'
      }
      if (this.cible > this.essai) {
        this.essais.push({
          rid: rid(),
          valeur: this.essai,
          resultat: " : C'est trop petit"
        })
        this.perdreUneVie()
      }
      if (this.cible < this.essai) {
        this.essais.push({
          rid: rid(),
          valeur: this.essai,
          resultat: " : C'est trop grand"
        })
        this.perdreUneVie()
      }
    },
    perdreUneVie() {
      this.tentatives--
      if (this.tentatives == 0) {
        this.statut = 'perdu'
      }
    }
  }
}

let i = 1
function rid() {
  const value = 'essai-' + i++
  console.log(value)
  return value
}
</script>
