<script lang="ts">
  import URL from './utils/url'
  let value = '';

  const handleSubmint = ()=>{
    if(value==='') return;
    const url = new URL(value);
    console.log(url.getList());
  }

</script>

<main>
  <form on:submit|preventDefault="{handleSubmint}">
    <input bind:value/>
    <button>클릭</button>
  </form>

</main>

<style>

</style>