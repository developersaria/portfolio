export default function EmailTemplatesPage() {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row">
      <iframe
        className="w-full max-w-1/2 mx-auto"
        src="/email-template-examples/wander-and-way-travel-email.html"
        height="1500px"
      ></iframe>
      <iframe
        className="w-full max-w-1/2 mx-auto"
        src="/email-template-examples/portfolio-racing-email.html"
        height="1500px"
      ></iframe>
    </div>
  );
}
