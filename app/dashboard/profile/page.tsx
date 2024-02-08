"use client";

import { useEffect } from "react";

export default function ProfilePage() {
  useEffect(() => {
    console.log("Profile Page");
  }, []);

  return (
    <div>
      <h1>Hello Profile Page</h1>
    </div>
  );
}
