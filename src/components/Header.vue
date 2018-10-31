<template>
    <nav class="nav-header clearfix" id="site-header">
        <div class="nav-left">
            <router-link :to="{path: '/'}">
                <img src="../assets/logo.png" alt="logo" class="logo">
            </router-link>
        </div>
        <div class="nav-middle">
            <ul>
                <li>
                    <router-link :to="{path: '/'}">首页</router-link>
                </li>
                <li>
                    <router-link :to="{path: '/weixin'}">微信</router-link>
                </li>
                <li>
                    <router-link :to="{path: '/shop'}">购物</router-link>
                </li>
                <li>
                    <router-link to="{path:'/poker'}">扑克</router-link>
                </li>
            </ul>
        </div>
        <div class="nav-right">
            <ul>
                <li>
                    <a href="javascript:void(0)">
                        <i class="icon icon-search"></i>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <i class="icon icon-cart"></i>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)" @click="logIn" v-show="!loggined">
                        <i class="icon icon-user"></i>
                    </a>
                    <a href="javascript:void(0)" @click="logOut" v-show="loggined">
                        <i>{{user.name}}</i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
  name: 'Header',
  data: function () {
    return {
      loggined: false,
      user: {
        name: ''
      }
    }
  },
  methods: {
    logIn () {
      console.log('登录')
    },
    logOut () {
      console.log('登出')
    }
  }
}
</script>
<style lang="less" scoped>
    .nav-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        border-bottom: solid 1px #eee;
        height: 60px;
        line-height: 60px;
        padding: 0 30px;
        box-sizing: border-box;
        > div, li {
            display: inline-block;
        }
        .logo {
            width: 30px;
            height: 30px;
            vertical-align: middle;
        }
        li {
            margin: 0 15px;
        }
        .nav-left {
            float: left;
            a {
                display: inline-block;
            }
        }
        .nav-middle {
            width: 50%;
            text-align: left;
        }
        .nav-right {
            float: right;
            ul, li, a {
                height: 60px;
            }
            a {
                display: inline-block;
            }
        }
    }
    @media screen  and (max-width: 768px) {
        .nav-header {
            padding: 0px 15px;
        }
    }
</style>
