<template>
    <div class="house-notice">
        <div class="house-logo" style="margin-top:5%;">
          <img class="sh-logo" src="../assets/image2.svg" />
          <img class="lh-logo" src="../assets/image1.svg" />
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
</template>
<script>
export default {
    name:'HouseNoticeComponent'
}
</script>
<style>
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
</style>