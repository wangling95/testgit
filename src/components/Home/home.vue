<template>
  <div class="home-content">
    <p class="test-less">test less!</p>
    组件add
    <add :person='person'/>
    组件edit
    <edit :person='person'></edit>
  </div>
</template>
<script>
import {requestConfig} from '../../request.js'
import {mapState} from 'vuex';
import add from './add'
import edit from './edit'
// import child from './child'

import busEvent from '../../util/util.js'

export default {
  data(){
    return {
      data: '',
      douban: '',
      age: 0,
      // 不同组件间的通信,使用js对象的引用特性传递
      person: {name: '', age: ''}
    }
  },
  created(){
    this.getDouban()
    this.getEssix()
    this.$store.commit('switch_dialog1')
    this.$store.dispatch('switch_dialog2')
    let a = mapState({
      show: state=>state.test1.show
    })
    let c = {}
    for(let i in a) {
      c[i] = a[i]
    }
    // let c = {a}
    console.log(a, c)


    // 不同组件间的通信,使用busEvent
    busEvent.$on('text', data => {
      this.age = data.age
      console.log(data.age)
    })

  },
  computed:{
    //这里的三点叫做 : 扩展运算符
    ...mapState({
      show: state=>state.test1.show
    }),
    // 使用mapState相当于下面的简写
    show2(){
      return this.$store.state.test1.show;
    }
  },
  methods: {
    getDouban(){
      requestConfig.douban({
        page: 1,
        tab: 'ask',
        limit: 3,
        mdrender: true
      })
      .then(res => {
        this.douban = res
      })
    },
    getEssix(){
      // console.log('jjs')
      requestConfig.essix({
        start: 25,
        count: 25
      })
      .then(res => {
        this.data = res
        // console.log(res, 'res')
      })
    }
  },
  components: {
    add,
    edit,
    // child
  }
}
</script>
<style lang="scss" scoped>
// .home-content {
//   .test-less {
//     color: red;
//   }
// }
</style>
