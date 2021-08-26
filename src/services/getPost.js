import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const postLoad = async () => {
    try {
      let data = await fetch("http://localhost:3500/api/posts/" + id);
      if (!data.ok) {
        throw Error("The post with that id does not exist!");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return {
    post,
    error,
    postLoad,
  };
};

export default getPost;
