<!-- index.html -->
<template>
  <div class="div">
    <div class="top">
      <div class="logo">
        <div class="logotext">
          <span>
            <span class="logotext-span">이사</span>
            <span class="logotext-span2">소통</span>
          </span>
        </div>
        <img class="vector" src="./assets/house.svg" />
      </div>
      <img class="menu-icon" src="./assets/menu.svg" />
      <div class="user">
        <div class="frame-1">
          <div class="username">정예빈</div>
        </div>
        <img class="account-circle" src="./assets/account_circle.svg" />
      </div>
      
    </div>

    <FAQ/>

    <div class="address-box">
      <div class="current-address">
        <div class="rectangle-6"></div>
        <button class="current-address-change-button">
            주소지 설정
        </button>
        <div class="rectangle-84">
          <div class="_1232">
            서울특별시 마포구
            <br />
            상암동 월드컵북로 123
          </div>
        </div>
        
        <img
          class="material-symbols-light-transit-enterexit2"
          src="./assets/material-symbols-light_transit-enterexit.svg"
        />
      </div>

      <div class="future-address">
        <div class="rectangle-7"></div>
        <div class="rectangle-8">
          <div class="_123">
            서울특별시 강서구
            <br />
            우장산동 우장산로 123
          </div>
        </div>
        
        <div class="div4">
          <button class="future-address-change-button">
            주소지 설정
          </button>
          <img
            class="material-symbols-light-transit-enterexit"
            src="./assets/material-symbols-light_transit-enterexit.svg"
          />
        </div>  
      </div>
      
      
    </div>

    <div class="compare-button">
      <div class="rectangle-9"></div>
        <img class="arrow-right-circle" src="./assets/arrow-right-circle.svg" />
      <div class="div12">
        <span>
          <span class="div-12-span">복지서비스</span>
          <span class="div-12-span2">비교하기</span>
        </span>
      </div>
    </div>

    <div class="footer">
      <div class="div21">기관별 연락처</div>
      <div style="display:flex;">
        <div class="tel-toggle">
          <img class="formkit-up" src="./assets/formkit_up.svg" />
          
          <div class="div18">지역별 복지</div>
        </div>

        <div class="tel-toggle">
          <img class="formkit-up" src="./assets/formkit_up.svg" />
          <div class="div18">정부 기관</div>
        </div>
      </div>
    
      <ul class="bottom-navbar">
        <li>개인정보처리방침</li>
        <li>홈페이지 이용약관</li>
        <li>품질오류신고 및 확인</li>
      </ul>
    </div>
    
    <div class="house-notice">
      <div class="rectangle-2"></div>
      <div class="rectangle-4"></div>
      <div class="total-count">
        <span>
          <span class="_113-span">
            전체
            <br />
          </span>
          <span class="_113-span2">113</span>
          <span class="_113-span3">건</span>
        </span>
      </div>
      <div class="div22">
        <span>
          <span class="div-22-span"></span>
          <span class="div-22-span2">
            주거복지 공고
            <br />
            한눈에 보기
          </span>
        </span>
      </div>
      <img class="image-2" src="./assets/image2.svg" />
      <img class="image-1" src="./assets/image1.svg" />
    </div>
  </div>

</template>

<script>
  import FAQ from './components/FAQ.vue';

  export default {
    name: 'App',
    components: {
      FAQ,
    },
    data() {
      return {};
    },  
  };  
</script>
<!-- style.css -->
<style>
  .div,
  .div * {
    box-sizing: border-box;
  }
  .div {
    background: #ffffff;
    height: 1024px;
    position: relative;
    overflow: hidden;
  }

  .div3 {
    position: absolute;
    inset: 0;
  }
  .rectangle-7 {
    background: #d4e3d0;
    border-radius: 15px;
    width: 440px;
    height: 334px;
    position: absolute;
    left: 921px;
    top: 185px;
  }
  .rectangle-8 {
    background: #ffffff;
    border-radius: 15px;
    width: 385px;
    height: 191px;
    position: absolute;
    left: 948px;
    top: 302px;
  }
  .frame-3 {
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 944px;
    top: 343px;
  }
  ._123 {
    color: #000000;
    text-align: center;
    font-family: "Inter-Regular", sans-serif;
    font-size: 36px;
    font-weight: 400;
    position: relative;
    width: 367px;
  }
  .div4 {
    width: 208px;
    height: 67px;
    position: static;
  }
  .future-address-change-button {
    background: #4f7d43;
    border-radius: 15px;
    width: 208px;
    height: 67px;
    position: absolute;
    left: 949px;
    top: 209px;

    color: #ffffff;
    text-align: center;
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 25px;
    font-weight: 600;
  }

  .material-symbols-light-transit-enterexit {
    width: 40px;
    height: 42px;
    position: absolute;
    right: 251px;
    top: 263px;
    overflow: visible;
  }
  .logo {
    width: 198.18px;
    height: 57.94px;
    position: static;
  }
  .logotext {
    text-align: left;
    position: absolute;
    left: 176.18px;
    top: 72.94px;
  }
  .logotext-span {
    color: #b8adad;
    font-family: "Inter-Bold", sans-serif;
    font-size: 32px;
    letter-spacing: 0.01em;
    font-weight: 700;
  }

  .logotext-span2 {
    color: #268ae5;
    font-family: "Inter-Bold", sans-serif;
    font-size: 40px;
    letter-spacing: -0.06em;
    font-weight: 700;
  }

  .vector {
    width: 8%;
    height: 8%;
    position: absolute;
    right: 88%;
    bottom: 86%;
    overflow: visible;
  }

  .menu-icon {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 1311px;
    top: 57px;
    overflow: visible;
  }
  .user {
    width: 142px;
    height: 55px;
    position: static;
  }
  .frame-1 {
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 1195px;
    top: 59px;
  }
  .username {
    color: #49454f;
    text-align: left;
    font-family: "Inter-Thin", sans-serif;
    font-size: 24px;
    font-weight: 100;
    position: relative;
  }
  .account-circle {
    width: 55px;
    height: 55px;
    position: absolute;
    left: 1140px;
    top: 58px;
    overflow: visible;
  }
  .rectangle-6 {
    background: #c8d8f6;
    border-radius: 15px;
    width: 440px;
    height: 333px;
    position: absolute;
    left: 433px;
    top: 186px;
  }
  .current-address-change-button {
    background: #1f72d3;
    border-radius: 15px;
    width: 208px;
    height: 67px;
    position: absolute;
    left: 461px;
    top: 210px;
    text-align: center;

    color: #ffffff;
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 25px;
    font-weight: 600;
    position: absolute;

  }

  .material-symbols-light-transit-enterexit2 {
    width: 40px;
    height: 42px;
    position: absolute;
    right: 739px;
    top: 264px;
    overflow: visible;
  }
  .rectangle-84 {
    background: #ffffff;
    border-radius: 15px;
    width: 385px;
    height: 191px;
    position: absolute;
    left: 461px;
    top: 302px;
  }
  .frame-2 {
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 466px;
    position: absolute;
    left: 420px;
    top: 344px;
  }
  ._1232 {
    color: #000000;
    text-align: center;
    font-family: "Inter-Regular", sans-serif;
    font-size: 36px;
    font-weight: 400;
    position: relative;
    width: 381px;
  }
  .rectangle-9 {
    background: #1f72d3;
    border-radius: 15px;
    width: 932px;
    height: 126px;
    position: absolute;
    left: 429px;
    top: 570px;
  }
  .arrow-right-circle {
    width: 66.43px;
    height: 69px;
    position: absolute;
    left: 1051px;
    top: 599px;
    overflow: visible;
  }
  .div12 {
    color: #ffffff;
    text-align: center;
    font-family: "-", sans-serif;
    font-size: 32px;
    font-weight: 400;
    position: absolute;
    left: 753px;
    top: 615px;
    width: 300px;
    height: 40px;
  }
  .div-12-span {
    color: #ffffff;
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 30px;
    font-weight: 600;
  }
  .div-12-span2 {
    color: #ffffff;
    font-family: "Inter-Regular", sans-serif;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 30px;
    font-weight: 400;
  }

  .footer {
    background: #dfdee0;
    width: 1440px;
    height: 273px;
    position: absolute;
    left: 0px;
    top: 751px;
  }
  
  .bottom-navbar{
    color: #000000;
    text-align: left;
    font-family: "Inter-Regular", sans-serif;
    font-size: 24px;
    font-weight: 400;

    display: flex;
    
    align-items: center;
    padding-left: 5%;
    margin-top: 2%
  }

  .bottom-navbar li{
    margin-right: 3%
  }

  .div15 {
    color: #000000;
    text-align: left;
    font-family: "Inter-Regular", sans-serif;
    font-size: 24px;
    font-weight: 400;
    position: absolute;
    left: 291px;
    top: 948.75px;
    width: 250px;
    height: 35.91px;
  }
  .div16 {
    color: #000000;
    text-align: left;
    font-family: "Inter-Regular", sans-serif;
    font-size: 24px;
    font-weight: 400;
    position: absolute;
    left: 506px;
    top: 948.75px;
    width: 245px;
    height: 36.79px;
  }
  .tel-toggle {
    display: flex;

    width: 409px;
    height: 58.7px;
    position: static;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.62);
    border-width: 1px;
    
    margin-top:2%;
    margin-left: 5%;
    padding-top:1%;
  }

  .formkit-up {
    width: 50px;
    height: 17.52px;
    position: static;
    left: 430px;
    top: 870.27px;
    overflow: visible;
    
    border-color: black;
    border-width: 1px;
  }
  
  .div18 {
    color: rgba(0, 0, 0, 0.91);
    text-align: left;
    font-family: "Inter-Thin", sans-serif;
    font-size: 24px;
    font-weight: 100;
    position: static;
    left: 104px;
    top: 864.14px;
    width: 133px;
    height: 45.54px;
  }

  .div21 {
    margin-left: 5%;
    margin-top:2%;
    color: #000000;
    text-align: center;
    font-family: "Inter-ExtraBold", sans-serif;
    font-size: 25px;
    font-weight: 800;
    position: static;
    left: 81px;
    top: 791px;
    width: 170px;
    height: 29px;
  }
  .rectangle-2 {
    background: #3795ed;
    border-radius: 15px;
    width: 284.79px;
    height: 334px;
    position: absolute;
    left: 82.84px;
    top: 185px;
  }
  .rectangle-4 {
    background: #1264af;
    border-radius: 15px;
    width: 285.63px;
    height: 126.73px;
    position: absolute;
    left: 82px;
    top: 392.27px;
  }
  .total-count {
    color: #ffffff;
    text-align: center;
    position: absolute;
    left: 152.15px;
    top: 407.31px;
    width: 146.15px;
    height: 111.69px;
  }
  ._113-span {
    color: #ffffff;
    font-family: "Inter-Bold", sans-serif;
    font-size: 24px;
    font-weight: 700;
  }
  ._113-span2 {
    color: #ffffff;
    font-family: "Inter-Bold", sans-serif;
    font-size: 48px;
    font-weight: 700;
  }
  ._113-span3 {
    color: #ffffff;
    font-family: "Inter-Bold", sans-serif;
    font-size: 24px;
    font-weight: 700;
  }
  .div22 {
    color: #ffffff;
    text-align: center;
    position: absolute;
    left: 107.64px;
    top: 281px;
    width: 236.99px;
    height: 111px;
  }
  .div-22-span {
    color: #ffffff;
    font-family: "Inter-Bold", sans-serif;
    font-size: 40px;
    font-weight: 700;
  }
  .div-22-span2 {
    color: #ffffff;
    font-family: "Inter-Bold", sans-serif;
    font-size: 32px;
    font-weight: 700;
  }
  .image-2 {
    width: 84.26px;
    height: 55px;
    position: absolute;
    left: 245px;
    top: 211px;
    object-fit: cover;
  }
  .image-1 {
    width: 87.17px;
    height: 45px;
    position: absolute;
    left: 128.87px;
    top: 216px;
    object-fit: cover;
  }

  a,
  button,
  input,
  select,
  h1,
  h2,
  h3,
  h4,
  h5,
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    background: none;

    -webkit-font-smoothing: antialiased;
  }

  menu,
  ol,
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

</style>
