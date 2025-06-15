// hooks/useAuth.js
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export const dynamic = "force-dynamic";

export default function useAuth() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/adminlogin");
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  return isAuthenticated;
}
