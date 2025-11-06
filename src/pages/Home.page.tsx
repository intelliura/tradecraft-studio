import { AppShell, Autocomplete, Badge, Burger, Button, Flex, Group, Menu, NavLink, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { 
  IconHome2, 
  IconGauge, 
  IconChevronRight, 
  IconActivity, 
  IconCircleOff,
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons-react';

import { ProjectsTable } from '@/components/ProjectsTable/ProjectsTable';

export function HomePage() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened, desktop: !opened },
      }}
    >
      <AppShell.Header>
        <Flex
          mih={60}
          pl="md"
          pr="md"
          gap="md"
          justify="space-between"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
            />
            <Text>Tradecraft Studio</Text>
          </Group>
          <Autocomplete
            placeholder="Search"
            miw={400}
            data={['Project APPLE', 'Project BANANA', 'Project ORANGE', 'Project GRAPE']}
          />
          <Menu position="bottom-end" shadow="md" width={200}>
            <Menu.Target>
              <Button>Account</Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Application</Menu.Label>
              <Menu.Item leftSection={<IconSettings size={14} />}>
                Settings
              </Menu.Item>
              <Menu.Item leftSection={<IconMessageCircle size={14} />}>
                Messages
              </Menu.Item>
              <Menu.Item leftSection={<IconPhoto size={14} />}>
                Gallery
              </Menu.Item>
              <Menu.Item
                leftSection={<IconSearch size={14} />}
                rightSection={
                  <Text size="xs" c="dimmed">
                    ⌘K
                  </Text>
                }
              >
                Search
              </Menu.Item>

              <Menu.Divider />

              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item
                leftSection={<IconArrowsLeftRight size={14} />}
              >
                Transfer my data
              </Menu.Item>
              <Menu.Item
                color="red"
                leftSection={<IconTrash size={14} />}
              >
                Delete my account
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar>
        <NavLink
          href="#required-for-focus"
          label="With icon"
          leftSection={<IconHome2 size={16} stroke={1.5} />}
        />
        <NavLink
          href="#required-for-focus"
          label="With right section"
          leftSection={<IconGauge size={16} stroke={1.5} />}
          rightSection={
            <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
          }
        />
        <NavLink
          href="#required-for-focus"
          label="Disabled"
          leftSection={<IconCircleOff size={16} stroke={1.5} />}
          disabled
        />
        <NavLink
          href="#required-for-focus"
          label="With description"
          description="Additional information"
          leftSection={
            <Badge size="xs" color="red" circle>
              3
            </Badge>
          }
        />
        <NavLink
          href="#required-for-focus"
          label="Active subtle"
          leftSection={<IconActivity size={16} stroke={1.5} />}
          rightSection={
            <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
          }
          variant="subtle"
          active
        />
        <NavLink
          href="#required-for-focus"
          label="Active light"
          leftSection={<IconActivity size={16} stroke={1.5} />}
          rightSection={
            <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
          }
          active
        />
        <NavLink
          href="#required-for-focus"
          label="Active filled"
          leftSection={<IconActivity size={16} stroke={1.5} />}
          rightSection={
            <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
          }
          variant="filled"
          active
        />
      </AppShell.Navbar>

      <AppShell.Main>
        <ProjectsTable />
      </AppShell.Main>
    </AppShell>
  );
}
