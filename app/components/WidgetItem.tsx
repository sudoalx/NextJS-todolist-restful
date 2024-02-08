interface WidgetItemProps {
  title: string;
  children: React.ReactNode;
}

export const WidgetItem = ({ title, children }: WidgetItemProps) => {
  return (
    <div className="md:col-span-2 lg:col-span-1">
      <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-700 bg-gray-800 shadow-lg hover:shadow-xl transition duration-300 hover:border-cyan-300 cursor-pointer">
        <div>
          <h5 className="text-xl text-gray-300 text-center">{title}</h5>
          <hr className="my-4 border-t-2 border-gray-700" />
          <span className="block text-center text-gray-500">{children}</span>
        </div>
      </div>
    </div>
  );
};
