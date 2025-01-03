import Image from 'next/image';

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <section className="relative">
        <div className="md:float-left md:pr-8 md:pb-4 mb-4 md:mb-0">
          <Image
            src="/profile.jpg"
            alt="Rashad Eletreby"
            width={300}
            height={300}
            className="rounded-lg mx-auto md:mx-0"
            priority
          />
        </div>
        <div className="space-y-4 clear-none">
          <p>
            {`Hi, I'm Rashad Eletreby, a Principal Data Scientist and Senior Data Science Manager at Walmart, Inc. I grew up in Gizah, Egypt, and earned my B.Sc. and M.Sc. in Electrical and Computer Engineering from Cairo University. Later, I moved to the U.S. and completed my M.Sc. and Ph.D. in the same field at Carnegie Mellon University.`}
          </p>
          <p>
            {`I'm passionate about learning and teaching, which inspired me to start this blog. It's a space where I share what I've learned—and continue to learn—about data science, technology, and more. Everything here is MIT licensed, so feel free to use and share it. If you have feedback, I'd love to hear from you!`}
          </p>
          <p>
            {`The opinions expressed here are my own and do not represent the views of my current employer. I write most of the content myself, but I also make use of tools like ChatGPT and Claude to clean up what I write or to contribute specific sections.`}
          </p>
          <p>
            {`If you'd like to connect, feel free to reach out at eletreby.rashad@gmail.com.`}
          </p>
        </div>
      </section>
    </section>
  );
}
