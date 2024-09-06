<template>
    <div class="top">
      <div class="top-wrapper">
        <div @click="goToMainPage" class="logo">
          <img class="vector" src="../assets/logo.svg" />
        </div>
        <ul class="top-navbar">
              <li class="top-navbar-item">복지 비교하기</li>
              <li @click="goToHouseNoticePage" class="top-navbar-item">주거복지 공고</li>
              <li class="top-navbar-item">자주 묻는 질문</li>
          </ul>
        <div class="user">
          <img @click="goToTest" class="account-circle" src="../assets/icons/account_circle.svg" />
          <div class="username">정예빈</div>
          <img class="menu-icon" src="../assets/icons/menu.svg" />
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    name:'TopComponent',
      methods: {
        goToTest() {
          this.$router.push('/TestPage');  // '/test' 경로로 이동
        },
        goToMainPage(){
          this.$router.push('/');
        },
        goToHouseNoticePage(){
          this.$router.push('/HouseNoticePage')
        }
      },
      data() {
        return {
          
        };
      },
    }
</script>
<style>
  .top{
    background-color: white;
    position: fixed;
    top: 0px;
    left:0px;
    z-index: 10;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2% 5%;
    justify-content: center;
    height: 120px;
    min-width: 1440px;
  }

  .top-wrapper{
    background-color: white;
    top: 0px;
    z-index: 10;
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 100px;
  }

  .logo {
    width: 198.18px;
    height: 57.94px;
    position: static;
    display: flex;
    cursor: pointer;
  }

  .vector {
    position: static;
    overflow: visible;
    
  }

  .menu-icon {
    width: 50px;
    height: 50px;
    position: static;
    overflow: visible;
  }
  .user {
    width: 142px;
    height: 55px;
    position: static;
    display: flex;
    gap:20px;
    margin-right:3%
  }

  .username {
    color: #49454f;
    text-align: center;
    font-family: "Inter-Thin", sans-serif;
    font-size: 24px;
    white-space:nowrap;
    font-weight: 100;
    position: relative;
  }
  .account-circle {
    width: 55px;
    height: 55px;
    position: static;
    overflow: visible;
    cursor: pointer;
  }
 
  .top-navbar{
    color: #000000;
    text-align: left;
    font-family: "Inter-Regular", sans-serif;
    font-size: 24px;
    font-weight: 400;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5%;
  }

  .top-navbar-item:not(:last-child) {
    border-right: 1px solid #707D87; /* 구분선을 흰색으로 추가 */
  }

  .top-navbar-item{
    color: #707D87;
    text-decoration: none;
    padding: 10px 15px;
    display: block;
  }
</style>