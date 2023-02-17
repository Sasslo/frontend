import { useMantineTheme, Text, Box } from "@mantine/core";
import { NAVBAR_FLOW_STAGES } from "src/constants/flow-stages";
import useFlowStore from "src/store/flow-store";

type ValueOf<T> = T[keyof T];

interface INavbarItemProps {
  icon: JSX.Element;
  title: ValueOf<typeof NAVBAR_FLOW_STAGES>;
}

const NavbarItem = (props: INavbarItemProps) => {
  const theme = useMantineTheme();
  const navbarState = useFlowStore((state) => state.navbarState);
  const setNavbarStage = useFlowStore((state) => state.setNavbarStage);
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "15% 85%",
        alignItems: "center",
        background: theme.colors.dark[6],
        borderRadius: 10,
        padding: 10,
        marginBottom: 5,
        borderLeft: props.title === navbarState ? "5px solid #F6C558" : "none",

        "&:hover": {
          borderLeft: "5px solid grey",
        },
      }}
      onClick={() => {
        setNavbarStage(props.title);
      }}
    >
      {props.icon}
      <Text>{props.title}</Text>
    </Box>
  );
};

export default NavbarItem;
