type AppShellProps = {
  title: string;
  children: React.ReactNode;
};

export function AppShell({ title, children }: AppShellProps) {
  return (
    <section className="mx-auto w-full max-w-5xl p-6">
      <header className="mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
      </header>
      <div>{children}</div>
    </section>
  );
}
