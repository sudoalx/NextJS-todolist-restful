import { TabBar } from "@/app/components";

export const metadata = {
  title: "Cookies Page",
  description: "Cookies Page",
};

export default function CookiesPage() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
      <div className="flex flex-col">
        <span className="text-3xl">Tabs</span>
        <TabBar />
      </div>
    </div>
  );
}
