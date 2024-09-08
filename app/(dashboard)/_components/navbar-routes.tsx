"use client";

import { UserButton } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const CustomUserButton = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button onClick={handleSignOut} variant="outline" size="sm">
        <LogOut /> Sign Out
      </Button>
      <UserButton />
    </div>
  );
};

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isAdminPage = pathname?.startsWith("/admin");
  const isJobsPage = pathname?.startsWith("/jobs");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isAdminPage || isJobsPage ? (
        <Link href="/">
          <Button variant="outline" size="sm" className="border-purple-700/20">
            <LogOut /> Exit
          </Button>
        </Link>
      ) : (
        <Link href="/admin/jobs">
          <Button variant="outline" size="sm" className="border-purple-700/20">
            Admin Mode
          </Button>
        </Link>
      )}
      <CustomUserButton />
    </div>
  );
};
