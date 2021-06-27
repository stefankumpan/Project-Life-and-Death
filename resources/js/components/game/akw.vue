<template>
    <transition name="fade">
        <div class="akw-box" v-if="AkwDead !== 0">
            <img class="akw-symbole" src="images/akw.png" alt="AKW">
            <span> AKW-Tote: {{numberWithDot(CounterNumber)}}</span>
        </div>
    </transition>
</template>

<script>
  import {scoreMixins} from '../../utility/mixins'

  export default {
    name: "akw",
    mixins: [scoreMixins],
    computed: {
      AkwDead() {
        return this.$store.getters.getAkwDead;
      },
    }, data() {
      return {
        CounterNumber: 0,
      }
    }, watch: {
      AkwDead(newValue, oldValue) {
        setTimeout(()=>{
          this.counter(oldValue, newValue)
        },5000);
      }
    }, methods: {
      counter(start, end) {

        let current = start;
        let increment = Math.round(end/80);
        let timer = setInterval(() => {
          // current += this.RandomMinMaxNumber(100000, 150000);
          current += increment;
          // console.log(increment);
          this.CounterNumber = current;
          // console.log(this.CounterNumber);
          if (current === end || current >= end) {
            clearInterval(timer);
            this.CounterNumber = end;
          }
        }, 100);
      },
      RandomMinMaxNumber(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      },

    }
  }
</script>
