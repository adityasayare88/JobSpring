import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SideBarRouteItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SideBarRouteItem = ({
  icon: Icon,
  label,
  href,
}: SideBarRouteItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`$(href)/`);

  const onClick = () => {};
  return <button onClick={onClick}> </button>;
};
