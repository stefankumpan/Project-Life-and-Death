<template>
    <div class="score-board">
        <div class="infected">
            <v-gauge name="Infizierte:" :number="Infected"></v-gauge>
        </div>
        <div class="statistics">
            <v-akw></v-akw>
        </div>
        <div class="dead">
            <v-gauge name="Tote:" :number="Dead"></v-gauge>
        </div>
    </div>
</template>

<script>
  import {scoreMixins} from '../../utility/mixins'
  import gauge from './gauge'
  import akw from './akw'

  export default {
    name: "score",
    mixins: [scoreMixins],
    computed: {
      Infected() {
        return this.$store.getters.getInfected;
      },
      Dead() {
        return this.$store.getters.getDead;
      },
      AkwDead() {
        return this.$store.getters.getAkwDead;
      },
    },
    components: {
      "v-gauge": gauge,
      "v-akw": akw,
    },
  }
</script>
