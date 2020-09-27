<template>
  <div class="example">{{ messageToUpper }}</div>
</template>

<script>
import Vue from "vue";
import {getHelloWorld} from "./foo";

export default Vue.extend( {
  data () {
    return {
      message: getHelloWorld()
    }
  },
  computed: {
    messageToUpper() { // Computed Property returns a string
      return this.message.toUpperCase();
    }
  }  
})
</script>

<style>
.example {
  color: green;
}
</style>