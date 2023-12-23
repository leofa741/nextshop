
export default function LoginLayout({  children}: { children: React.ReactNode;}) {
  return (
    <main className="bg-gray-100">
      <h1>Login Layout</h1>
      {children}
    </main>
  );
}