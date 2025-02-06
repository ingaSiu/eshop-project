import Header from '@/components/Header';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen">
      <section className="flex h-full flex-1 flex-col">
        <Header />
        <div className="main-content">{children}</div>
      </section>
    </main>
  );
};

export default layout;
