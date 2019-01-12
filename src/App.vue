<template>
  <div class="example">{{ message }}</div>
</template>

<script>

import {getHelloWorld} from "./foo";

export default {
  data () {
    return {
      message: getHelloWorld()
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>