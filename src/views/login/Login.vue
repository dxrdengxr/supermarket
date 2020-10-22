<template>
  <div id="login">
   <div class="content">
        <div class="list-block login_form">
            <ul>
                <li>
                    <div class="item-content">
                    <div class="item-media"><i class="icon icon-form-name"></i></div>
                    <div class="item-inner">
                        <div class="item-title label">用户名</div>
                        <div class="item-input">
                        <input class="qxs-ic_user qxs-icon" type="text" placeholder="请输入用户名"  v-model="userName">
                        </div>
                    </div>
                    </div>
                </li>
                <li>
                    <div class="item-content">
                    <div class="item-media"><i class="icon icon-form-email"></i></div>
                    <div class="item-inner">
                        <div class="item-title label" >密码</div>
                        <div class="item-input">
                        <input class="qxs-ic_password qxs-icon" type="password" placeholder="请输入密码" v-model="password">
                        </div>
                    </div>
                    </div>
                </li>
                <el-button type="primary" @click="login">立即登录</el-button>
                
            </ul>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data(){
    return {
      userName:null,
      password:null,
    }
  },
  created () {
    if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
      this.userName = JSON.parse( localStorage.getItem('user')).userName;
      this.password = JSON.parse( localStorage.getItem('password')).password;
      console.log(this.userName,this.password)
    }
    
  },
  computed: {
    btnText() {
      if (this.isBtnLoading) return '登录中...';
      return '登录';
    }
  },
  methods: {
    login() {
      if (!this.userName) {
        alert('请输入用户名');
        return;
      }
      if (!this.password) {
        alert('请输入密码');
        return;
      }
      if(this.userName === 'admin' && this.password ==='123456'){
        localStorage.setItem('user',this.userName)
        localStorage.setItem('user',this.password)
        this.$router.push({
          path:'/home'
        })
      }
      axios({
        methods:'GET',
        url:'https://www.easy-mock.com/mock/5f8b9c96b260f247acdf2bd3/example/login'

        }).then(function(res){
          console.log(res)
      })
    }
  }
  
  
}
</script>

<style scoped>
#login {
  background-color: #f2f2f2;
}
.login_form {
  margin-top: 70%;
  padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;
  font-size: 16px;
}
.item-title{
  margin-bottom: 10px;
  margin-top: 10px;
}
.item-input input{
  border-radius: 4px;
  height: 30px;
}
.el-button--primary{
  margin-top: 10px;
}
.login_logo {
  height: 100%;
}
.login_btn {
  width: 100%;
  font-size: 16px;
  background: -webkit-linear-gradient(left, #000099, #2154FA); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #000099, #2154FA); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #000099, #2154FA); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #000099 , #2154FA); /* 标准的语法 */
  filter: brightness(1.4);
}
</style>