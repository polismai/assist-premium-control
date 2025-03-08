export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-red-600">Acceso Denegado</h1>
      <p className="mt-2 text-lg">No tienes permisos para acceder a esta página.</p>
    </div>
  );
}