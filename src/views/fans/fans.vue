<!-- 关注和粉丝 -->
<template>
  <div class="fans">
    <Tab :tabList="tabList" />
    <Search placeholder="搜索用户昵称" />
    <div class="listwrap">
      <div class="item" v-for="item in userList" :key="item.name">
        <img :src="item.img" alt="" />
        <div class="info">
          <p>{{ item.img }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from "/@/components/Tab.vue";
import Search from "/@/components/Search.vue";
export default {
  name: "fans",
  setup(props) {
    const tabList = [
      { name: "关注", num: 12, code: "1" },
      { name: "粉丝", num: 432, code: "2" }
    ];

    const userList = [
      { name: "马克思", img: "", msg: "", status: 2 },
      { name: "陈思前", img: "", msg: "", status: 0 },
      { name: "刘三点", img: "", msg: "", status: 1 },
      { name: "张思德", img: "", msg: "", status: 0 },
      { name: "赵世界", img: "", msg: "", status: 1 },
      { name: "王石", img: "", msg: "", status: 2 },
      { name: "吕克开", img: "", msg: "", status: 1 }
    ];
    return {
      tabList
    };
  },
  components: { Tab, Search }
};
</script>
<style lang="scss" scoped>
.fans {
}
</style>
