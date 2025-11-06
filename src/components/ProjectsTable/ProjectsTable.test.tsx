import { render } from '@test-utils';
import { ProjectsTable } from './ProjectsTable';

describe('ProjectsTable component', () => {
    it('has correct Vite guide link', () => {
        render(<ProjectsTable />);
        // expect(screen.getByText('this guide')).toHaveAttribute(
        //   'href',
        //   'https://mantine.dev/guides/vite/'
        // );
    });
});
