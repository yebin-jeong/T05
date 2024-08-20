<!-- index.html -->
<template>
  <div class="div" style="display:flex; flex-direction: column; ">

    <Top/>

    <div style="display:flex; width:100%; padding: 0% 5%; justify-content: space-between; margin-bottom: 3%">
      
      <HouseNotice/>
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
    
    <Footer/>
    
    
  </div>

</template>

<script>
  import FAQ from './components/FAQ.vue';
  import Top from './components/Top.vue'
  import HouseNotice from './components/HouseNotice.vue';
  import Footer from './components/Footer.vue';
  export default {
    name: 'App',
    components: {
      FAQ,
      Top,
      HouseNotice,
      Footer,
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
