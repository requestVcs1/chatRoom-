<template>
  <Layout>
    <div class="message-page">
      消息
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
export default class Message extends Vue {}
</script>

<style></style>
