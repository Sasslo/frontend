import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "src/styles/Home.module.css";
import { Box, Button } from "@mantine/core";
import { toast } from "src/utils/toast";
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();


  const handleClick = (e : any) => {
    if (e.target.innerText === "Web Chat") {
      toast.success("Comming soon!");
    }
    else if (e.target.innerText === "Meet") {
      toast.success("Comming soon!");
    }
    else if (e.target.innerText === "Livestream") {
      toast.success("Comming soon!");
    }
    else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <Head>
        <title>SAASLO</title>
        <meta name="description" content="saas management platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to SASSLO!</h1>
        <p className={styles.description}>
          SAASLO is sass management platform
        </p>

        <Box className={styles.routes}>
          <Button
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
            onClick={handleClick}
          >
            Web Chat
          </Button>
          <Button
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
            onClick={handleClick}
          >
            Meet
          </Button>
          <Button
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
            onClick={handleClick}
          >
            Livestream
          </Button>
        </Box>
      </main>
    </>
  );
}
