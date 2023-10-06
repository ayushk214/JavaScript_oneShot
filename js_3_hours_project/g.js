const user = {
    name: "John",
    lastActivityTime: null,
  };
  const posts = [];
  function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        user.lastActivityTime = new Date();
        resolve(user.lastActivityTime);
      }, 1000);
    });
  }
  function createPost(post) {
    return new Promise((resolve) => {
      setTimeout(() => {
        posts.push(post);
        resolve(post);
      }, 1000);
    });
  }
  function deletePost() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      }, 1000);
    });
  }
  createPost("New post content")
    .then(() => updateLastUserActivityTime())
    .then((lastActivityTime) => {
      console.log("All posts:", posts);
      console.log("Last Activity Time:", lastActivityTime);
  
 
      deletePost()
        .then((deletedPost) => {
          console.log("Deleted Post:", deletedPost);
          console.log("Remaining Posts:", posts);
        })
        .catch((error) => {
          console.error("Error deleting post:", error);
        });
    })
    .catch((error) => {
      console.error("Error creating post or updating last activity time:", error);
    });