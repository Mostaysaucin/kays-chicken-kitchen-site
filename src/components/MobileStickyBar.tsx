const ORDER_URL = "https://www.clover.com/online-ordering/kays-kitchen-tampa";

export default function MobileStickyBar() {
  return (
    <div className="mobile-sticky-bar" aria-label="Mobile order bar">
      <a
        href={ORDER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold w-full text-center !py-3"
      >
        Order Online Now
      </a>
    </div>
  );
}
