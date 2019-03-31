<template>
  <div>
    edit
    <!-- 通过busEvent实现组件传值 -->
    <p>{{name}}</p>
    <!-- 通过js对象的引用特性传递,实现组件传值 -->
    <span>{{person.name}}</span>
    <!-- 通过vuex实现组件传值 -->
    <span>{{$store.state.test1.person.age}}</span>
  </div>
</template>
<script>
import busEvent from '../../util/util.js'

export default {
  data(){
    return {
      name: ''
    }
  },
  watch: {
    // 通过js对象的引用特性传递,实现组件传值之后，需要对拿到的值再进行其他操作
    'person.name': {
      deep: true,
      handler: function(newdata, olddata){
        newdata = 'nihao!'
        this.name = newdata
        console.log(newdata, olddata)
      }
    },
    // 通过vuex实现组件传值,实现组件传值之后，需要对拿到的值再进行其他操作
    '$store.state.test1.person.age': {
      deep: true,
      handler: function(newperson, oldperson){
        console.log(newperson, oldperson, 'aaa')
      }
    }
  },
  props: [
    'person'
  ],
  created(){
    // 通过busEvent实现组件传值
    busEvent.$on('click', data => {
      this.name = data.name
      console.log(data.name)
    })
  }
}
</script>