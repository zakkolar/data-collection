<template>
  <div>
      <h1>Your Activity</h1>
      <p v-if="!articleActivity || articleActivity.length === 0">
        No activity!
      </p>
      <div v-else>
        <table>
          <thead>
          <tr>
            <th>Time</th>
            <th>Description</th>
          </tr>
          </thead>
          <tr v-for="activity of articleActivity">
            <td>{{new Date(activity.timestamp).toLocaleString()}}</td>
            <td>{{activity.description}}</td>
          </tr>
        </table>
      </div>
    </div>
</template>
<style>
td, th {
  padding: 10px;
}
</style>
<script>
import articles from "@/mixins/articles";
export default {
  layout: 'articles',
  mixins: [articles],
  head() {
    return {
      title: "Data Privacy Articles"
    }
  },
  data() {
    return  {
      eventLog: [],
      articleStartTime: 0,
    }
  }
}

</script>
