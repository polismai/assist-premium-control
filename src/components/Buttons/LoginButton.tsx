export const LoginButton = () => {
  return (
      <a 
        href="/api/auth/login" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
      >
        Ingresar
      </a>
  );
};

export default LoginButton;