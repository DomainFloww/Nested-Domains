import Head from "next/head";
import { getSheetData } from "../lib/sheets";
import { getSubdomainFromHost } from "../utils/host";

export async function getServerSideProps(context) {
  const { params, req } = context;
  const host = req?.headers?.host || "";
  const sub = getSubdomainFromHost(host);

  const rows = await getSheetData();
  const row = rows.find(r => (sub ? r.subdomain.startsWith(sub) : true) && r.slug === params.slug);

  if (!row) {
    return { notFound: true };
  }

  return { props: { row } };
}

export default function Page({ row }) {
  return (
    <>
      <Head>
        <title>{row.h1}</title>
        <meta name="description" content={row.meta} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={`https://${row.subdomain}/${row.slug}`} />
      </Head>
      <main style={{maxWidth: 760, margin: "40px auto", fontFamily: "system-ui, -apple-system, Segoe UI, Roboto"}}>
        <h1>{row.h1}</h1>
        <p style={{color:"#555"}}>{row.meta}</p>

        {row.pros && <section><h2>Pros</h2><ul>{row.pros.split("|").map((p,i)=>(<li key={i}>{p.trim()}</li>))}</ul></section>}
        {row.cons && <section><h2>Cons</h2><ul>{row.cons.split("|").map((c,i)=>(<li key={i}>{c.trim()}</li>))}</ul></section>}
        {row.faqs && <section><h2>FAQs</h2><ul>{row.faqs.split("|").map((f,i)=>(<li key={i}>{f.trim()}</li>))}</ul></section>}

        {row.link && (
          <p>
            <a href={row.link} rel="sponsored nofollow" target="_blank">Check current offer</a>
          </p>
        )}
      </main>
    </>
  );
}
