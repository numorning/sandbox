<template>
  <div>
    <h1>Bonjour</h1>
    <p>Bienvenue dans ce jeu</p>
    <p>La variable nombre vaut : {{ nombre }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: 12
    }
  }
}
</script>
