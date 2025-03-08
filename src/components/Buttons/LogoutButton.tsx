export const LogoutButton = () => {
  return (
      <a
        href="/api/auth/logout" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
      >
        Cerrar sesión
      </a>
  );
};

export default LogoutButton;