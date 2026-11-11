export default function EmailTemplatesPage() {
  return (
    <div className="w-full md:max-w-[1440px] p-3 md:p-0 mx-auto flex flex-col md:flex-row">
      <iframe
        className="w-full md:max-w-[50%] md:mx-auto"
        src="/email-template-examples/wander-and-way-travel-email.html"
        height="1500px"
      ></iframe>
      <iframe
        className="w-full md:max-w-[50%] md:mx-auto"
        src="/email-template-examples/portfolio-racing-email.html"
        height="1500px"
      ></iframe>
    </div>
  );
}
