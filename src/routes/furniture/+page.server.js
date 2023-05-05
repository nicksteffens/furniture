import { furniture } from './data.js';

export function load() {
	return {
		summaries: furniture.map((post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
}