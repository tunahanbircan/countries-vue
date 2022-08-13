<template>
  <nav class="container navbar" style="background-color: #e3f2fd">
    <div class="container-fluid">
      <a class="navbar-brand">Countries</a>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          @keyup="onChange"
        />
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
  methods: {
    onChange(e){
      this.$emit('value', e.target.value)
    }
  }
};
</script>
<style></style>
