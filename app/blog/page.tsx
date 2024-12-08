import { BlogPosts } from 'app/components/posts';

export const metadata = {
  title: "Rashad Eletreby's Blog",
  description:
    'Join me as I share my thoughts, experiences, and insights on data science, technology, and more.',
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Recent Posts
      </h1>
      <BlogPosts />
    </section>
  );
}
