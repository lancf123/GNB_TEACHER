<template>
  <view-box ref="messageClass" body-padding-top="46px">
    <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:1;" :left-options="{backText: '班级通知'}"></x-header>
    <div v-if="!loading" class="messageSection">
      <section v-for="(item, index) in messageClassList" :key='index'>
        <h3>{{item.time | ymd}}</h3>
        <article>{{item.content}}</article>
      </section>
    </div>
    <div style="text-align:center">
      <spinner v-if="loading" type="dots"></spinner>
      <p v-else-if="messageClassList.length == 0" style="font-size:16px;padding:10px 0;color:#4BB7AA">暂无班级消息~</p>
    </div>
  </view-box>
</template>
<script>
import {XHeader, ViewBox, Spinner} from 'vux'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'class',
  components: {
    XHeader, ViewBox, Spinner
  },
  computed: {
    ...mapGetters(['messageClassList'])
  },
  data () {
    return {
      loading: true
    }
  },
  methods: {
    ...mapActions(['getMessageClass', 'clearMessage'])
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.loading = true
      vm.getMessageClass().then(() => {
        vm.loading = false
      }).catch((e) => {
        vm.loading = false
      })
    })
  },
  beforeRouteLeave (to, from, next) {
    this.clearMessage()
    next()
  }
}
</script>
