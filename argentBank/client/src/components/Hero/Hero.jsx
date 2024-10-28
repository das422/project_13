export default function Hero() {
  return (
    <div className="relative bg-[url('../images/bank-tree.jpeg')] bg-cover bg-no-repeat bg-[0_-50px] h-[300px] md:h-[400px] md:bg-[0%_33%]">
      <section className="relative top-8 w-[200px] bg-white p-8 text-left mx-auto md:absolute md:top-[50px] md:right-[50px] md:w-[300px] md:my-8">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="mb-0 text-sm md:text-lg">No fees.</p>
        <p className="mb-0 text-sm md:text-lg">No minimum deposit.</p>
        <p className="mb-0 text-sm md:text-lg">High interest rates.</p>
        <p className="mb-0 text-sm md:text-lg">
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
}
