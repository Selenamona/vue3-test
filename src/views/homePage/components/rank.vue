<!-- 首页排名 -->
<template>
  <div class="rank">
    <div class="item" v-for="(item, index) in rankData" :key="item.userId">
      <div class="img" :style="rankImgs[index].background">
        <img class="portrait" :src="item.userAvatar" alt="" />
        <img class="icon" :src="rankImgs[index].img" alt="" />
      </div>
      <p class="nickName">{{ item.userName }}</p>
    </div>
    <div class="rankAll">全部</div>
  </div>
</template>

<script>
export default {
  name: "rank",
  setup() {
    const rankData = [
      {
        userId: 100021,
        userName: "斯达康",
        userAvatar:
          "https://thirdwx.qlogo.cn/mmopen/vi_32/qdgywwKjochlzkLnYkOY5E0pP0QIxfjFRT2bbNDhF3ribKverMlhpwUAjSr6nlPaUT7YMOvPY3E0vFw6ur4KWjw/132",
        profile: "哈哈车神",
        hot: 977
      },
      {
        userId: 100032,
        userName: "selenamona",
        userAvatar:
          "https://thirdwx.qlogo.cn/mmopen/vi_32/JOQ9e9RhnqFZQicicZR5hicITuZ40d0b2TVpCAAvEkBJM9YHYl6ibLNZufLDrx9R0WFYfVkRTSsLjjibNiabesCEU76w/132",
        profile: null,
        hot: 411
      },
      {
        userId: 100033,
        userName: "丹江口市呢",
        userAvatar:
          "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLXD1Zpsib4BLGvKOhsUBRgNnO5e3TwQrqgrPop3q46ws6Esn0bNdh2W1x4svSGIYKu1XnJxBUUcdg/132",
        profile: "全宇宙最拉轰的车行",
        hot: 380
      },
      {
        userId: 100054,
        userName: "sdfksd fsdfks",
        userAvatar:
          "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLAeExOiaEkke9lXuMNVKiaepJiadEVBfj66E7gurt10k8qwqiboheJmyPuZPpPbqLAtJPrtxwxCm4vPg/132",
        profile:
          "首都师范大学出版社出版时间地点限制学生教育学院毕业证成绩单文凭学历优秀的学历认证毕业证成绩单学历认证学生。",
        hot: 233
      },
      {
        userId: 100025,
        userName: "测试需要更换下昵称名称为长的名称",
        userAvatar:
          "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIhhibwDVriaLRqAPl7PNa2pL2k6pIbJQ3rPgWlDOCsMcpVDmerJIK4eeBw9wbHHx2g1EmXLL6VTv5w/132",
        profile:
          "酱香白酒二手车交易市场可口可乐了看看啦啦啦可口可乐了看看啦啦啦可口可乐了看看啦啦啦可口可乐了看看啦啦啦了酱香白酒二手车交易市场可口可乐了看看啦啦啦可口可乐了看看啦啦啦可口可乐了看看啦啦啦可口可乐了看看啦啦啦了酱香白酒二手车交易市场可口可乐了看看啦啦啦可口可乐了看看啦啦啦可口可乐了看看啦啦啦可口可乐了看看啦啦啦了酱香白酒二手车交易市场可口可乐了看看啦啦啦可口可乐了看看啦啦啦可口可乐了看看啦啦啦可口可乐了看看啦啦啦了酱香白酒二手车交易市场可口可乐了看看啦啦啦可口可乐了看看啦啦啦可口可乐了看看啦啦啦可口可乐了看看啦啦啦了酱香白酒二手车交易市场可口可乐了看看啦啦啦可口可乐了看看啦啦啦可口可乐了看看啦啦",
        hot: 226
      }
    ];
    const rankImgs = [
      {
        img: "/@/assets/images/rank1.png",
        background:
          "background-image: linear-gradient(162deg, #FF6F72 0%, #FF4B4E 100%);"
      },
      {
        img: "/@/assets/images/rank2.png",
        background:
          "background-image: linear-gradient(159deg, #FF6B66 0%, #F46631 100%);"
      },
      {
        img: "/@/assets/images/rank3.png",
        background:
          "background-image: linear-gradient(159deg, #FFE678 0%, #FFB517 100%);"
      },
      {
        img: "/@/assets/images/rank4.png",
        background:
          "background-image: linear-gradient(159deg, #FFCDA2 0%, #F19749 100%);"
      },
      {
        img: "/@/assets/images/rank5.png",
        background:
          "background-image: linear-gradient(159deg, #FFCDA2 0%, #F19749 100%);"
      }
    ];
    return {
      rankData,
      rankImgs
    };
  }
};
</script>
<style lang="scss" scoped>
.rank {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #31343a;
  padding: 0.12rem 0;
  .item {
    .nickName {
      font-size: 0.11rem;
      color: #bfbfc1;
      margin-top: 0.09rem;
      width: 0.5rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
    }
    .img {
      position: relative;
      width: 0.48rem;
      height: 0.48rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      .portrait {
        border-radius: 50%;
        display: block;
        width: 0.44rem;
        height: 0.44rem;
      }
      .icon {
        position: absolute;
        bottom: 0;
        left: 0.24rem;
        width: 0.24rem;
        height: 0.16rem;
        z-index: 1;
      }
    }
  }
  .rankAll {
    font-size: 0.12rem;
    color: #ffd500;
    margin-top: 0.24rem;
    transform: translate(0, -0.06rem);
  }
}
</style>
