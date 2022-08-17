<!-- <template>
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
</template> -->

<template>
  <div>
    <div class="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col" style="width: 25%">Name</th>
            <th scope="col" style="width: 25%"><div style="display: flex; justify-content:center; align-items: end;">Capital<input
                style="margin-left: 10px"
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                @keyup="onChangeCapital"
              /></div></th>
            <th scope="col" style="width: 25%">Region</th>
            <th scope="col" style="width: 25%">Flag</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="(item, i) in info" :key="i" style="margin: 10px; width: 18rem">
            <th scope="row">{{ item.name }}</th>
            <td>{{ item.capital }}</td>
            <td>{{ item.region }}</td>
            <td class="w-25"> <img :src="item.flag" class="rounded img-fluid" style=""  alt="Flag"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
</template>

<script>
export default {
  props: {
    info: {
      required: true
    }
  },
  methods: {
    onChangeCapital(e){
      this.$emit('value', e.target.value)
    }
  }
};
</script>

<style></style>
