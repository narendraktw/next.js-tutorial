import Link from 'next/link';
import { useRouter } from 'next/router';
const Home = () => {
	const router = useRouter();
	// const handleClick = () => {
	// 	router.push('/product');
	// };
	return (
		<div>
			{/* <h2>Home Page</h2>
			<Link href="/blog">
				<a>Blog</a>
			</Link>
			<Link href="/product">
				<a>Producs</a>
			</Link>
			<button onClick={handleClick}>Place Order</button>
			<br></br> */}
			<Link href="/users">
				<a>Users</a>
			</Link>
			<Link href="/posts">
				<a>Posts</a>
			</Link>
		</div>
	);
};

export default Home;
