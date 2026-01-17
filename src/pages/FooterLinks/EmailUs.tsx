// Email Us Page
export default function EmailUsPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-3xl">
      <h1 className="text-3xl font-semibold mb-6">Email Us</h1>

      <p className="text-muted-foreground mb-8">
        Need help, have a question, or want to collaborate? Fill out the form below and our team will get back to you
        within 24&nbsp;48 hours.
      </p>

      <form className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Your Name</label>
          <input
            type="text"
            className="w-full p-3 rounded-lg border border-border bg-background"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Email Address</label>
          <input
            type="email"
            className="w-full p-3 rounded-lg border border-border bg-background"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Subject</label>
          <input
            type="text"
            className="w-full p-3 rounded-lg border border-border bg-background"
            placeholder="How can we help?"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            rows={6}
            className="w-full p-3 rounded-lg border border-border bg-background"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-primary text-primary-foreground shadow hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
