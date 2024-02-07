import { TabBar } from "@/app/components";
import { cookies } from "next/headers";

export const metadata = {
  title: "Cookies Page",
  description: "Cookies Page",
};

export default function CookiesPage() {
  const cookieStore = cookies();
  const cookieTab = cookieStore.get("currentTab")?.value ?? 1;

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
      <div className="flex flex-col">
        <span className="text-3xl">Tabs</span>
        <TabBar currentTab={+cookieTab} />
      </div>
    </div>
  );
}
