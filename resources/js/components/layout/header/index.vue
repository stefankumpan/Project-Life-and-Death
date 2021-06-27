<template>
    <header class="site-header">
        <div class="site-logo">
            <router-link :to="{name: 'home'}" class="site-logo-link">
                <img class="site-logo-img" src="/images/logo.png" alt="Life and Death">
                <h1>Life and Death with Corona</h1>
            </router-link>
        </div>
        <div class="site-navigation">
            <ul class="navigation-list">
                <li class="navigation-list-item">
                    <router-link :to="{name: 'home'}">Home</router-link>
                </li>
                <li class="navigation-list-item">
                    <router-link :to="{name: 'leaderboard'}">Leaderboard</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
  export default {
    name: "index"
  }
</script>

