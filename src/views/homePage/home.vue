<!-- 首页 -->
<template>
  <HomeList v-show="tab === 1" />
  <Personal v-show="tab === 2" />
  <BottomMenu @selectTab="selectTab" />
</template>

<script>
import HomeList from './homeList'
import Personal from './personal'
import BottomMenu from '/@/components/bottomMenu.vue'
export default {
  name: 'home',
  setup() {
    let tab = ref(1)
    const selectTab = (tab) => {
      console.log('tab', tab)
      tab.value = tab
    }
    return {
      tab,
      selectTab,
    }
  },
  components: { HomeList, Personal, BottomMenu },
}
</script>
<style lang="scss" scoped></style>
