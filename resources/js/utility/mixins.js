// Score component Mixins
export const scoreMixins = {
  methods: {
    numberWithDot(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },

    // Time Formatter
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    randomIntFromInterval(min, max) { // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
};

