<template>
  <div class="center-input">
    <h1>Search for your next serie</h1>
    <vue-instant :suggestion-attribute="suggestionAttribute" v-model="value" :disabled="false"  @input="changed" @click-button="clickButton" :show-autocomplete="true" :autofocus="false" :suggestions="suggestions" name="customName" placeholder="Start typing the serie name" type="custom"></vue-instant>
  </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                product: {},
                value: '',
                suggestionAttribute: 'name',
                suggestions: [],
                selectedEvent: ""
            }
        },
        created() {
        },
        methods: {
          clickButton: function() {
            this.selectedEvent = 'click button'
            var suggestions = this.suggestions
            var selectedName = this.value
            suggestions.forEach(function(value) {
              if (value.name === selectedName) {
                var newUrl = "/#/serie/" + value.id;
                // TODO: Change url with router programmatically
                self.location = newUrl;
              }
            })
          },
          changed: function() {
            var that = this
            this.suggestions = []
            this.$http.get(`http://api.tvmaze.com/search/shows?q=` + this.value).then(response => {
              response.data.forEach(function(a) {
                that.suggestions.push(a["show"])
              })
            }, response => {
              // error callback
            });
          }
        },
        components: {
            'vue-instant': VueInstant.VueInstant
        }
    };
</script>

<style scoped>
  .center-input {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    position: absolute;
    top: 0;
    background: #000000;
    width: 100%;
  }
  .center-input::after {
    content: "";
    background: #000000 url('../assets/background.jpg') no-repeat;
    background-position-x: center;
    background-size: auto 100%;
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }
  *:not(.center-input) {
    z-index: 1;
  }
  .input-container {
    width: 100%;
    position: relative;
    margin: 0 20px;
  }
  h1 {
    font-size: 20px;
    text-align: center;
    margin: 0 20px 15px;
    color: #ffffff;
    width: 100%;
  }
  input {
    height: 40px;
    border-radius: 5px;
    border: 2px solid transparent;
  }
  input:focus {
    outline: none;
  }
  input[type="text"] {
    width: 100%;
    -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.35);
    -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.35);
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.35);
    margin: 0;
    text-indent: 10px;
    font-size: 12px;
  }
  input[type="text"]:focus {
    border: 2px solid #6ed86e;
  }
  input[type="submit"] {
    background: green;
    position: absolute;
    border-radius: 0 5px 5px 0;
    top: 0;
    right: -7px;
    height: 46px;
    color: #ffffff;
    width: 40px;
    font-weight: bold;
  }
  input[type="submit"]:active {
    background: #0c9c0c;
  }
  a {
    color: white;
    margin-top: 30px;
  }
  @media only screen and (min-width: 768px) {
    .center-input::after {
      background-size: cover;
    }
    div {
      height: 66px;
      padding: 0;
    }
    h1 {
      font-size: 40px;
      margin-bottom: 30px;
      width: 100%;
    }
    .input-container {
      width: 70%;
      position: relative;
    }
    input[type="text"] {
      height: 60px;
      font-size: 24px;
      text-indent: 20px;
    }
    input[type="submit"] {
      height: 66px;
      width: 66px;
      font-size: 24px;
    }
    a {
      width: 100%;
      text-align: center;
    }
  }
</style>
