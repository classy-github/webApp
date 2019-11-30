<template>
    <div class="login">
        <!-- 导航条 -->
        <van-nav-bar title="登录"/>
        <!-- 手机号 -->
        <van-cell-group >
            <!-- 手机号 -->
            <van-field
                label="手机号"
                placeholder="请输入手机号"
                v-model="user.mobile"
            />
             <!-- 密码 -->
            <van-field
                label="验证码"
                placeholder="请输入验证码"
                v-model="user.code"
            />
        </van-cell-group>

        <!-- 登录按钮 -->
        <div class="login-btn-box">
            <van-button type="info" @click="onLogin">登录</van-button>
        </div>
  </div>
</template>

<script>
// 实现登录流程
// 1. 获取表单数据(根据接口要求使用v-model绑定)
// 2. 注册点击登录事件
// 3. 表单验证
// 4. 发请求提交
// 5. 根据请求结果做下一步处理

// import request from '@/utils/request.js'

import { login } from '@/api/user'
export default {
  name: 'LoginPage',
  components: {},
  // 存放父组件向子组件传过来的数据
  props: {},
  // 存放组件中的数据/带返回值的函数
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  // 计算属性/类似于购物车数据变动时
  computed: {},
  // 自动监听data里面的数据
  watch: {
  },
  // 组件加载时,执行里面的逻辑
  created () {},
  // 存放方法/存放实现哪些功能
  methods: {
    // 登录处理函数
    async onLogin () {
      this.$toast.loading({
        message: '加载中...',
        // 加载中, 为true 按钮是禁用状态(无法点击)
        forbidClick: true,
        duration: 0 // 持续展示 toast
      })
      try {
        const res = await login(this.user)
        this.$toast.success('登陆成功')
        console.log('登陆成功', res)
      } catch (err) {
        this.$toast.fail('登录失败')
        console.log('登录失败', err)
      }
      // 停止loading ,它会把当前页面中所有的toast都给清除
      // loginToast.clear()
    }
  }
}
</script>

<style scoped lang='less'>
    .login{
        .login-btn-box{
            padding: 20px;
            .van-button{
                width: 100%;
            }
        }
    }
</style>
