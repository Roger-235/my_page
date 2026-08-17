import rss from '@astrojs/rss';
import { getCollection, render } from 'astro:content';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  const container = await AstroContainer.create();

  const items = await Promise.all(posts.map(async post => {
    const { Content } = await render(post);
    const content = await container.renderToString(Content);
    return {
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/posts/${post.slug}`,
      content,
    };
  }));

  return rss({
    title: "235's Blog",
    description: '看什麼看',
    site: context.site!,
    items,
  });
}
