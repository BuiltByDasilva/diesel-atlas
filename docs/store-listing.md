# Lil Mechanic's: DieselAtlas Chrome Web Store Listing - Version 2.0.0

## Public Name

Lil Mechanic's: DieselAtlas

## Short Description

Truck VIN decode, air-brake tool staging, regulated safety gates, local job records, and FMCSA-linked evidence.

## Single Purpose

DieselAtlas helps diesel and fleet mechanics identify a truck and stage an evidence-labeled maintenance job with commercial-vehicle safety and dispatch checks visible.

## Detailed Description

DieselAtlas is a free, open-source, ad-free American field guide for its specific repair domain. It turns equipment identification into a locally saved job card with an original orientation diagram, tool and fastener staging, explicit safety gates, workflow phases, source quality, limitations, and closeout checks.

### What Makes It Different

A fleet-specific planner that treats stored spring-brake energy and regulated dispatch checks as first-class gates instead of adapting a passenger-car checklist.

### Version 2.0 Features

- User-initiated truck VIN decode through the official NHTSA vPIC API.
- A Cascadia air-brake job card with wheel chocking, air-system isolation, and spring-brake stored-energy warnings.
- Fleet closeout checks for adjustment, leaks, brake response, documentation, and dispatch authority.
- FMCSA-linked commercial brake evidence plus exact-fleet-procedure limitations.
- Local tool checks, workflow progress, job notes, and saved truck identity without an account.
- Mr. Wrenchie, the interactive Lil Mechanic's guide, provides context-aware next steps and shortcuts to identity, tools, safety gates, and source-backed guidance.
- Mr. Wrenchie's Source Desk includes official rulemaking, legislation, recall context where applicable, legal-status labels, safety lessons, local search, bookmarks, and source caching.

### Accuracy And Safety Boundary

The included diagrams are original simplified orientation aids, not copied manufacturer schematics. Seed packs are representative and evidence-labeled; the app does not claim complete coverage. Always verify current official service data, installed configuration, service limits, torque values, fluids, sequences, qualifications, inspections, and legal authority for the exact equipment. Stop when the equipment or fastener differs from the selected pack.

Principal authorities and obligations for this domain can include: FMCSA, NHTSA, EPA, OSHA where applicable, U.S. Copyright Office, and state or fleet inspection and return-to-service authorities. This listing is a practical product disclosure, not legal advice and not a guarantee that one checklist covers every jurisdiction, employer, operator, or repair.

### Political And Affiliation Disclosure

DieselAtlas supports lawful American repair access, skilled independent work, and responsible return to service. Any civic content is sourced and subordinate to the repair-reference purpose. This independent JerseyPublishers product is not affiliated with or endorsed by the United States Government, President Donald J. Trump, Google, any regulator, operator, railroad, fleet, manufacturer, or trade organization. Government names and manufacturer names identify sources or compatibility context only.

The app contains no ads, analytics, affiliate links, accounts, subscriptions, payment code, or remote executable code. Source code and original assets are published under the MIT license.

## Category And Audience

- Category: Productivity
- Primary language: English (United States)
- Initial distribution: United States
- Audience: Adult equipment owners, mechanics, technicians, and qualified maintenance personnel as applicable
- Not directed to children

## Website And Support

- Website: `https://JerseyPublishers.com`
- Support: `https://JerseyPublishers.com`
- Source: `https://github.com/BuiltByDasilva/diesel-atlas`
- Privacy policy URL: `https://builtbydasilva.github.io/diesel-atlas/privacy-policy.html`
- Publisher-site mirror target: `https://JerseyPublishers.com/privacy/diesel-atlas`

## Store Assets

- Extension ZIP: `dist/diesel-atlas-chrome-extension-v2.0.0.zip`
- Marketing ZIP: `dist/diesel-atlas-marketing-assets-v2.0.0.zip`
- Icon: `assets/apps/diesel-atlas/icon-128.png`
- Screenshots: `screenshots/diesel-atlas/store-screenshot-1.png` through `store-screenshot-5.png`
- Small tile: `marketing/apps/diesel-atlas/small-promo-tile-440x280.png`
- Marquee tile: `marketing/apps/diesel-atlas/marquee-promo-tile-1400x560.png`
- Animated demonstration: `marketing/apps/diesel-atlas/diesel-atlas-promo-video.gif`
- 1280x720 video master: `marketing/apps/diesel-atlas/diesel-atlas-promo-video.webm`
- Four actual-screenshot infographics: `marketing/apps/diesel-atlas/infographics/`
- Localized screenshot folders: `marketing/apps/diesel-atlas/localized/`

## Privacy Dashboard Disclosure

- User input handled: 17-character truck VIN plus local repair selections, checks, notes, Wrenchie searches, and saved briefs.
- Network behavior: The extension sends the entered VIN to `https://vpic.nhtsa.dot.gov/*` only after the user presses Decode. The response supplies vehicle identity, not installed-equipment or service-procedure proof. Wrenchie also sends the selected year, make, and model, but not the VIN, to `https://api.nhtsa.gov/*` to retrieve model-level safety recalls. Wrenchie retrieves agency rules and notices from `https://www.federalregister.gov/*` and transportation-related legislation presented to the President from `https://www.congress.gov/*`. Feed results and saved briefs are cached locally.
- Local behavior: selected equipment, checks, notes, preferences, and imported open-data packs are stored in the extension's local Chrome storage.
- No browsing history, website content, precise location, contacts, authentication, financial, health, or communications data.
- No advertising, sale, profiling, lending, analytics, or routine human review.
- No remote code.
- Data deletion: reset the job, clear extension site/storage data, or uninstall.

## Permissions Justification

`storage`: Saves equipment selections, repair checks, local notes, imported open-data packs, Wrenchie feed cache, saved briefs, and workspace preferences in the user's Chrome profile.

`https://www.federalregister.gov/*`: Retrieves current rules, proposed rules, and notices for the app's transportation agencies.

`https://www.congress.gov/*`: Retrieves the official Bills Presented to the President RSS feed and filters transportation matches locally.

`https://vpic.nhtsa.dot.gov/*`: Required only for the user-initiated VIN decode described above.

`https://api.nhtsa.gov/*`: Retrieves model-level recalls for the selected year, make, and model; exact applicability still requires a VIN check.

## Reviewer Test Instructions

1. Click Run Cascadia air-brake demo.
2. Confirm the Freightliner drum air-brake reference loads.
3. Verify wheel-chock, stored-energy, spring-brake clamp-band, air-leak, and dispatch checks.
4. Open Evidence and confirm the current 49 C.F.R. Part 393 source link.
5. Decode 3AKJHHDR0JS000000 and confirm the request occurs only after Decode is pressed.

## Suggested Screenshot Captions

1. `DieselAtlas - focused 2018 Freightliner Cascadia drum air-brake reference`
2. `Exact tools, fasteners, cautions, and service-data authority`
3. `Checkable workflow phases with local progress and notes`
4. `Evidence quality, limitations, and direct primary-source links`
5. `American repair access with explicit regulatory and affiliation limits`

## Release Notes

Version 2.0 establishes the `Lil Mechanic's:` product family and introduces Mr. Wrenchie as an interactive repair guide across the workspace, popup, iconography, and source desk. He provides context-aware next steps, workflow shortcuts, official rulemaking, legislative watch, model-level recall context where applicable, source-backed safety lessons, clear legal-status labels, local search, bookmarks, and caching. DieselAtlas remains free, ad-free, account-free, and open source.
