import service from '@/services';
import { GetServerSidePropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Image from 'next/image';

export default function Mounts({ mounts }: any) {
  const t = useTranslations('mounts');

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {mounts.map((mount: Record<string, string>) => (
          <div key={mount.id} className="flex flex-col items-center p-2 border rounded w-1/2-gap-2 bg-slate-100">
            <Image alt={mount.name} src={mount.image} width={100} height={100} />
            <h3 className="font-bold mt-4">{mount.name}</h3>
            <p className="text-left mt-2 w-full">{mount.description}</p>
            <div className="mt-2 pt-2 border-t w-full">
              <p>
                {t('movement')}
                :
                {' '}
                {mount.movement}
              </p>
              <p>
                {t('seats')}
                :
                {' '}
                {mount.seats}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Head>
        <title>{t('title')}</title>
      </Head>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const locale = context.locale!;
  const mounts = await service.getMounts(locale);

  const messages = (await import(`@/lang/${locale}.json`)).default;

  return {
    props: {
      mounts,
      messages,
    },
  };
}
