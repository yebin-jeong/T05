<template>
    <Top/>
        <div class="wrapper" style="display: flex;">
          <div class="rectangle myPageMenu">
            <div class="menu-text">
              마이페이지
              <br/>
              <span>정예빈</span><span style="font-size: 20px; font-weight: 200;"> 님</span>
            </div>
          
            <div class="rectangle myPageMenu-2">
              <span style="border-bottom: solid navy;">회원정보</span>
              <ul class="myPageMenu-navbar">
                <li>비밀번호 변경</li>
                <li>나의 자가진단</li>
                <li>공고문 스크랩</li>
              </ul>
            </div>
            
          </div>

          <div class="myPageMain">
            <div>메뉴 > 마이페이지 > 회원정보</div>
            <div style="width: 80%;"></div>
            <component :is="currentView" />
          </div>
        </div>
    <Footer/>
</template>
<script>
import Top from '@/components/Top.vue';
import Footer from '@/components/Footer.vue';
import MyPage1 from '@/components/MyPage1.vue';
export default {
  name: 'MyPage',
  components:{
    Top,
    Footer,
    MyPage1
  },

  data() {
    return {
      currentView: 'MyPage1',
    };
  },
};
</script>
<style>
  .myPageMenu{
    width: 15%;
    height: 334px;
    background-color: #1264af;
    
    margin:5%;
    margin-top:15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color:white;
  }

  .myPageMenu-2{
    width: 95%;
    height: 60%;
    background-color: white;
    margin: 2.5%;
    color:black;
    padding:7%;
    font-size: 20px;
    font-weight: 600;
    color:navy;
  }

  .menu-text{
    margin: 10%;
    font-family: "Inter-Bold", sans-serif;
    font-size: 24px;
    font-weight: 700; 
  }

  .myPageMenu-navbar{
    color: black;
    font-weight: 500;
    margin-top:10%;
  }
  .myPageMenu-navbar li {
    margin-bottom:7%;
  }

  .myPageMain{
    margin-top: 12%;
  }
</style>