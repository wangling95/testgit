<template>
  <div>
    <!-- 通过busEvent实现组件传值 -->
    <button @click="clickBtn">click me!</button>
    <button @click="textBtn">click text!</button>
    <!-- 通过js对象的引用特性传递,实现组件传值 -->
    <button @click="personBtn">person btn!</button>
    <!-- 通过vuex实现组件传值 -->
    <button @click="vuexBtn">vuex btn!</button>
  </div>
</template>
<script>
import busEvent from '../../util/util.js'
export default {
  data(){
    return {

    }
  },
  props: [
    'person'
  ],
  methods: {
    // 通过busEvent实现组件传值
    clickBtn(){
      busEvent.$emit('click', {name: 'wll', age: 11})
    },
    textBtn(){
      busEvent.$emit('text', {name: 'wang', age: 21})
    },

    // 通过js对象的引用特性传递,实现组件传值
    personBtn(){
      this.person.name = 'wangling'
      this.person.age = '112'
    },

    // 通过vuex实现组件传值
    vuexBtn(){
      this.$store.commit('changeChiled',{name: 'aaaaa', age: 1234})
    }
  }
}
</script>