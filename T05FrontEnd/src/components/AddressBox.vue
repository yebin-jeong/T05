<template>
    <div class="address-box">
        <div class="rectangle address current">
          <div>
            <button class="address-change-button current-button">
              <img
              class="button-arrow"
              src="../assets/icons/material-symbols-light_transit-enterexit.svg"
              />
                <span style="position: absolute; left: 10%; top: 25%">주소지 설정</span>
            </button>
          </div>
          <div class="rectangle address-text">
              <div class="center-text">
              서울특별시 마포구
              <br />
              상암동 월드컵북로 123
            </div>
          </div>
          
        </div>
        <div class="rectangle address future">
          <button class="address-change-button future-button">
            <div>
              <img
                  class="button-arrow"
                  src="../assets/icons/material-symbols-light_transit-enterexit.svg"
                />
              <span style="position: absolute; left: 10%; top: 25%">주소지 설정</span>
            </div>
          </button>
          <div class="rectangle address-text">
            <div class="center-text">
              서울특별시 강서구
              <br />
              우장산동 우장산로 123
            </div>
            
          </div>
        </div>   
      </div>
</template>
<script>
export default {
    name:"AddressBoxComponent"
}
</script>
<style>
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

  .address-text{
    background-color: white;
    width: 90%;
    height: 60%;
    margin:5%;
    margin-top:0%;
    font-size: 36px;
    font-weight: 400;
    text-align: center;
  }

  .button-arrow {
    position: absolute;
    overflow: visible;
    right: 3%;
    top: 20%;
  }
</style>