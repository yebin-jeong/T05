<!-- src/App.vue -->
<template>
  <div id="app" style="min-width:1440px;  display: flex; justify-content: center;">
    <div style="min-height: 100%; display: flex; flex-direction: column; justify-content: center;">
      <router-view></router-view>
    </div>
      
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


  
  .rectangle {
    border-radius: 15px;
    position:relative;
    font-family: "Inter-Regular", sans-serif;
  }

  .wrapper{
    height: auto;
    min-height: 100%;
    padding-bottom: 250px;
    width: 1440px; 
    justify-self: center;
    padding-top: 120px;
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
