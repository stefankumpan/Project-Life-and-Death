<template>
    <div>
        <div class="fuel">
            <img class="fuel-scala" src="images/score/gauge_filter.png" alt="Gauge">
            <img class="fuel-needle" src="images/score/zeiger.svg" alt="Pointer" :style="style">
        </div>
        <div class="fuel-counter">
            <span class="sil-text">{{name}}</span> <span class="number"> {{numberWithDot(CounterNumber)}} </span>
        </div>
    </div>
</template>

<script>
  import {scoreMixins} from '../../utility/mixins'

  export default {
    name: "gauge",
    mixins: [scoreMixins],
    props: {
      name: String,
      number: Number,
    },
    data() {
      return {
        style: "",
        CounterNumber: 0,
      }
    },
    watch: {
      number(newValue, oldValue) {
        // console.log(newValue, oldValue);
        // Pointer Up or Down
        let Pointer = this.HandleUpOrDown(newValue,oldValue);
        // Rotate Value
        let RotateValue = this.HandleRotate(newValue);
        // Counter
        this.counter(oldValue, newValue, 3, Pointer);
        // Set Style to Pointer
        this.style = " transform: rotate(" + RotateValue + "deg);"
      }
    },
    created() {
      if (this.number <= 0) {
        this.style = " transform: rotate(" + -95 + "deg);"
      }
    },
    methods: {
      counter(start, end, duration, pointer) {
        let current = start;
        let range = (end - start);
        range = (range < 0) ? range * -1 : range;
        let increment = 1;
        let timer = setInterval(() => {
          increment = this.HandleIncrement(start,end);
          if (pointer === "up") {
            current += increment;
            if (current === end || current >= end) {
              clearInterval(timer);
              this.CounterNumber = end;
            } else {
              this.CounterNumber = current;
            }
          }
          if (pointer === "down") {
            current -= increment;
            if (current === end || current <= end) {
              clearInterval(timer);
              this.CounterNumber = end;
            } else {
              this.CounterNumber = current;
            }
          }
        }, 100);
      },
      RandomMinMaxNumber(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      },
      HandleRotate(val){
        let  RotateValue;
        if (val < 1) {
          RotateValue = -95;
        }
        if (val === 1) {
          RotateValue = -93;
        }
        if (val >= 1) {
          RotateValue = -90;
        }
        if (val >= 10) {
          RotateValue = -88;
        }
        if (val >= 50) {
          RotateValue = -87;
        }
        if (val >= 100) {
          RotateValue = -86;
        }
        if (val >= 300) {
          RotateValue = -84;
        }
        if (val >= 600) {
          RotateValue = -82;
        }
        if (val >= 800) {
          RotateValue = -80;
        }
        if (val >= 1000) {
          RotateValue = -70;
        }
        if (val >= 1500) {
          RotateValue = -60;
        }
        if (val >= 3000) {
          RotateValue = -40;
        }
        if (val >= 6000) {
          RotateValue = -20;
        }
        if (val >= 10000) {
          RotateValue = 0;
        }
        if (val >= 20000) {
          RotateValue = 10;
        }
        if (val >= 50000) {
          RotateValue = 40;
        }

        if (val >= 200000) {
          RotateValue = 60;
        }
        if (val >= 400000) {
          RotateValue = 80;
        }
        if (val >= 2000000) {
          RotateValue = 90;
        }
        return RotateValue;
      },

      HandleUpOrDown(newValue, oldValue){
        let Pointer;
        if (newValue > oldValue) {
          Pointer = "up"
        }
        if (newValue < oldValue) {
          Pointer = "down"
        }
        return Pointer;
      },

      HandleIncrement(startValue,endValue){
        let range = (endValue - startValue);
        range = (range < 0) ? range * -1 : range;

        let increment = 1;
        if(range <= 30){
           increment = 1;
        }
        if(range > 30){
          let x = range/30;  // calculation increment
          increment = Math.round(x)
        }
        // console.log(increment);

        return increment;
      }

    },
  };
</script>

