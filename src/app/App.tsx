import { WaterMetersTable } from '../widgets/metersTable/ui/metersTable';

function App() {
  return (
    <div className="bg-neutral-50 p-4 w-screen h-screen">
      <h1 className="text-neutral-800 font-medium text-[24px] mb-4">
        Список счетчиков
      </h1>
      <WaterMetersTable />
    </div>
  );
}

export default App;
