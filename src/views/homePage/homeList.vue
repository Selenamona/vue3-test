<!-- 首页列表 -->
<template>
  <div class="homeList">
    <Rank />
  </div>
</template>

<script>
import Rank from "./components/rank.vue";
export default {
  name: "homeList",
  components: { Rank }
};
</script>
<style lang="scss" scoped></style>
