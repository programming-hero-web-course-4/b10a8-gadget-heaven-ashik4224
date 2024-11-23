const About = () => {
  return (
    <div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>Hi I am A Web Deplorer</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>Protect your users and create a safer online environment with toxicity detection. In part one, we share the context you need to deploy AI to mitigate toxicity at its...</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>A collection of best practices that Chrome has identified as the biggest opportunities to optimize web performance and improve Core Web Vitals.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
