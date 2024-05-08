import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = 'edge';

export default async function Home() {
  const rpcWorker = getRequestContext().env.RPC_WORKER;

  const text = `1 + 4 = ${await rpcWorker.sum(1, 4)}`;
  
  return (
    <main>
      <h1>{text}</h1>
    </main>
  );
}
