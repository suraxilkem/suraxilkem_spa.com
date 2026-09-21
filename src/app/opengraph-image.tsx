import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(158deg, #16295C 0%, #0F1E45 48%, #070E22 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1, display: "flex" }}>{siteConfig.name}</div>
        <div style={{ fontSize: 52, fontWeight: 700, marginTop: 24, maxWidth: 950, lineHeight: 1.15, display: "flex" }}>
          Specialty Chemicals & Industrial Solutions
        </div>
        <div style={{ fontSize: 26, color: "#C2CEEA", marginTop: 28, maxWidth: 900, display: "flex" }}>
          Water treatment, wastewater treatment, industrial maintenance, housekeeping and custom chemical solutions.
        </div>
      </div>
    ),
    { ...size },
  );
}
