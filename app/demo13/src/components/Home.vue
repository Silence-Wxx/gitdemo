<template>
	<div>
		<el-container>
      <el-header>
        <el-row type="flex" justify="start">
          <el-col :span="4"> 安源电力工程计算软件</el-col>
          <el-col :span="20" :push="18">
            <el-dropdown  >
              <i class="el-icon-setting" style="margin-right: 10px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
             <span >{{user.username}}</span>
          </el-col>
        </el-row> 
      </el-header>

      <el-container>
        <el-aside :span="8">
          <el-col :span="24">
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                @select="selection">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>经济效益计算</span>
                  </template>                      
                  <el-menu-item index="1-1" indexPath="111">基本参数</el-menu-item>
                  <el-menu-item index="1-2" disabled>成本费用</el-menu-item>
                  <el-menu-item index="1-3">销售费用</el-menu-item>
                  <el-menu-item index="1-4">税金及其他</el-menu-item>
                  <el-menu-item index="1-5">不确定分析</el-menu-item>
                  <el-submenu index="1-6">
                    <template slot="title">选项3</template>
                    <el-menu-item index="1-3-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">经济效益反算</span>
                </el-menu-item>
                <el-menu-item index="3" >
                  <i class="el-icon-document"></i>
                  <span slot="title">数据分析</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">用户管理</span>
                </el-menu-item>
                <el-menu-item index="5">
                  <i class="el-icon-setting"></i>
                  <span slot="title">辅助功能</span>
                </el-menu-item>
              </el-menu>
            </el-col> 
        </el-aside>
        <el-container>
            <el-main>
              <el-row >
                <el-col>
                  <el-steps :active="1" align-center>
                    <el-step title="基本参数" ></el-step>
                    <el-step title="成本费用" ></el-step>
                    <el-step title="销售收入" ></el-step>
                    <el-step title="税金及其他" ></el-step>
                    <el-step title="不确定分析" ></el-step>
                    <el-step title="报表输出" ></el-step>
                  </el-steps>
                </el-col>
              </el-row>
              <el-row>
                <el-col>
                  <router-view></router-view>
                </el-col>
              </el-row>
            </el-main>
          <el-footer>尾部</el-footer>
        </el-container>
      </el-container>
    </el-container>
      
	</div>
</template>
<script >
import {mapState} from "vuex";
	  export default {
        data () {
            return {
               
            }
        },
        methods:{
            handleOpen(key, keyPath) {
              console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
              console.log(key, keyPath);
            },
            selection(index,indexPath){
              console.log(index);
              console.log(indexPath);
            }
        },
        computed:mapState([
          'user'
        ]),
        mounted:function(){
          if(this.user.username== ""){
              console.log("用户没有登陆");
              this.$router.push({
                path: "/Login"
              });
          }
        }
    }
</script>
<style scoped>
   .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: left;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 20px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    min-height: 800px;
    
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>