<template>
  <Layout>
    <div class="home-page">
      主页
    </div>
  </Layout>
</template>

<script>
import Vue from 'vue'
import Layout from '@/components/Layout/index'
import Component from 'vue-class-component'
@Component({
  components: {
    Layout,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.home-page {
  height: 3000px;
}
</style>
