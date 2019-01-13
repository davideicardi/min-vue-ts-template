<template>
  <div>
    <h2>Section title - sample table</h2>
    <div class="table-responsive">
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Hero</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in sampleData" :key="item.hero">
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.hero }}</td>
          </tr>
        </tbody>
      </table>
    </div>    
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      sampleData: [
        {
          firstName: "Peter",
          lastName: "Parker",
          hero: "Spiderman"
        },
        {
          firstName: "Bruce",
          lastName: "Banner",
          hero: "Batman"
        },
        {
          firstName: "Clark",
          lastName: "Kent",
          hero: "Superman"
        }
      ]
    }
  }
}
</script>

