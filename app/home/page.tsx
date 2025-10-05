export const metadata = {
  title: "Prazise — Precision training for runners",
  description:
    "Prazise turns your heart rate, HRV, sleep, and workouts into precise training plans. Built for runners from 5k to ultras. Device-friendly. Privacy-first.",
  openGraph: {
    title: "Prazise — Precision training for runners",
    description: "Train with intent. Smarter recommendations from your existing devices.",
  },
  twitter: {
    card: "summary_large_image",
  },
  themeColor: "#0B0D10",
};

import HomeClient from "./HomeClient";

export default function Page() {
  return <HomeClient />;
}
