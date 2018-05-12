<template>
  <div id="app">
    <h1>表单输入绑定</h1>
    <h3>你可以用 v-model 指令在表单 input 及 textarea 元素上创建双向数据绑定。<br> 它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上<br> 不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。
    </h3>
    <hr>
    <p>单行文本</p>
    <textarea v-model.lazy.trim="text" placeholder="edit me"></textarea>
    <p>Message is: {{text}}</p>
    <hr>
    <p>多行文本</p>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ text }}</p>
    <hr>
    <p>复选框 单个复选框，绑定到布尔值</p>
    <input type="checkbox" v-model="checkStatus" value="yes">
    <label for="checkbox">{{ checkStatus }}</label>
    <hr>
    <p>复选框 单个复选框，自定义绑定值</p>
    <input type="checkbox" v-model="checkStatus1" value="yes" id="checkbox" true-value="yes" false-value="no">
    <label for="checkbox">{{ checkStatus1 }}</label>
    <hr>
    <p>复选框 多个复选框，绑定到同一个数组：</p>
    <input type="checkbox" v-model="checks" id="jack"  value="jack">
    <label for="jack">jack</label>
    <input type="checkbox" v-model="checks" id="tom" value="tom">
    <label for="tom">tom</label>
    <input type="checkbox" v-model="checks" id="tj" value="tj">
    <label for="tj">tj</label><br> 选中名单{{ checks }}
    <hr>
    <p>单选按钮</p>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
    <hr>
    <p>单项选择框</p>
    <select v-model="selected">
        <option disabled value="">请选择</option>
        <option value="1">tom</option>
        <option value="2">jack</option>
        <option value="3">harry</option>
      </select>
    <span>Selected: {{ selected }}</span>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        text: "",
        checkStatus: true,
        checkStatus1: "yes",
        checks: [],
        picked: "One",
        selected: 1,
      }
    },
    methods: {}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
