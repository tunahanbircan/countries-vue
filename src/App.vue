<template>
  <div id="app">
    <NavBar />
    <CountryTable />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import CountryTable from "./components/CountryTable.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    NavBar,
    CountryTable,
  },
  data() {
    return {
      info: [],
      value: "",
    };
  },
  created() {
    axios .get("https://restcountries.com/v2/all")
      .then((response) => (this.info = response.data))
  },
  methods: {
    onValueChanged(value){
      this.value=value
    }
  },
  computed: {
    capitals(){
      if(!this.value){
        return this.info
      }

      return this.info.filter((c)=>{
        return c.capital?.toLowerCase().startsWith(this.value.toLowerCase())
      })
    }
  }
};
</script>

<template>
  <div>
    <nav-bar />
    <country-table @value="onValueChanged" :info="capitals" />
  </div>
</template>

<style></style>
