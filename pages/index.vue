<template>
  <div>
    <h1>Super héros !</h1>
    <pre class="text-xs">{{ hero }}</pre>
    <pre class="text-xs">{{ picture }}</pre>
  </div>
</template>

<script>
const apiRoot = 'https://www.superheroapi.com/api.php/10222939199566346'
export default {
  async fetch() {
    const id = this.getId()
    const { data: hero } = await this.$axios.get(`${apiRoot}/${id}/appearance`)
    this.hero = hero

    const { data: picture } = await this.$axios.get(`${apiRoot}/${id}/image`)
    this.picture = picture?.url
  },
  data() {
    return {
      hero: null,
      picture: null
    }
  },
  methods: {
    getId() {
      return Math.floor(Math.random() * 731 + 1)
    }
  }
}
</script>
