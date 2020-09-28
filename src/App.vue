<template>
  <div class="wrapper" >
    <div class="cards" >
      <Card 
        v-for="(card, index) in cards" 
        :key="index"
        :card="card"
      />
    </div>
  </div>
</template>

<script>
import data from './data/entities.json'
import Card from './components/Card'
export default{
  name:'App',
  components:{Card},
  data(){
    return{
      cards: data
    }
  }

}
</script>

<style lang="scss">
  .wrapper{
    max-width: 1200px;
    margin: 0 auto;
    height: 100vh;
    @include for-size(Medium){
        max-width: 768px;
    }
    @include for-size(Small){
        max-width: 576px;
    }
  }
  .cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

</style>
