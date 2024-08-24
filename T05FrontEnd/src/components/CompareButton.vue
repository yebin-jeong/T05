<template>
    <button class="compare-button" @click="goToComparePage">
      
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%;">
        <span style=" white-space: nowrap;">
          <span class="div-12-span" style="font-weight: 600;">복지서비스</span>
          <span class="div-12-span" style="margin-left: 5%;margin-right: 5%;">비교하기</span>
        </span>
      </div>
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%;">
        <img class="arrow-right-circle" src="../assets/icons/arrow-right-circle.svg" />
      </div>
    </button>
</template>
<script>
export default {
    name: "CompareButtonComponent",
    methods:{
      goToComparePage(){
        this.$router.push('/ComparePage');
      }
    }
}
</script>
<style>
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
    display: flex;
    justify-content: center;
    gap: 100px;
  }

  .arrow-right-circle {
    position: relative;
    overflow: visible;
  }  
</style>