 function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="mx-auto max-w-screen-lg px-6">
        <h2 className="text-3xl font-bold text-emerald-900 text-center">
          Gallery
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-40 border border-dashed border-emerald-300 flex items-center justify-center text-sm text-gray-500"
            >
              Session Image
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Gallery;
