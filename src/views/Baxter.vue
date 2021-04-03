<template lang="pug">
#baxter
  b-jumbotron(fluid)
    template(#header) Baxter
    template(#lead) Configuration Only API
  b-container
    b-row
      b-col(cols="12")
        ul
          li Create API endpoints with no code
          li Configure model ORM with YAML configuration
          li Automatic endpoints for CRUD operations
          li Supports SQLite, Postgres Databases
          li Clustered deployment
</template>

<script>
export default {
  name: "Baxter"
}
</script>

<style scoped>
li {
  text-align: left;
}
</style>
