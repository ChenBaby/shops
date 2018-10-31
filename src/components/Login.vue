<template>
    <div class="login-panel">
        <div class="panel">
            <p class="panel-header">
                <a href="javascript:void(0)">
                    <i class="icon icon-close"></i>
                </a>
            </p>
            <div class="panel-main">
                <form>
                    <input type="text" placeholder="请输入用户名称"/>
                    <input type="password" placeholder="请输入密码"/>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Login'
}
</script>
<style lang="less" scoped>
    .login-panel {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.75);
        text-align: center;
        .panel {
            width: 400px;
            height: 480px;
            background-color: #fff;
            position: absolute;
            top: 50%;
            margin-top: -240px;
        }
    }
</style>
