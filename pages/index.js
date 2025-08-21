export default function Home() {
  return (
    <main style={{maxWidth: 760, margin: "40px auto", fontFamily: "system-ui, -apple-system, Segoe UI, Roboto"}}>
      <h1>Nested Domains Starter</h1>
      <p>This starter reads rows from your Google Sheet and serves pages by subdomain + slug.</p>
      <p>Create a subdomain like <code>vpn.yourdomain.com</code> and visit a slug you added in the sheet.</p>
    </main>
  );
}
