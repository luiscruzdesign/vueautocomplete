<template>
    <div>
      <img :src="product.image['medium']" :alt="product.name">
      <div class="episode-details">
        <h1>{{product.name}}</h1>
        <h3>Season: {{product.season}} | Episode number {{product.number}} | Runtime: {{product.runtime}} minutes</h3>
        <div class="episodio-summary" v-html="product.summary"></div>
        <button v-on:click="goBack()">Go Back</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'episode',
        methods: {
          goBack: function() {
            window.history.back();
          }
        },
        data() {
            return {
                product: {}
            }
        },
        created() {
          let id = this.$route.params.id;
          this.$http.get(`http://api.tvmaze.com/episodes/${id}`).then(response => {
            this.product = response.body;
          }, response => {
            // error callback
          });
        }
    };
</script>

<style scoped>
    img {
      width: 100%;
    }
    h1, h3 {
      margin: 0;
    }
    h1 {
      margin-top: 15px;
    }
    h3 {
      text-align: center;
      font-size: 12px;
    }
    .episodio-summary {
      font-family: "Times New Roman", Times, serif;
    }
    button {
      width: 300px;
      background: #40ac57;
      display: block;
      margin: 0 auto;
      text-align: center;
      padding: 10px;
      border-radius: 3px;
      color: white;
    }
    @media only screen and (min-width: 768px) {
      img {
        width: 50%;
        float: left;
      }
      .episode-details {
        width: 50%;
        float: right;
      }
    }
</style>
