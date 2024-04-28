import Posts from "@/src/components/home/posts";
import Layout from "../src/components/layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Basic Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts/>
    </Layout>
  );
}
