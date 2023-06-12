import { GetServerSidePropsContext } from 'next';

export default function Home({ multilang }: Record<string, any>) {
  return (
    <h1>{multilang.index.welcome}</h1>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const locale = context.locale!;

  const messages = (await import(`@/lang/${locale}.json`)).default;

  return {
    props: {
      messages: {},
      multilang: messages,
    },
  };
}
