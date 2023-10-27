const createForm = document.querySelector('.createBtn');  
const deleteBlog = document.querySelector('.btn-danger');

  const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-name').value.trim();

  const description = document.querySelector('#blog-desc').value.trim();

  if (title && description) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });
    console.log(response);
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};


createForm.addEventListener('click', newFormHandler);

deleteBlog.addEventListener('click', delButtonHandler);