"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    (async () => {
      try {
        await import("bootstrap/dist/js/bootstrap.bundle.min.js");
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Failed to load Bootstrap JS bundle", error);
      }
    })();
  }, []);
  return null;
}
