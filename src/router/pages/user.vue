<template>
  <div class='user'>
    <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" :left-options="{showBack: false}">
      个人中心
    </x-header>
    <group gutter="0" class='headInfo'>
      <cell style='background:#4BB7AA;color:#fff;' link='settings/info'>
        <img slot="icon" width="70" height="70" style="border-radius:50%;margin-right:1rem" v-lazy="User.headImg">
        <div slot="after-title" style='color:#fff;'>{{User.name}}</div>
        <div slot="inline-desc" style='color:#fff;padding-top:.25rem'>{{User.mobile}}</div>
      </cell>
    </group>
    <group gutter="0">
      <!--<cell title="我的账户" link="javascript:;">
        <i class="icon iconfont icon-comment2" style="color:#ABC97C" slot="icon"></i>
      </cell>-->
      <cell title="邀请好友" link="invite">
        <i class="icon iconfont icon-share" style="color:#52DCFF" slot="icon"></i>
      </cell>
      <cell title="设置" link="settings">
        <i class="icon iconfont icon-settingfull" style="color:#794BB8" slot="icon"></i>
      </cell>
      <cell title="关于归纳本" link="about">
        <i class="icon iconfont icon-info" style="color:#6DC6FF" slot="icon"></i>
      </cell>
      <cell title="消息通知" link="message">
        <i class="icon iconfont icon-comment2" style="color:#ABC97C" slot="icon"></i>
        <badge text="新消息" v-if="News.correct || News.system"></badge>
      </cell>
      <cell title="版本更新" v-if="System != 'IOS' && User.version !== '3.0.0'" is-link @click.native="_openStore">
        <i class="icon iconfont icon-yingyongshengji" style="color:#FF5454" slot="icon"></i>
        <badge text="新版本"></badge>
      </cell>
    </group>
  </div>
</template>

<script>
import {XHeader, Cell, Group, ViewBox, Badge} from 'vux'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'user',
  components: {
    XHeader, Cell, Group, ViewBox, Badge
  },
  computed: {
    ...mapGetters(['User', 'System', 'News'])
  },
  methods: {
    ...mapActions(['getUserNews']),
    _openStore () {
      window.location.href = 'market://details?id=com.sanbao.teacher.student'
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getUserNews()
    })
  }
}
</script>
