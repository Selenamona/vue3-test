<!-- 首页卡片 -->
<template>
  <div class="listCard">
    <div
      class="item"
      v-for="(item, index) in list"
      :key="item.id"
      :style="index % 2 > 0 ? 'margin-left:10px' : ''"
    >
      <img class="mainImg" :src="item.carImg" alt="" />
      <div class="whiteBody">
        <div class="desc">{{ item.description }}</div>
        <div class="info">
          <img class="avatar" :src="item.avatar" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="num">{{ item.hot }}</p>
          <img class="hot" src="@/assets/images/hot.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listCard",
  props: {
    list: Array
  },
  setup(props) {
    console.log(props, "props");
  }
};
</script>
<style lang="scss" scoped>
.listCard {
  .item {
    background: #3a3a44;
    border-radius: 0.08rem;
    display: inline-block;
    width: calc(50% - 5px);
    .mainImg {
      border-radius: 0.08rem 0.08rem 0 0;
      width: 100%;
      height: 1.19rem;
    }
    .whiteBody {
      background: #ffffff;
      border-radius: 0.04rem;
      padding: 0.12rem;
      font-size: 0.13rem;
      color: #21212d;
      .desc {
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
      }
      .info {
        display: flex;
        align-items: center;
        font-size: 0.11rem;
        justify-content: space-between;
        .avatar {
          width: 0.18rem;
          height: 0.18rem;
        }
        .hot {
          width: 0.12rem;
          height: 0.14rem;
        }
        .name {
          color: #6e727a;
          flex: 1;
          text-align: left;
        }
        .num {
          color: #656973;
        }
      }
    }
  }
}
</style>
