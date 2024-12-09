import { BlogPosts } from 'app/components/posts';

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <section>
        <div className="mb-8 flex flex-col md:flex-row md:items-center gap-6">
          <div className="text-center md:text-left md:max-w-2xl space-y-4">
            <p>
              {`Hi, I'm Rashad Eletreby, a Principal Data Scientist and Senior Data Science Manager at Walmart, Inc. I grew up in Gizah, Egypt, and earned my B.Sc. and M.Sc. in Electrical and Computer Engineering from Cairo University. Later, I moved to the U.S. and completed my M.Sc. and Ph.D. in the same field at Carnegie Mellon University.`}
            </p>
            <p>
              {`I'm passionate about learning and teaching, which inspired me to start this blog. It's a space where I share what I've learned—and continue to learn—about data science, technology, and more.`}
            </p>
            <p>
              {`Everything here is MIT licensed, so feel free to use and share it. If you have feedback, I'd love to hear from you!`}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
