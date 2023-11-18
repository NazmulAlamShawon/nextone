export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return ( 
       <>
       <nav> about</nav>
      <main>
        {children}
      </main>

       
        </>
    )}