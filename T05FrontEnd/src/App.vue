<!-- index.html -->
<template>
  <div class="div" style="display:flex; flex-direction: column; ">

    <Top/>

    <div style="display:flex; width:100%; padding: 0% 5%; justify-content: space-between; margin-bottom: 3%">
      
      <HouseNotice/>
      <div class="address-box">
        <div class="rectangle address current">
          <div>
            <button class="address-change-button current-button">
              <img
              class="button-arrow"
              src="./assets/material-symbols-light_transit-enterexit.svg"
              />
                <span style="position: absolute; left: 10%; top: 25%">주소지 설정</span>
            </button>
          </div>
          <div class="rectangle address-text">
            서울특별시 마포구
            <br />
            상암동 월드컵북로 123
          </div>
          
        </div>
        <div class="rectangle address future">
          <button class="address-change-button future-button">
            <div>
              <img
                  class="button-arrow"
                  src="./assets/material-symbols-light_transit-enterexit.svg"
                />
              <span style="position: absolute; left: 10%; top: 25%">주소지 설정</span>
            </div>
          </button>
          <div class="rectangle address-text">
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
        <span style="position:absolute; left: 40%; top: 35%; white-space: nowrap;">
          <span class="div-12-span" style="font-weight: 600;">복지서비스</span>
          <span class="div-12-span" style="margin-left: 5%;margin-right: 5%;">비교하기</span>
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
  button{
    border-radius: 15px;
    text-align: center;
    position: relative;
  }

  .address-box{
    width: 75%;
    display:flex;
    justify-content: space-between;
  }

  .address{
    width: 48%;
    height: 333px;
    position: static;
    display: flex;
    flex-direction: column;
  }

  .current {
    background: #c8d8f6;
  }

  .future {
    background: #d4e3d0;
  }

  .address-change-button { 
    width: 40%;
    height: 67px;
    position: relative;
    margin: 5%;

    color: #ffffff;
    font-family: "Inter-SemiBold", sans-serif;
    font-size: 25px;
    font-weight: 600;
  }

  .current-button{
    background: #1f72d3;
  }

  .future-button{
    background: #4f7d43;
  }
  .rectangle {
    border-radius: 15px;
    position: static;
    position:relative;
    font-family: "Inter-Regular", sans-serif;
  }

  .address-text{
    background-color: white;
    width: 90%;
    height: 60%;
    margin:5%;
    margin-top:0%;
    font-size: 36px;
    font-weight: 400;
  }

  .button-arrow {
    position: absolute;
    overflow: visible;
    right: 3%;
    top: 20%;
  }

  .compare-button {
    background: #1f72d3;
    width: 75%;
    height: 126px;
    position: relative;

    color: #ffffff;
    text-align: center;
    font-family: "-", sans-serif;
    font-size: 32px;
    font-weight: 400;
  }

  .arrow-right-circle {
    position: absolute;
    overflow: visible;
    left: 30%;
    top: 25%
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
