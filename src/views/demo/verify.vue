<!-- 4位随机验证码-图片-->
<template>
  <div class="verify">
    <vue-img-verify ref="verifyRef" />
  </div>
</template>

<script>
import vueImgVerify from "../../components/VueImageVerify.vue";
export default {
  name: "verify",
  components: { vueImgVerify }
};
</script>
<style lang="scss" scoped></style>
