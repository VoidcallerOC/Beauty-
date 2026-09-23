import { createFileRoute } from "@tanstack/react-router";
import { CallLink, ServiceRow, Shell } from "@/components/site/chrome";
import { menu } from "@/lib/site";

export const Route = createFileRoute("/services")({ component: Services });

function Services() {
  return (
    <Shell>
      <section className="page-hero">
        <p className="eyebrow">The menu</p>
        <h1>What we do with your time.</h1>
        <p className="lede">
          Times and prices are for this demo. A live shop sets its own list.
        </p>
      </section>
      {menu.map((group) => (
        <section className="section menu-group" key={group.group}>
          <h2>{group.group}</h2>
          <div className="rows">
            {group.items.map((item) => (
              <ServiceRow key={item.name} {...item} />
            ))}
          </div>
        </section>
      ))}
      <section className="close">
        <p>Removal needed before a fresh gel set. Art pricing depends on how much of the set is painted.</p>
        <CallLink />
      </section>
    </Shell>
  );
}
