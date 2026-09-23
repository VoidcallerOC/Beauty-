import { createFileRoute } from "@tanstack/react-router";
import { CallLink, Photo, Shell } from "@/components/site/chrome";
import { hours, site } from "@/lib/site";

export const Route = createFileRoute("/visit")({ component: Visit });

function Visit() {
  return (
    <Shell>
      <section className="page-hero">
        <p className="eyebrow">Visit</p>
        <h1>Come in when you are booked.</h1>
      </section>
      <section className="visit-layout section">
        <div>
          <p className="label">Where</p>
          <p className="visit-place">Farmington Village, CT</p>
          <p className="muted">
            Suite and street land on a live build. For this demo, plan on village
            parking and a short walk from the main street.
          </p>
          <p className="label">Book</p>
          <p>
            <a className="phone" href={site.phoneHref}>
              {site.phone}
            </a>
          </p>
          <p className="muted">Phone only. No online cart in this demo.</p>
          <p className="label">When you arrive</p>
          <p className="muted">
            Come at your time. If you are early, wait to be seated so the last
            guest can finish in peace.
          </p>
          <CallLink />
        </div>
        <div>
          <Photo
            src="/demo/IMG_9871.JPEG"
            alt="Close crop of a hand and finished nails."
            caption="The work, not a map"
          />
          <table className="hours">
            <caption className="label">Hours</caption>
            <tbody>
              {hours.map(([day, value]) => (
                <tr key={day}>
                  <th scope="row">{day}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Shell>
  );
}
