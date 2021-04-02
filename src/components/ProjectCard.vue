<template lang="pug">
b-card(
  :title="name"
  :sub-title="description"
)
  b-button-group
    b-button(
      v-b-tooltip.hover.bottom
      title="Github"
      variant="info"
      :href="github_url"
    ) 
      b-icon-github
    b-button(
      v-b-tooltip.hover.bottom
      title="Docs"
      variant="info"
      :href="docs_url"
    )
      b-icon-book
    b-button(
      v-b-tooltip.hover.bottom
      title="About"
      variant="info"
      @click="$router.push(about_stub)"
    )
      b-icon-question
</template>

<script>
import { BIcon, BIconGithub, BIconBook, BIconQuestion } from 'bootstrap-vue'
export default {
  name: "ProjectCard",
  components: {
    BIcon,
    BIconGithub,
    BIconBook,
    BIconQuestion
  },
  props: {
    name: String,
    description: String,
    github_url: String,
    docs_url: String,
    about_stub: String
  }
}
</script>

<style scoped>
.card-body {
  margin: 1em;
}

.card-body > .btn-group {
  margin: .25em;
  padding: 1em;
}

</style>
