<template>
	<div>
		<el-container>
          <el-header>头</el-header>
          <el-container>
            <el-aside :span="8">导航</el-aside>
            <el-container>
              <el-main>主体</el-main>
              <el-footer>尾部</el-footer>
            </el-container>
          </el-container>
        </el-container>
        <router-view></router-view>
	</div>
</template>
<script >
	  export default {
        data () {
            return {
                aboutMsg: '我是Home组件'
            }
        }

    }
</script>
<style scoped>
   .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
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
    text-align: center;
    line-height: 160px;
    height: 600px;
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