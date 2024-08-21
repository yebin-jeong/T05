<!-- index.html -->
<template>
  <div class="div" style="display:flex; flex-direction: column; ">

    <Top/>

    <div style="display:flex; width:100%; padding: 0% 5%; justify-content: space-between; margin-bottom: 3%">
      
      <HouseNotice/>
      <AddressBox/>
    </div>

    <div style="display:flex; width:100%; padding: 0% 5%; justify-content: space-between;">
      <FAQ/>
      <CompareButton/>
    </div>

    <Footer/>
    
    
  </div>

</template>

<script>
  import FAQ from './components/FAQ.vue';
  import Top from './components/Top.vue'
  import HouseNotice from './components/HouseNotice.vue';
  import Footer from './components/Footer.vue';
  import AddressBox from './components/AddressBox.vue';
  import CompareButton from './components/CompareButton.vue';
  export default {
    name: 'App',
    components: {
      FAQ,
      Top,
      HouseNotice,
      Footer,
      AddressBox,
      CompareButton
    },
    data() {
      return {};
    },  
  };  
</script>
<!-- style.css -->
<style>
  button{
    border-radius: 15px;
    text-align: center;
    position: relative;
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
