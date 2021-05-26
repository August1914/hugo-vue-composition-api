<template>
  <div>
    <h1>Cards</h1>
    <p>This is the card component!</p>
    <h2>card component!!!YESSSS</h2>
    <p>This is a card: <b>{{cardName}}</b></p>
    <p>Card description: <b>{{cardDescription}}</b></p>
<!--    <p>[[cardName]]</p>-->
  </div>
</template>

<script>

import cardJson from "./../../data/card.json";
export default {
  name: "card",
  delimiters: ["[[", "]]"],
  data: function () {
    return {
      cardName: "To do",
      cardDescription: cardJson.description,
    }
  }
}
</script>

<style scoped>

</style>
