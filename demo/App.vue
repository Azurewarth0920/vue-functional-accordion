<template>
  <div>
    <button @click="status = !status">change status</button>
    <Accrodion :status="status">
      <h1>Hello world</h1>
    </Accrodion>
  </div>
</template>

<script>
  import Accrodion from '../src/index.tsx'
  export default {
    components: {
      Accrodion,
    },
    data() {
      return {
        status: false,
      }
    },
  }
</script>
