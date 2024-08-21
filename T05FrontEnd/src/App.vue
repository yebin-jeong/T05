<!-- src/App.vue -->
<template>
  <div id="app" style="min-width:1440px ">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
<!-- style.css -->
<style>
  

  button{
    border-radius: 15px;
    text-align: center;
    position: relative;
    cursor:pointer;
  }

  .center-text{
    position:absolute;
    top: 50%;
    left: 50%; 
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }
  
  .rectangle {
    border-radius: 15px;
    position:relative;
    font-family: "Inter-Regular", sans-serif;
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
