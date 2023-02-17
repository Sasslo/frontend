import {
  useMantineTheme,
  Text,
  Box,
  Avatar,
  Grid,
  Center,
} from "@mantine/core";
import { useRouter } from "next/router";
import { toast } from "src/utils/toast";
import { Logout } from "tabler-icons-react";

const NavbarUserTab = () => {
  const theme = useMantineTheme();
  const router = useRouter();

  return (
    <Box
      sx={{
        background: theme.colors.dark[6],
        borderRadius: 10,
        padding: "10px 20px",
      }}
      onClick={() => {
        toast.success("Logout Successful");
        router.push("/");
      }}
    >
      <Grid>
        <Grid.Col span={2}>
          <Center>
            <Avatar color="cyan" radius="xl">
              MK
            </Avatar>
          </Center>
        </Grid.Col>
        <Grid.Col span={8}>
          <Box>
            <Text sx={{ fontSize: 12 }}>Martin K.</Text>
            <Text sx={{ fontSize: 12 }}>Martin K.</Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={2}>
          <Center>
            <Avatar color="cyan" radius="xl">
              <Logout size={25} strokeWidth={2} />
            </Avatar>
          </Center>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default NavbarUserTab;
