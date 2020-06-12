# vue-functional-accordion

A functional accordion component of Vue.js.

## demo

```
npm install
# then
npm run dev
# then you can check the demo at localhost:1234 (if port 1234 is available).
```

## installation

```
$ npm install --save vue-functional-accordion
# or
$ yarn add vue-functional-accordion
```

## useage

Just import as a vue component.

```Vue
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
```


## props

* status - Boolean, required

The status of the accordion. wheather it is shown or hide.

* duration - String, optional, default: `0.5s`

The duration of accordion animation.

* timingFunction - String, optional, default: `cubic-bezier(0.44, 0.03, 0.14, 0.98)`

The timing function of accordion animation.
