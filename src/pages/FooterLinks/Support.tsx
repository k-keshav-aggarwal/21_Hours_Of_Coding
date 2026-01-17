// Support Page
export default function SupportPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-6">Support</h1>

      <p className="text-muted-foreground mb-8 max-w-2xl">
        We're here to help you with anything you need — from troubleshooting, platform guidance,
        developer support, account issues, to integration assistance.
      </p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">📩 Contact Support</h2>
        <p className="text-muted-foreground mb-4 max-w-xl">
          Reach out to our team for personalized assistance. We typically respond within 24 hours.
        </p>
        <a
          href="mailto:k.keshav.agg@gmail.com"
          className="inline-block px-5 py-3 rounded-xl bg-primary text-primary-foreground shadow hover:opacity-90 transition"
        >
          Email Support
        </a>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">💬 Live Community Help</h2>
        <p className="text-muted-foreground mb-4 max-w-xl">
          Join our community spaces to get help from other developers and users.
        </p>
        <ul className="list-disc ml-6 text-muted-foreground space-y-2">
          <li>Discord Community</li>
          <li>Developer Forum</li>
          <li>Feature Request Board</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">📘 Help Center</h2>
        <p className="text-muted-foreground mb-3 max-w-xl">
          Browse detailed tutorials, FAQs, troubleshooting guides, and best practices.
        </p>
        <a
          href="/documentation"
          className="inline-block px-5 py-3 rounded-xl border shadow hover:bg-accent transition"
        >
          Visit Documentation
        </a>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">🛠 Technical Support</h2>
        <p className="text-muted-foreground max-w-xl mb-4">
          Need help with API integration, authentication, or debugging? Our engineers are here to assist.
        </p>
        <ul className="list-disc ml-6 text-muted-foreground space-y-2">
          <li>API troubleshooting</li>
          <li>SDK and client integration</li>
          <li>Model upload issues</li>
          <li>Error resolution</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-3">📄 Status & Updates</h2>
        <p className="text-muted-foreground max-w-xl mb-4">
          Check real-time platform status, uptime metrics, and incident reports.
        </p>
        <a
          href="/status"
          className="inline-block px-5 py-3 rounded-xl bg-secondary text-secondary-foreground shadow hover:opacity-90 transition"
        >
          View Status Page
        </a>
      </section>
    </div>
  );
}