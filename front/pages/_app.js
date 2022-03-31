import wrapper from '../src/stores';
import withReduxSaga from 'next-redux-saga';
import Layout from '../src/components/layout/Layout';
import ProductCompare from '../src/components/compareBox/ProductCompare';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';

const DEFALT_SEO = {
  canonical: 'https://recco.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://recco.vercel.app',
    title: 'reCco',
    site_name: 'reCco',
    images: [
      {
        url: 'https://recco.vercel.app/images/logo.png',
        width: 500,
        height: 500,
        alt: 'reCco',
      },
    ],
  },
  additionalMetaTags: [
    {
      httpEquiv: 'Content-Security-Policy',
      content: 'upgrade-insecure-requests',
    },
  ],
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <DefaultSeo {...DEFALT_SEO} />
      <Component {...pageProps} />
      {router.pathname !== '/' && <ProductCompare />}
    </Layout>
  );
}

export default wrapper.withRedux(withReduxSaga(MyApp));
