<template>
  <div>
    data lenght : {{ lists.length }}
    <table class="table">
      <thead>
        <tr>
          <th scope="col">name</th>
          <th scope="col">username</th>
          <th scope="col">email</th>
          <th scope="col">phone</th>
          <th scope="col">website</th>
          <th scope="col">company</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in lists" :key="user.id">
          <th scope="row">1</th>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.website }}</td>
          <td>{{ user.company.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      lists: []
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        this.lists = res.data;
        console.log("recv----------- > ", res);
      })
      .catch(err => {
        console.log("errrrrrrrrrrrrrrr -> ", err);
      });
  }
};
</script>

<style></style>
