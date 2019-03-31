export default {
  state:{
    show:false,
    off: true,
    hidden: false,
    person: {name: '', age: ''}
  },
  // getters只能读取，不能修改
  getters:{
    not_show(state){//这里的state对应着上面这个state
        return !state.show;
    }
  },
  mutations:{
    switch_dialog1(state){//这里的state对应着上面这个state
      // 变更状态
      state.show = state.show?false:true;
      state.off = state.off?false:true;
      //你还可以在这里执行其他的操作改变state
    },

    // 使用vuex修改传递给子组件的值
    changeChiled(state,data){
      state.person.name = data.name
      state.person.age = data.age
    }

  },
  actions:{
    switch_dialog2(context){//这里的context和我们使用的$store拥有相同的对象和方法
      context.commit('switch_dialog1');
      //你还可以在这里触发其他的mutations方法
    },
  }
}