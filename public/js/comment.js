const commentHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const comment = document.querySelector('#commentVal').value;
    const blogId = document.querySelector('#title').getAttribute('data-id');
    console.log(comment, blogId);
  
    if (comment) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment, blogId }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
       //document.location.replace(`/blog/${blogId}`);
       console.log(response);
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.commentBtn')
  .addEventListener('click', commentHandler);