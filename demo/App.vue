<template>
  <div>
    <button @click="status = !status">change status</button>
    <AppAccordion :status="status">
      <section>
        <h1>Title</h1>
        <p>Contents.</p>
        <p>Contents.</p>
        <p>Contents.</p>
        <p>Contents.</p>
      </section>
    </AppAccordion>
  </div>
</template>

<script>
import AppAccordion from '../src/index.tsx'
export default {
  components: {
    AppAccordion
  },
  data() {
    return {
      status: false
    }
  }
}
</script>
