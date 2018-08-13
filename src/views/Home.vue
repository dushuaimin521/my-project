<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="3">
          <img src="../assets/logo.png" alt="">
        </el-col>
        <el-col :span="20">
          <div class="title">杜哥哥充值QB系统</div>
        </el-col>
        <el-col :span="1">
            <div class="logout"><a href="" @click.prevent="handleLogout">退出</a></div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <el-menu
          style="height:100%"
          unique-opened
          router
          default-active="/users">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-star-off"></i>
              <span>用户管理</span>
            </template>
              <el-menu-item index="/users">
                <i class="el-icon-star-off"></i>
                用户列表
              </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-star-off"></i>
              <span>权限管理</span>
            </template>
              <el-menu-item index="/roles">
                <i class="el-icon-star-off"></i>
                角色列表
              </el-menu-item>
              <el-menu-item index="/rights">
                <i class="el-icon-star-off"></i>
                权限列表
              </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-star-off"></i>
              <span>商品管理</span>
            </template>
              <el-menu-item index="3-1">
                <i class="el-icon-star-off"></i>
                商品列表
              </el-menu-item>
              <el-menu-item index="3-2">
                <i class="el-icon-star-off"></i>
                分类参数
              </el-menu-item>
              <el-menu-item index="3-3">
                <i class="el-icon-star-off"></i>
                商品分类
              </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-star-off"></i>
              <span>订单管理</span>
            </template>
              <el-menu-item index="4-1">
                <i class="el-icon-star-off"></i>
                订单列表
              </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-star-off"></i>
              <span>数据统计</span>
            </template>
              <el-menu-item index="5-1">
                <i class="el-icon-star-off"></i>
                数据报表
              </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  beforeCreate() {
    var token = sessionStorage.getItem('token');
    if (!token) {
      this.$message.warning('请先登录');
      this.$router.push('/login');
    }
  },
  methods: {
    handleLogout() {
      this.$message.success('成功退出');
      sessionStorage.clear();
      this.$router.push('/login');
    }
  }
};
</script>

<style>
  .container {
    height: 100%;
  }
  .header {
    background-color: red;
    padding: 0;
  }
  .header .title {
    text-align: center;
    line-height: 60px;
    color: white;
    font-size: 24px;
  }
  .header .logout {
    text-align: center;
    line-height: 60px;
  }
  .header .logout a {
    color: white;
    text-decoration: none;
  }
  .aside {
    background-color: yellow;
  }
  .main {
    background-color: pink;
  }
</style>
