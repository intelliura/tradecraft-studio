import { useState } from 'react';
import { Table, Checkbox, Pill } from '@mantine/core';

const elements = [
    { name: 'Project APPLE', modified: Date.now(), owner: 'JA', sharing: 'Private' },
    { name: 'Project BANANA', modified: Date.now(), owner: 'JA', sharing: 'Private' },
    { name: 'Project ORANGE', modified: Date.now(), owner: 'AR', sharing: 'Private' },
    { name: 'Project GRAPE', modified: Date.now(), owner: 'WL', sharing: 'Private' },
];

export function ProjectsTable() {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);

    const rows = elements.map((element) => (
        <Table.Tr
            key={element.name}
            bg={selectedRows.includes(element.name) ? 'var(--mantine-color-blue-light)' : undefined}
        >
            <Table.Td>
                <Checkbox
                    aria-label="Select row"
                    checked={selectedRows.includes(element.name)}
                    onChange={(event) =>
                        setSelectedRows(
                            event.currentTarget.checked
                                ? [...selectedRows, element.name]
                                : selectedRows.filter((name) => name !== element.name)
                        )
                    }
                />
            </Table.Td>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{new Date(element.modified).toString()}</Table.Td>
            <Table.Td><Pill>{element.owner}</Pill></Table.Td>
            <Table.Td>{element.sharing}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th />
                    <Table.Th>Name</Table.Th>
                    <Table.Th>Modified</Table.Th>
                    <Table.Th>Owner</Table.Th>
                    <Table.Th>Sharing</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
}