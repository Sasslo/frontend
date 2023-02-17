import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Box, Button } from "@mantine/core";
import { toast } from "src/utils/toast";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = (e: any) => {
    if (e.target.innerText === "Login") {
      router.push("/login");
    } else {
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
        <p className={styles.description}>SAASLO is sass management platform</p>

        <Box className={styles.routes}>
          <Button
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
            onClick={handleClick}
          >
            Login
          </Button>
        </Box>
      </main>
    </>
  );
}
