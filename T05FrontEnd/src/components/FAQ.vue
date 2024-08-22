<template>
    <div class="rectangle FAQ" @click="goToFAQPage">
      <span>
        <span class="center-text FAQ-span">자주 묻는 <span style="color: #0a69c1;">질문</span></span>
        
      </span>
    </div>
</template>
<script>
    export default {
        name:'FAQComponent',
        methods:{
          goToFAQPage(){
            this.$router.push('/FAQPage');
          }
        }
    }
</script>
<style>

  .FAQ {
        background: #ffffff;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.33);
        border-width: 2px;
        width: 20%;
        height: 126px;

        text-align: center;
        font-family: "Inter-Bold", sans-serif;
        font-size: 36px;
        font-weight: 700; 
  }
  .FAQ-span {
        color: #000000;
        font-family: "Inter-Bold", sans-serif;
        font-size: 36px;
        font-weight: 700;
  }
</style>