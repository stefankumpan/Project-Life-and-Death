<template>
    <div class="wrapper-start">
        <div class="overlay">
            <div class="intro">
                <router-link :to="{name:'game'}" class="glitch" data-text="PLAY">PLAY</router-link>
                <span>Life and Death</span>
                <audio src="/audio/intro_sound.mp3" hidden autoplay loop ref="introSound"></audio>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: "Home",
  }
</script>

<style scoped>

</style>
