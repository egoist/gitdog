<style>
  .user-auth {
    max-width: 300px;
    margin: 0 auto;
    padding-top: 100px;
  }
  .login {
    width: 100%;
    height: 40px;
    font-size: 17px;
  }
</style>

<template>
  <div class="user-auth">
    <form>
      <div class="form-group">
        <label>Feed URL</label>
        <input type="text" class="form-control" v-model="feedURL">
      </div>
    </form>
    <button class="btn btn-large btn-default login" @click="save">
      Save
    </button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        feedURL: ''
      }
    },
    methods: {
      save () {
        if (this.feedURL && this.validFeedURL(this.feedURL)) {
          localStorage.setItem('feedURL', this.feedURL)
        }
      },
      validFeedURL (url) {
        return true
      }
    }
  }
</script>
