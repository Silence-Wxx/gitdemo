<template>
	<div>
		<el-container>
          <el-header>Header</el-header>
          <el-main >
            <el-row type="flex" >
                <el-col :span="14">111</el-col>
                <el-col :push="0" :span="8">
                    <div class="login ">
                    <el-form label-position="left" label-width="80px" :model="user" >
                      <el-form-item label="用户名" >
                        <el-input v-model="user.username"></el-input>
                      </el-form-item>
                      <el-form-item label="密码">
                        <el-input  type="password" v-model="user.password"></el-input>
                      </el-form-item>
                      <el-form-item label="验证码">
                        <el-input v-model="user.validate"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary" @click="login('user')">提交</el-button>
                      </el-form-item>
                    </el-form>
                    </div>
                </el-col>
            </el-row>
          </el-main>
          <el-footer >Footer</el-footer>
        </el-container>
	</div>
</template>
<script >
	  export default {
        data () {
            return {
                user: {
                  username: '',
                  password: '',
                  validate: ''
                }
            }
        },
        methods:{
            login(user){
              this.$router.push({path:"/Home"});
            }
        }

    }
</script>
<style scoped>
    .login{
        margin-top:100px;
    }
   .el-header, .el-footer {
    background-color: #f56c6c;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    line-height: 160px;
    height:600px;
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