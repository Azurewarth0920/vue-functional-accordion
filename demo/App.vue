<template>
  <div>
    <button @click="status = !status">change status</button>
    <AccrodionComponent :status="status">
      <h1>Hello world</h1>
    </AccrodionComponent>
  </div>
</template>

<script>
import AccrodionComponent from '../src/index.tsx'
export default {
  components: {
    AccrodionComponent
  },
  data() {
    return {
      status: false
    }
  }
}
</script>
