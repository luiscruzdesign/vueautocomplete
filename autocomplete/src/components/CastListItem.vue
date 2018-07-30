<template>
  <article>
    <div>
      <img :src="ator['character'].image['medium']" :alt="ator['character'].name">
      {{ator["person"].name}} as {{ator["character"].name}}
    </div>
  </article>
</template>

<script>
    export default {
        name: 'cast-list-item',
        props: ['ator']
    };
</script>

<style scoped>
  article {
    width: 50%;
    padding: 20px;
    box-sizing: border-box;
  }
  img {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    article {
      width: 25%;
    }
  }
</style>
