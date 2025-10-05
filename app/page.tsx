import HomeClient from "./home/HomeClient";

export const metadata = {
  title: "Prazise — Precision training for runners",
  description:
    "Prazise turns your heart rate, HRV, sleep, and workouts into precise training plans. Device-friendly. Privacy-first.",
};

export default function Page() {
  return <HomeClient />;
}
