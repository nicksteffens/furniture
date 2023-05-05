import { error } from '@sveltejs/kit';
import { furniture } from '../data.js';

export function load({ params }) {
	const post = furniture.find((post) => post.slug === params.slug);

	if (!post) throw error(404);

	return {
		post
	};
}
