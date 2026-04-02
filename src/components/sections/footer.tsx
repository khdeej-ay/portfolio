import { ArrowUp } from "lucide-react";

export function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="flex max-md:flex-col justify-between items-center max-md:gap-2 py-5 md:py-10 border-gray-800 border-t">
      <p className="text-muted-foreground text-base text-center" suppressHydrationWarning>
        &copy; {new Date().getFullYear()} · Syeda Khadeeja
      </p>
      <button
        className="flex items-center gap-2 w-fit text-muted-foreground text-base cursor-pointer"
        onClick={scrollToTop}
      >
        Back to top
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
