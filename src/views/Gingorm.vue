<template lang="pug">
#gingorm
  b-jumbotron(fluid)
    template(#header) GinGorm
    template(#lead) Gin Middleware for Gorm
  b-container
    b-row
      b-col(cols="12")
        ul
          li Gorm Middleware for Gin framework
          li Maps Gorm Models to Gin API endpoints
          li Built in gin handlers for CRUD operations
</template>

<script>
export default {
  name: "Gingorm"
}
</script>

<style scoped>
li {
  text-align: left;
}
</style>
