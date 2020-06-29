<template>
  <div class="index-wrap">
    <Header />
    <div class="main">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Header from './Header.vue'
import Footer from './Footer.vue'
@Component({
  components: {
    Header,
    Footer,
  },
})
export default class Layout extends Vue {
  // 初始数据可以直接声明为实例的 property
  message: string = 'Hello!'

  // 组件方法也可以直接声明为实例的方法
  onClick(): void {
    window.alert(this.message)
  }
}
</script>

<style lang="scss">
.index-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    overflow: auto;
  }
}
</style>
