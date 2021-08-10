import Head from 'next/head'
import { H1, H2, H3, BodyBase } from "../components/typography/Type";
import { PrimaryBtn, PrimaryInvertedBtn, SecondaryBtn, SecondaryInvertedBtn, SuccessBtn, SuccessInvertedBtn, FailBtn, FailInvertedBtn } from "../components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-neutral-700 text-4xl md:text-5xl lg:text-6xl font-bold">
          Welcome to{' '}
          <a className="text-indigo-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
        <H1 color="text-primary-500" weight="font-bold" >Primary H1</H1>
        <H2 color="text-secondary-500" weight="font-thin">Secondary H2</H2>
        {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1> */}

        <p className="mt-3 text-secondary-500 text-xl lg:text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>
        <h3 className="text-primary-500">themed</h3>
        <BodyBase color="text-green-500" weight="font-semibold">Paragraph style of green text and semibold</BodyBase>
        <BodyBase>Default body styles of normal and dark gray</BodyBase>
        <PrimaryBtn>Button</PrimaryBtn>
        <PrimaryInvertedBtn>Button</PrimaryInvertedBtn>
        <SecondaryBtn>Button</SecondaryBtn>
        <SecondaryInvertedBtn>Inverted</SecondaryInvertedBtn>
        <SuccessBtn>Button</SuccessBtn>
        <SuccessInvertedBtn>Inverted</SuccessInvertedBtn>
        <FailBtn>Button</FailBtn>
        <FailInvertedBtn>Inverted</FailInvertedBtn>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl lg:text-3xl font-bold">Documentation &rarr;</h3>

            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl lg:text-3xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl lg:text-3xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl lg:text-3xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
