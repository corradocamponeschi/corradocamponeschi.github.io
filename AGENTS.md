# Corrado Camponeschi Personal Platform

## Product Vision

This repository starts as a static personal branding SPA for Corrado Camponeschi. The first version should help visitors discover the body of work, understand the two macroprojects ThotAsana and Unione Profonda, and start a direct conversation about video paths, individual consultations, workshops, or future academic programs.

The product direction is a calm but conversion-aware learning platform. It should evolve from lead generation into a paid ecosystem for spiritual education, conscious sexuality, body awareness, and long-form transformational programs.

## Current Boundaries

- Frontend-only React + Vite application.
- Static deployment through GitHub Pages.
- No backend, authentication, video hosting, checkout, Stripe integration, CMS, or private student area.
- CTAs should create qualified leads through email, WhatsApp, or Instagram, never fake purchases.

## Future Architecture Direction

- Add a content source for programs, lessons, events, and long-form articles. Start with typed local content, then move to a CMS only when editing frequency requires it.
- Add video hosting through a dedicated provider before building a course player. Keep streaming, permissions, thumbnails, and progress tracking out of the static app until there is a backend.
- Add Stripe only when there are clear purchasable products. Prefer Stripe Checkout for simple video paths or consultations, then consider subscriptions or memberships later.
- Add backend/auth when students need private access, purchased course libraries, progress tracking, academic enrollment, or protected resources.
- Keep ThotAsana and Unione Profonda as first-class product areas with their own landing flows, but preserve Corrado's personal brand as the root narrative.

## UX Principles

- The site should feel grounded, refined, embodied, and precise. Avoid generic wellness cliches, fake scarcity, fake metrics, and exaggerated promises.
- Every commercial CTA should invite a real conversation or a concrete next step.
- Paid offers should be framed as paths of study and practice, not impulse products.
- Content about sexuality and men's work should remain sober, respectful, and educational.

## Implementation Notes For Future Agents

- Keep user-facing copy in centralized typed content files.
- Keep contact links and CTA message templates centralized.
- Preserve static-hosting compatibility unless the task explicitly introduces backend infrastructure.
- Do not add placeholder checkout, fake account areas, fake video players, or invented testimonials.
- Before adding Stripe, define product catalog, refund policy, legal pages, fulfillment model, and post-payment access flow.
