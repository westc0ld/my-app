import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/layout";
import InteractiveQueryApp from "../components/index.body";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <InteractiveQueryApp/>
    </Layout>
  )
}
