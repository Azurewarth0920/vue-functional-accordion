<template>
  <div>
    <button @click="status = !status">change status</button>
    <AppAccordion :status="status">
      <h1>Hello world</h1>
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
