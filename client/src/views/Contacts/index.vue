<template>
  <Layout>
    <div class="contacts-page">
      通讯录
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
export default class Contacts extends Vue {}
</script>

<style></style>
