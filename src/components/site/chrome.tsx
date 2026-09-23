import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function CallLink({
  className = "btn btn-primary",
  children = "Call to book",
}: {
  className?: string;
  children?: string;
}) {
  return (
    <a className={className} href={site.phoneHref}>
      {children}
    </a>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setSticky(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setSticky(!entry.isIntersecting),
      { threshold: 0.08 },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, [path]);

  return (
    <div className="shell">
      <header className="header">
        <Link to="/" className="wordmark">
          <span>Linden</span>
          <small>Nail Room</small>
        </Link>
        <nav className="desk-nav" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={path === item.href ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <CallLink className="btn btn-primary btn-compact" />
        </nav>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </header>
      {open ? (
        <div className="mobile-nav">
          <nav>
            {nav.map((item) => (
              <Link key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <CallLink className="btn btn-primary btn-block" />
        </div>
      ) : null}
      <main>{children}</main>
      <footer className="footer">
        <div>
          <p className="footer-mark">Linden Nail Room</p>
          <p>Farmington, CT · By appointment</p>
        </div>
        <p className="footer-demo">Demo by Forge CT</p>
      </footer>
      <div className={`sticky-book${sticky && !open ? " is-on" : ""}`}>
        <span>Tue–Sat · Farmington</span>
        <CallLink className="btn btn-light btn-compact" />
      </div>
    </div>
  );
}

export function ServiceRow({
  name,
  time,
  price,
  note,
}: {
  name: string;
  time: string;
  price: string;
  note: string;
}) {
  return (
    <article className="row">
      <div className="row-top">
        <h3>{name}</h3>
        <p>
          <span>{time}</span>
          <span>{price}</span>
        </p>
      </div>
      <p className="row-note">{note}</p>
    </article>
  );
}

export function Photo({
  src,
  alt,
  caption,
  eager,
}: {
  src: string;
  alt: string;
  caption?: string;
  eager?: boolean;
}) {
  return (
    <figure className="frame">
      <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
