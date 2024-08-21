<template>
    <div class="rectangle house-notice">
        <div class="house-logo" style="margin-top:5%;">
          <img class="sh-logo" src="../assets/image2.svg" />
          <img class="lh-logo" src="../assets/image1.svg" />
        </div>
        <div class="div-22-span2">
            주거복지 공고
            <br />
            한눈에 보기
        </div>
        <div class="rectangle total-count">
          <span>
            <span class="total-text">
              전체
              <br />
            </span>
            <span class="total-text" style="font-size: 48px;">113</span>
            <span class="total-text" style="font-size: 24px;">건</span>
          </span>
        </div>
      </div>
</template>
<script>
export default {
    name:'HouseNoticeComponent'
}
</script>
<style>
    .house-notice{
    background: #3795ed;
    width: 282px;
    height: 334px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

  .total-count {
    color: #ffffff;
    text-align: center;

    background: #1264af;
    width: 100%;
    height: 126.73px;
    position: static;
    bottom: 0px;
  }
  .total-text {
    color: #ffffff;
    font-family: "Inter-Bold", sans-serif;
    font-size: 24px;
    font-weight: 700;
  }
  
  .div-22-span2 {
    color: #ffffff;
    font-family: "Inter-Bold", sans-serif;
    font-size: 32px;
    font-weight: 700;
  }
</style>