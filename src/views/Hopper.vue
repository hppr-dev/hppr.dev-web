<template lang="pug">
#hopper
  b-jumbotron(fluid)
    template(#header) Hopper
    template(#lead) Quickly create APIs in go
  b-container
    b-row
      b-col(cols="12")
        ul
          li Create ORM API with one short go file
          li Default CRUD handlers for ORM models
          li Add custom API endpoints with gin handlers 
          li Builds on top of GinGorm middleware to create a simplified experience
</template>

<script>
export default {
  name: "Hopper"
}
</script>

<style scoped>
li {
  text-align: left;
}
</style>
