/**
 * Retrieves most recent blog post from the blog page and displays a portion (the hook) of it;
 * loops through all blog posts and displays the most recent one.
 * 
 * @returns {JSX.Element} Blog post
 */

function BlogPost() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto bg-neutral-800">
        <h1>
            Blog Post Title
        </h1>
        <p className="flex flex-col justify-center text-center align-middle py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dicta fugiat quisquam voluptatibus unde pariatur libero nisi delectus ducimus deleniti modi harum rerum assumenda voluptas quam aut? Dignissimos, officiis doloribus!
        </p>
    </div>
  )
}

export default BlogPost