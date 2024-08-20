<!-- index.html -->
<template>
  <div class="div" style="display:flex; flex-direction: column; ">

    <Top/>

    <div style="display:flex; width:100%; padding: 0% 5%; justify-content: space-between; margin-bottom: 3%">
      <div class="house-notice">
        <div class="house-logo" style="margin-top:5%;">
          <img class="sh-logo" src="./assets/image2.svg" />
          <img class="lh-logo" src="./assets/image1.svg" />
        </div>
        <div class="div-22-span2">
            주거복지 공고
            <br />
            한눈에 보기
        </div>
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
      </div>
        
      <div class="address-box">
        <div class="current-address">
          <button class="current-address-change-button">
            <img
            class="button-arrow"
            src="./assets/material-symbols-light_transit-enterexit.svg"
            />
              <span style="top: 50%; transform: translate(-50%, -50%);">주소지 설정</span>
          </button>
          <div class="rectangle-8">
            서울특별시 마포구
            <br />
            상암동 월드컵북로 123
          </div>
          
          
        </div>
        <div class="future-address">
          <button class="future-address-change-button">
            <img
                class="button-arrow"
                src="./assets/material-symbols-light_transit-enterexit.svg"
              />
            주소지 설정
          </button>
          <div class="rectangle-8">
            서울특별시 강서구
            <br />
            우장산동 우장산로 123
          </div>

        </div>
        
      </div>

    </div>

    <div style="display:flex; width:100%; padding: 0% 5%; justify-content: space-between;">
      <FAQ/>
      <button class="compare-button">
        <img class="arrow-right-circle" src="./assets/arrow-right-circle.svg" />
        <span>
          <span class="div-12-span">복지서비스</span>
          <span class="div-12-span2">비교하기</span>
        </span>
      </button>
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
    
  </div>

</template>

<script>
  import FAQ from './components/FAQ.vue';
  import Top from './components/Top.vue'
  export default {
    name: 'App',
    components: {
      FAQ,
      Top,
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

  .house-notice{
    background: #3795ed;
    border-radius: 15px;
    width: 284.79px;
    height: 334px;
    position: static;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .future-address {
    background: #d4e3d0;
    border-radius: 15px;
    width: 45%;
    height: 334px;
    position: static;
  }
  .rectangle-8 {
    background: #ffffff;
    border-radius: 15px;
    width: 90%;
    height: 191px;
    position: static;
    margin-left:5%;

    color: #000000;
    text-align: center;
    font-family: "Inter-Regular", sans-serif;
    font-size: 36px;
    font-weight: 400;

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

  .address-box{
    display:flex;
    width:75%;
    justify-content: space-between;
  }

  .future-address-change-button {
    background: #4f7d43;
    border-radius: 15px;
    width: 208px;
    height: 67px;
    position: relative;

    margin: 5%;

    color: #ffffff;
    text-align: center;
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 25px;
    font-weight: 600;
  }

  .button-arrow {
    width: 40px;
    height: 42px;
    position: static;
    overflow: visible;
  }

  .current-address{
    background: #c8d8f6;
    border-radius: 15px;
    width: 45%;
    height: 333px;
    position: static;
  }

  .current-address-change-button {
    background: #1f72d3;
    border-radius: 15px;
    width: 208px;
    height: 67px;
    position: relative;
    margin: 5%;
    text-align: center;

    color: #ffffff;
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 25px;
    font-weight: 600;
  }

  .compare-button {
    background: #1f72d3;
    border-radius: 15px;
    width: 75%;
    height: 126px;
    position: static;

    color: #ffffff;
    text-align: center;
    font-family: "-", sans-serif;
    font-size: 32px;
    font-weight: 400;
  }
  .arrow-right-circle {
    width: 66.43px;
    height: 69px;
    position: static;
    overflow: visible;
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
    width: 100%;
    height: 273px;
    position: absolute;

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

  .total-count {
    color: #ffffff;
    text-align: center;

    background: #1264af;
    border-radius: 15px;
    width: 100%;
    height: 126.73px;
    position: static;
    bottom: 0px;
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
    position: static;
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
  .sh-logo {
    width: 84.26px;
    height: 55px;
    position: static;
    object-fit: cover;
  }
  .lh-logo {
    width: 87.17px;
    height: 45px;
    position: static;
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
