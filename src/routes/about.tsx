import { createFileRoute, Link } from "@tanstack/react-router";
import { Photo, Shell } from "@/components/site/chrome";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  return (
    <Shell>
      <section className="page-hero">
        <p className="eyebrow">About the room</p>
        <h1>A small room for careful work.</h1>
      </section>
      <section className="about-grid section">
        <div className="prose">
          <p>
            Linden Nail Room is a fictional Farmington studio built to show how a
            neighborhood nail shop can look online. The work is nails. The tone is
            quiet. The visit is booked by phone.
          </p>
          <p>
            We care about clean stations, even application, and a set you do not
            have to hide from daylight.
          </p>
          <p>
            Photography on this site is licensed demo photography. It shows finish
            and atmosphere. It is not a staff portrait and it is not a biography.
          </p>
          <Link to="/visit" className="text-link">
            See hours and the village
          </Link>
        </div>
        <div className="pair">
          <Photo
            src="/demo/IMG_9875.JPEG"
            alt="Close view of a manicure with a glossy finish."
            caption="Licensed demo photography"
          />
          <div className="pair-offset">
            <Photo
              src="/demo/IMG_9870.JPEG"
              alt="Tight crop of nail work and tools."
              caption="Tools and finish"
            />
          </div>
        </div>
      </section>
    </Shell>
  );
}
