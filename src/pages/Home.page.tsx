import { AppShell, Badge, Burger, Flex, Group, NavLink, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHome2, IconGauge, IconChevronRight, IconActivity, IconCircleOff } from '@tabler/icons-react';

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
          gap="md"
          justify="flex-start"
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

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}
