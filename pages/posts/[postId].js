function Post({ post }) {
	return (
		<>
			<h2>
				{post.id} {post.title}
			</h2>
			<p>{post.body}</p>
		</>
	);
}

export default Post;

export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await response.json();

	// Get the paths we want to pre-render based on posts
	const paths = data.map((post) => {
		return {
			params: {
				postId: `${post.id}`,
			},
		};
	});
	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const { params } = context;
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.postId}`
	);
	const data = await response.json();
	return {
		props: {
			post: data,
		},
	};
}
