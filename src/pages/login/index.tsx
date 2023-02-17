import {
  Box,
  Button,
  Center,
  Image,
  Skeleton,
  Text,
  TextInput,
} from "@mantine/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useUserStore from "src/store/user-store";
import { googleSignIn } from "src/utils/firebase";
import { toast } from "src/utils/toast";
import useDeviceSize from "src/utils/useDeviceSize";

const LoginWrapper: NextPage<{ doesExist?: boolean }> = ({ doesExist }) => {
  const { height } = useDeviceSize();
  const [loading, setLoading] = useState(true);
  const setUset = useUserStore((state) => state.setUser);

  const router = useRouter();

  const handleSocailSignIn = async (via: string) => {
    if (via === "Google") {
      const { success, data, error } = await googleSignIn();
      if (success && data) {
        setUset({
          name: data.displayName,
          email: data.email,
          company: "Google",
        });
        router.push("/dashboard");
      } else {
        toast.error("User Popup Closed!");
      }
    } else {
      toast.success("Something went wrong!");
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Center>
      <Skeleton
        visible={loading}
        radius="md"
        height={435}
        width={400}
        style={{ marginTop: height / 2 - 250 }}
      >
        <Box
          sx={(theme) => ({
            backgroundColor: theme.colors.dark[6],
            borderRadius: theme.radius.md,
            padding: theme.spacing.md,
            width: 400,

            "& > * + *": {
              marginTop: theme.spacing.md,
              textAlign: "center",
            },
          })}
        >
          <Box>
            <Image
              src="https://picsum.photos/175/43"
              alt="logo"
              width={175}
              height={43}
              style={{ borderRadius: "50%", margin: "auto" }}
            />
          </Box>
          <Box>
            <Text>Choose Sign In Method</Text>
          </Box>

          <Box>
            <Button
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
              onClick={() => handleSocailSignIn("Google")}
            >
              Sign In with Google
            </Button>
          </Box>

          <Text>or</Text>

          <Box>
            <Box>
              <TextInput placeholder="Email" />
            </Box>
            <Box>
              <TextInput placeholder="Password" />
            </Box>
            <Box>
              <Button onClick={() => toast.success("Comming soon!")}>
                Sign in
              </Button>
            </Box>
            <Box>
              <Button onClick={() => toast.success("Comming soon!")}>
                Forgot password?
              </Button>
            </Box>
          </Box>
          <Box>
            <Text>
              Don&apos;t have an account? <Text>Sign up</Text>
            </Text>
          </Box>
        </Box>
      </Skeleton>
    </Center>
  );
};

export default LoginWrapper;
