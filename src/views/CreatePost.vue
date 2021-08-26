<template>
  <h1>Create Post</h1>
  <form v-on:submit="submitPost">
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input type="text" class="form-control" id="title" />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label content-label">Content</label>
      <textarea id="content" cols="84" rows="12"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Publish</button>
  </form>
</template>

<script>
export default {};
</script>

<style></style>
