<!-- 首页 -->
<template>
  <HomeList v-show="tab === 1" />
  <Personal v-show="tab === 2" />
  <BottomMenu @selectTab="selectTab" />
</template>

<script>
import HomeList from "./homeList.vue";
import Personal from "./personal.vue";
import BottomMenu from "/@/components/BottomMenu.vue";
import { ref } from "vue";
export default {
  name: "home",
  setup() {
    let tab = ref(1);
    const selectTab = key => {
      tab.value = key;
    };
    return {
      tab,
      selectTab
    };
  },
  components: { HomeList, Personal, BottomMenu }
};
</script>
<style lang="scss" scoped></style>
