<template>
  <div class="gnb-changeSub">
    <p @click='onDisplay()'>{{selected === 2 ? '数学' : '物理' }}<span class="with_arrow"></span></p>
    <mt-popup v-model="visible" popup-transition="popup-fade" class="gnb-changeSub-popup">
      <template v-for="item in subjectAllList">
        <p @click="onClickBack(item)" :class="item.id  === selected ? 'active' : ''">{{item.value}}</p>
      </template>
    </mt-popup>
  </div>
</template>

<script>
import { Popup } from 'mint-ui'
import './index.less'

export default {
  components: {
    'mt-popup': Popup
  },
  data () {
    return {
      visible: false,
      selected: 2,
      subjectAllList: [
        { id: 2, value: '数学', key: 'math' },
        { id: 7, value: '物理', key: 'physics' }
      ]
    }
  },
  methods: {
    onDisplay () {
      this.visible = true
    },
    // 点击科目提交的回调
    onClickBack (item) {
      if (this.selected !== item.id) {
        this.selected = item.id
        this.$emit('update:change', item.id)
      }
      this.visible = false
    }
  },
  created () {
    this.$emit('update:change', this.selected)
  }
}
</script>
