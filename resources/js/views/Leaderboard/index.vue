<template>
    <div class="leaderboard-container">
        <h2>Leaderboard</h2>
        <div class="leaderboard-player-box" v-for="(x,index) in players.data">
            <div class="img">
                <img v-if="(index + 1 + Rankstart) === 1" src="/images/icons/rank1.png" alt="">
                <img v-else-if="(index + 1 + Rankstart) === 2" src="/images/icons/rank2.png" alt="">
                <img v-else-if="(index + 1 + Rankstart) === 3" src="/images/icons/rank3.png" alt="">
                <img v-else="" src="/images/icons/rank4.png" alt="">
            </div>

            <div class="stats">
                <div class="top-box">
                    <div class="name"><span>{{x.name}}</span></div>
                    <div class="rang">
                        <span>Rang: </span>
                        <span>{{index + 1 + Rankstart }}</span>
                    </div>
                </div>
                <div class="bottom-box">
                    <div>
                        <span>Tote</span>
                        <span>{{x.deceased}}</span>
                    </div>
                    <div>
                        <span>Zeit</span>
                            <span>{{x.time}}</span>

                    </div>
                </div>
            </div>
        </div>
        <div class="lb-paginate">
            <button :disabled="players.prev_page_url == null" @click="PrevPage"> <</button>
            <button :disabled="players.next_page_url == null" @click="NextPage"> ></button>
        </div>
        <audio hidden src="/audio/leaderboard_sound.mp3" autoplay loop ref="leaderboardSound"></audio>
    </div>
</template>

<script>
  import axios from "axios"

  export default {
    name: "Leaderboard",
    data() {
      return {
        players: [],
        Rankstart: 0,
      }
    },
    created() {
      // console.log("axios");
      axios.get("/api/score/index")
        .then(response => {
          // console.log(response.data);
          this.players = response.data;
        }).catch(error => {
        console.error(error)
      });
    },
    methods: {
      NextPage() {
        axios.get(this.players.next_page_url)
          .then(response => {
            // console.log(response.data);
            if (response.data.current_page === 1) {
              this.Rankstart = 0;
            } else {
              // console.log("Test");
              let newRankstart = this.players.per_page * this.players.current_page;
              this.Rankstart = newRankstart;
              // console.log(newRankstart)
            }
            this.players = response.data;
          }).catch(error => {
          console.error(error)
        });
      },
      PrevPage() {
        if (this.players.prev_page_url != null) {
          axios.get(this.players.prev_page_url)
            .then(response => {
              if (response.data.current_page === 1) {
                this.Rankstart = 0;
              } else {
                // console.log("Test");
                let newRankstart = this.players.per_page * this.players.current_page;
                this.Rankstart = newRankstart;
                // console.log(newRankstart)
              }
              // console.log(response.data);
              this.players = response.data;
            }).catch(error => {
            console.error(error)
          });

        }
      }
    }
  }
</script>

