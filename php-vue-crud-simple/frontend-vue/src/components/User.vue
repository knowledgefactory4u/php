<template>
  <div>
    <h3>User</h3>
    <div class="container">
      <form @submit="validateAndSubmit">
        <div v-if="errors.length">
          <div
            class="alert alert-danger"
            v-bind:key="index"
            v-for="(error, index) in errors"
          >
            {{ error }}
          </div>
        </div>
        <fieldset class="form-group">
          <label>First Name</label>
          <input type="text" class="form-control" v-model="first_name" />
        </fieldset>
        <fieldset class="form-group">
          <label>Last Name</label>
          <input type="text" class="form-control" v-model="last_name" />
        </fieldset>
        <fieldset class="form-group">
          <label>Email Id</label>
          <input type="text" class="form-control" v-model="email_id" />
        </fieldset>
        <button class="btn btn-success" type="submit">Save</button>
      </form>
    </div>
  </div>
</template>
<script>
import UserDataService from "../service/UserDataService";

export default {
  name: "User",
  data() {
    return {
      first_name: "",
      last_name: "",
      email_id: "",
      errors: [],
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    refreshUserDetails() {
       if (this.id != -1) {
      UserDataService.retrieveUser(this.id).then((res) => {
        this.first_name = res.data.first_name;
        this.last_name = res.data.last_name;
        this.email_id = res.data.email_id;
      });
       }
    },
    validateAndSubmit(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.first_name) {
        this.errors.push("Enter valid values");
      } else if (this.first_name.length < 5) {
        this.errors.push("Enter atleast 5 characters in First Name");
      }
      if (!this.last_name) {
        this.errors.push("Enter valid values");
      } else if (this.last_name.length < 5) {
        this.errors.push("Enter atleast 5 characters in Last Name");
      }
      if (this.errors.length === 0) {
        if (this.id == -1) {
          UserDataService.createUser({
            first_name: this.first_name,
            last_name: this.last_name,
            email_id: this.email_id,
          }).then(() => {
            this.$router.push("/users");
          });
        } else {
          UserDataService.updateUser({
            id: this.id,
            first_name: this.first_name,
            last_name: this.last_name,
            email_id: this.email_id,
          }).then(() => {
            this.$router.push("/users");
          });
        }
      }
    },
  },
  created() {
    this.refreshUserDetails();
  },
};
</script>
