<template>
  <Layout>
    <div class="my-page">
      我的
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
export default class My extends Vue {}
</script>

<style></style>
