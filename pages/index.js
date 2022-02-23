import { useContext } from 'react';
import { Store } from '../utils/Store';

import Layout from '../components/Layout';
import SectionNav from '../components/SectionNav/SectionNav';

export default function Home() {
  return (
    <Layout>
      <SectionNav />
    </Layout>
  );
}
