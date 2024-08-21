<template>
    <div class="footer">
        <div class="div21">기관별 연락처</div>
        <div style="display:flex;">
            <div class="tel-toggle">
                <img class="formkit-up" src="../assets/formkit_up.svg" />
                
                <div class="div18">지역별 복지</div>
            </div>

            <div class="tel-toggle">
                <img class="formkit-up" src="../assets/formkit_up.svg" />
                <div class="div18">정부 기관</div>
            </div>
        </div>

        <ul class="bottom-navbar">
            <li>개인정보처리방침</li>
            <li>홈페이지 이용약관</li>
            <li>품질오류신고 및 확인</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'FooterComponent'
}
</script>
<style>
  .footer {
    background: #dfdee0;
    width: 100%;
    height: 250px;
    position: absolute;
    bottom: 0;
    top: 720px;
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
</style>