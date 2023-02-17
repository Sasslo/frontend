import {
  AppShell,
  Navbar,
  MediaQuery,
  Header,
  Burger,
  Text,
  useMantineTheme,
  ScrollArea,
} from "@mantine/core";
import {
  BinaryTree,
  Database,
  Home2,
  LayoutDashboard,
  Report,
  Settings,
} from "tabler-icons-react";
import { NextPage } from "next";
import { useState } from "react";
import NavbarItem from "src/components/pages/dashboard/NavbarItem";
import NavbarUserTab from "src/components/pages/dashboard/NavbarUserTab";
import useFlowStore from "src/store/flow-store";
import { NAVBAR_FLOW_STAGES } from "src/constants/flow-stages";
import DashboardPage from "./DashboardPage";
import HomePage from "./HomePage";
import WorkflowPage from "./WorkflowPage";
import SystemOfRecordPage from "./SystemOfRecordPage";
import ReportsPage from "./ReportsPage";
import SettingsPage from "./SettingsPage";

const DashBoardWrapper: NextPage<{ doesExist?: boolean }> = ({ doesExist }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const NavbarMenu = {
    fixed: [
      {
        title: NAVBAR_FLOW_STAGES.HOME,
        icon: <Home2 size={30} strokeWidth={2} color={"#F6C558"} />,
      },
      {
        title: NAVBAR_FLOW_STAGES.DASHBOARD,
        icon: <LayoutDashboard size={30} strokeWidth={2} color={"#F6C558"} />,
      },
    ],
    scrollable: [
      {
        title: NAVBAR_FLOW_STAGES.WORKFLOW,
        icon: <BinaryTree size={30} strokeWidth={2} color={"#F6C558"} />,
      },
      {
        title: NAVBAR_FLOW_STAGES.SYSTEM_OF_RECORDS,
        icon: <Database size={30} strokeWidth={2} color={"#F6C558"} />,
      },
      {
        title: NAVBAR_FLOW_STAGES.REPORTS,
        icon: <Report size={30} strokeWidth={2} color={"#F6C558"} />,
      },
    ],
  };

  const navbarState = useFlowStore((state) => state.navbarState);

  const RenderMenu: React.FC = () => {
    switch (navbarState) {
      case NAVBAR_FLOW_STAGES.HOME:
        return <HomePage />;
      case NAVBAR_FLOW_STAGES.DASHBOARD:
        return <DashboardPage />;
      case NAVBAR_FLOW_STAGES.WORKFLOW:
        return <WorkflowPage />;
      case NAVBAR_FLOW_STAGES.SYSTEM_OF_RECORDS:
        return <SystemOfRecordPage />;
      case NAVBAR_FLOW_STAGES.REPORTS:
        return <ReportsPage />;
      case NAVBAR_FLOW_STAGES.SETTINGS:
        return <SettingsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colors.dark[8],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Navbar.Section
            mt="xs"
            sx={{
              borderBottom: "1px solid grey",
              paddingBottom: 10,
              paddingTop: 10,
            }}
          >
            {NavbarMenu.fixed.map((item, index) => (
              <NavbarItem key={index} icon={item.icon} title={item.title} />
            ))}
          </Navbar.Section>
          <Navbar.Section
            grow
            component={ScrollArea}
            mx="-xs"
            px="xs"
            sx={{ paddingBottom: 10, paddingTop: 10 }}
          >
            {NavbarMenu.scrollable.map((item, index) => (
              <NavbarItem key={index} icon={item.icon} title={item.title} />
            ))}
          </Navbar.Section>

          <Navbar.Section
            sx={{
              borderTop: "1px solid grey",
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <NavbarItem
              icon={<Settings size={30} strokeWidth={2} color={"#F6C558"} />}
              title={NAVBAR_FLOW_STAGES.SETTINGS}
            />

            <NavbarUserTab />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>SAASLO</Text>
          </div>
        </Header>
      }
    >
      <RenderMenu />
    </AppShell>
  );
};

export default DashBoardWrapper;
