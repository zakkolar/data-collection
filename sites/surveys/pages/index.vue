<template>
  <div>
    <div class="form-card">
      <div class="form-fieldset">
        <h1 class="form-legend">Data collection demo</h1>
        <p>Welcome! This website has been created for instructional purposes to demonstrate some ways data is collected as consumers use apps and websites.</p>
        <p>To start generating and collecting data, use one of the links below:</p>

       <p>
         <NuxtLink to="/personality" class="form-btn">Personality Quiz</NuxtLink>
         <NuxtLink to="/technology" class="form-btn">Technology Survey</NuxtLink>
       </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    title: 'Data Collection Demo'
  }
}
</script>
<style>
h1 {
  padding: 0; margin: 0;
}
.form-btn:hover {
  color: white;
  text-decoration: none;
}

</style>
