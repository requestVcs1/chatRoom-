<template>
  <div class="layout-footer">
    <router-link
      tag="span"
      active-class="active"
      to="/home"
      class="footer-item"
    >
      <span class="iconfont iconshouye"></span>
      <span>首页</span>
    </router-link>
    <router-link
      tag="span"
      active-class="active"
      to="/Message"
      class="footer-item"
    >
      <span class="iconfont iconxiaoxitongzhi"></span>
      <span>消息</span>
    </router-link>

    <router-link
      tag="span"
      active-class="active"
      to="/Contacts"
      class="footer-item"
    >
      <span class="iconfont icontongxunlu"></span>
      <span>通讯录</span>
    </router-link>
    <router-link tag="span" to="/My" active-class="active" class="footer-item">
      <span class="iconfont iconyonghu_zhanghao_wode"></span>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.layout-footer {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  .iconfont {
    font-size: px(20px);
    color: $select-dim;
  }
  .footer-item {
    flex: 1;
    height: 100%;
    @include centerCol;
    flex-direction: column;
    padding: 7px;
    color: $select-dim;
    font-weight: bolder;
    &.active {
      color: $select-highlight;
      .iconfont {
        color: $select-highlight;
      }
    }
  }
}
</style>
