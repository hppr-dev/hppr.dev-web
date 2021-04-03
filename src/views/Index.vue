<template lang="pug">
#view-container
  b-jumbotron(fluid)
    template(#header) hppr.dev
    template(#lead) Open Source Projects 
  b-container
    b-alert(variant="warning" show) This website and the projects featured are under active development. 
    b-row
      b-col(md="4")
        ProjectCard(
          name="Baxter"
          description="Configuration only API"
          github_url="http://github.com"
          docs_url="http://github.com"
          about_stub="/baxter"
        )
      b-col(md="4")
        ProjectCard(
          name="Hopper"
          description="Quick ORM APIs with go"
          github_url="http://github.com/swalker90/hopper"
          docs_url="http://github.com/swalker90/hopper"
          about_stub="/hopper"
        )
      b-col(md="4")
        ProjectCard(
          name="GinGorm"
          description="Gorm Middleware for Gin"
          github_url="http://github.com/swalker90/gingorm"
          docs_url="http://github.com/swalker90/gingorm"
          about_stub="/gingorm"
        )
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue"

export default {
  name: "Index",
  components: {
    ProjectCard
  }
}
</script>

<style scoped>
#view-container {
}
</style>
