<script setup>

const sections = [
  'Boulangerie',
  'Liquide',
  'Frais'
]

const label = ref('')
const sectionSelected = ref(null)
// { name: '', section: '', isBought: false}
const items = ref([{}])
const criteria = ref({})
const itemsFiltered = computed(() => {
  return
})

const ratio = computed(() => {
  return
})

const addItem = () => {
  items.value.push()
  label.value = ''
  sectionSelected.value = null
}

const changeLabel = (e) => {
  const inputValue = e.target.value
  label.value = inputValue
}

const changeSelectedSection = (e) => {
  const radioValue = e.target.value
  sectionSelected.value = radioValue
}

const changeCriteria = (param) => {
  criteria.value = param
}

</script>

<template>
  <div class="greetings">
    <h1>Liste des courses</h1>
    <p>Filtre achats :</p>
    <input type="radio" id="yes" name="buy" value="yes">
    <label for="yes">Oui</label>
    <input type="radio" id="no" name="buy" value="no">
    <label for="no">Non</label>
    <input type="radio" id="all" name="buy" value="all">
    <label for="all">Tous confondus</label>
    <input type="button" value="Ajouter">
    <input type="text" placeholder="Saisir le nom de l'article">
    <select>
      <option v-for="section in sections" :key="section" :value="section">
        {{ section }}
      </option>
    </select>
    <div>
      <h2>Ma liste</h2>
      <ul v-if="items.length > 0">
        <li :class="{red : isBought}" v-for="{name, section, isBought } in itemsFiltered" :key="name">
          {{ name }} - {{ section }}
        </li>
      </ul>
      <p v-else-if="itemsFiltered.length === 0"> Aucun article correspond à ce filtre</p>
      <p v-else>Aucun article dans le panier</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
