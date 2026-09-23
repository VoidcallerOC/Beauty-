import { createFileRoute, Link } from "@tanstack/react-router";
import { CallLink, Photo, ServiceRow, Shell } from "@/components/site/chrome";
import { previewRows, site } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <Shell>
      <section className="hero" id="hero">
        <Photo
          eager
          src="/demo/IMG_9876.JPEG"
          alt="A hand with black and white nail art beside a small glass bottle."
          caption="Licensed demo photography"
        />
        <div className="hero-copy">
          <p className="eyebrow">Farmington nail room</p>
          <h1>
            Nails done cleanly, <em>close to home.</em>
          </h1>
          <p className="lede">
            Manicures, gel, and careful art. Call, tell us the set, and we will
            find a chair.
          </p>
          <div className="hero-actions">
            <CallLink />
            <Link to="/services" className="text-link">
              See the menu
            </Link>
          </div>
          <p className="hero-meta">Tue–Sat · {site.phone}</p>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <p>Classic · Gel · Soft gel · Pedicure · Art · Add ons</p>
      </div>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">The menu</p>
            <h2>
              What goes <em>on the table.</em>
            </h2>
          </div>
          <Link to="/services" className="text-link">
            Full menu
          </Link>
        </div>
        <div className="rows">
          {previewRows.map((item) => (
            <ServiceRow key={item.name} {...item} />
          ))}
        </div>
      </section>

      <section className="proof">
        <p>Clean station every guest</p>
        <p>Time that starts when booked</p>
        <p>Color checked in daylight</p>
      </section>

      <section className="pair section">
        <Photo
          src="/demo/IMG_9873.JPEG"
          alt="Close view of a finished manicure."
          caption="The set"
        />
        <div className="pair-offset">
          <Photo
            src="/demo/IMG_9875.JPEG"
            alt="Close view of a glossy manicure."
            caption="The finish"
          />
        </div>
      </section>

      <section className="visit-strip">
        <div>
          <p className="label">Where</p>
          <p className="strip-place">Farmington Village</p>
        </div>
        <div>
          <p className="label">When</p>
          <p>Tuesday to Saturday</p>
        </div>
        <CallLink />
      </section>

      <section className="close">
        <h2>
          Ready for a <em>clean set.</em>
        </h2>
        <p>Call. Say mani, gel, or art. We will find the time.</p>
        <CallLink />
      </section>
    </Shell>
  );
}
