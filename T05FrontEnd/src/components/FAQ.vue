<template>
    <div class="FAQ">
      <span>
        <span class="FAQ-span">자주 묻는</span>
        <span class="FAQ-span2">질문</span>
      </span>
    </div>
</template>
<script>
    export default {
        name:'FAQComponent'
    }
</script>
<style>
    .faq {
        position: absolute;
        inset: 0;
    }

  .FAQ {
        background: #ffffff;
        border-radius: 15px;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.33);
        border-width: 2px;
        width: 282px;
        height: 126px;
        position: absolute;
        left: 86px;
        top: 572px;

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
  .FAQ-span2 {
        color: #0a69c1;
        font-family: "Inter-Bold", sans-serif;
        font-size: 36px;
        font-weight: 700;
  }

</style>