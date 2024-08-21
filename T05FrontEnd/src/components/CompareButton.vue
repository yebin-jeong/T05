<template>
    <button class="compare-button">
        <img class="arrow-right-circle" src="../assets/arrow-right-circle.svg" />
        <span style="position:absolute; left: 40%; top: 35%; white-space: nowrap;">
          <span class="div-12-span" style="font-weight: 600;">복지서비스</span>
          <span class="div-12-span" style="margin-left: 5%;margin-right: 5%;">비교하기</span>
        </span>
      </button>
</template>
<script>
export default {
    name: "CompareButtonComponent"
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
  }

  .arrow-right-circle {
    position: absolute;
    overflow: visible;
    left: 30%;
    top: 25%
  }  
</style>