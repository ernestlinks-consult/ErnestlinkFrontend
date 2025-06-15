"use client";
import useAuth from "../../hooks/useAuth";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import RoleDashboard from "../../components/RoleDashboard";

export default function FacilitatorDashboard() {
  useAuth();
  return <RoleDashboard role="facilitator" />;
}
