"use client"
import { Switch, Group, useMantineColorScheme } from '@mantine/core';

 function ColorToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl">
    <Switch
      size="md"
      color="dark.4"
        onChange={(event) => setColorScheme(event.currentTarget.checked ? 'dark' : 'light')}        
    />
    </Group>
  );
}

 export default ColorToggle