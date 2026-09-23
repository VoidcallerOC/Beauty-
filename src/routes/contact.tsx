import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CallLink, Shell } from "@/components/site/chrome";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({ component: Contact });

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Shell>
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Call first.</h1>
        <p className="lede">
          The fastest way to book is the phone. The form on this page is a demo.
          It does not send or store a message.
        </p>
        <p className="phone-line">
          <a className="phone" href={site.phoneHref}>
            {site.phone}
          </a>
          <span>Farmington, CT</span>
        </p>
        <CallLink />
      </section>
      <form
        className="demo-form section"
        onSubmit={(event) => {
          event.preventDefault();
          setSent(true);
        }}
      >
        <label>
          Name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label>
          What you want
          <select name="want" defaultValue="Gel manicure">
            <option>Classic manicure</option>
            <option>Gel manicure</option>
            <option>Soft gel</option>
            <option>Pedicure</option>
            <option>Nail art</option>
          </select>
        </label>
        <label>
          Preferred day
          <input name="day" placeholder="Tuesday afternoon" />
        </label>
        <button className="btn btn-primary" type="submit">
          This is a demo form
        </button>
        {sent ? <p className="form-note">Nothing was sent. Call to book.</p> : null}
      </form>
    </Shell>
  );
}
