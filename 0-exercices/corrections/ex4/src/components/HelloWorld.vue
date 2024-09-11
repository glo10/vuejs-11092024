<template>
  <div class="hello">
    <input type="text" placeholder="Saisir quelque chose" v-model.trim="phrase">
    <p :class="{red : phrase.length < 10 }">{{ phrase.length < 10 ? 'Trop court': 'OK'  }}</p>
    <ul>
      <li>{{ ageStr }}</li>
      <li>{{ fullname }}</li>
    </ul>
  </div>
</template>

<script>
// Options API
export default {
  name: "HelloWorld",
  // props = données exterieurs transmis par un composant parent
  props: {
    msg: String,
  },
  // données internes
  data() {
    return {
      user: {
        firstname: "Glodie",
        lastname: "Tshimini",
        age: 32,
      },
      phrase: ''
    };
  },
  computed: { // données calculées ou transformées à partir des données internes
    ageStr() {
      return `j'ai ${this.user.age} ans`; // Concaténation  que "j'ai " + this.age +  "ans"
    },
    fullname() {
      return `${this.user.firstname} ${this.user.lastname}`
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.red {
  color: red;
  font-weight: bold;
}
</style>
