import { ref } from "vue";

const fetchPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3500/api/posts");
      if (!data.ok) {
        throw Error("No data available");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return {
    posts,
    error,
    load,
  };
};

export default fetchPosts;
