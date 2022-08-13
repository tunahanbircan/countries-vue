<template>
  <div>
    <div class="container" style="display: flex; justify-content: center; flex-wrap: wrap">
      <div v-for="item in info" :key="item.area" class="card" style="margin: 10px; width: 18rem">
        <img :src="item.flag" class="card-img-top" alt="flag" />
        <div class="card-body">
          <h5 class="card-title">{{ item.name }}</h5>
          <p class="card-text">{{ item.capital }}</p>
          <p class="card-text">{{ item.region }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      required: true
    }
  }
};
</script>

<style></style>
