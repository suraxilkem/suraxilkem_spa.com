import Script from "next/script";

/**
 * Google Tag Manager. `beforeInteractive` is the only next/script strategy
 * Next.js guarantees runs before hydration, in <head> -- the framework's
 * equivalent of "paste as high in <head> as possible" for a script that
 * can't be a plain inline <script> tag inside JSX.
 */
export function GoogleTagManagerHead({ gtmId }: { gtmId: string }) {
  return (
    // Rule predates App Router; Next's own docs recommend beforeInteractive scripts in the root layout for it.
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script id="gtm-head" strategy="beforeInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
    </Script>
  );
}

/** Companion <noscript> fallback -- goes immediately after the opening <body> tag. */
export function GoogleTagManagerBody({ gtmId }: { gtmId: string }) {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
