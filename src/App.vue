<template>
  <div class="example">{{ messageToUpper }}</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {getHelloWorld} from "./foo";

export default defineComponent({
  data () {
    return {
      message: getHelloWorld()
    }
  },
  computed: {
    messageToUpper(): string {
      return this.message.toUpperCase();
    }
  }
});
</script>

<style scoped>
.example {
  color: green;
}
</style>