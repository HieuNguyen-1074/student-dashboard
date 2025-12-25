"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Redirect to login page on load
    window.location.href = "/login";
  }, []);
  return <></>;
}
