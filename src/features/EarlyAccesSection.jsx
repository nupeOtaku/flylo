const EarlyAccesSection = () => {
  return (
    <section
      id="early-access"
      className="relative px-6 dark:bg-darkBlue2 md:px-0"
    >
      {/* Subscribe */}
      <div className="relative -top-40 mx-auto max-w-4xl space-y-6 rounded-lg bg-gray-200 p-10 px-6 text-center dark:bg-darkBlue1 md:px-16">
        <h5 className="text-2xl font-bold">Get Early Access Today!</h5>
        <p className="text-sm">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        {/* Input and Button Container */}
        <div className="flex flex-col items-start space-y-6 md:flex-row md:space-x-6 md:space-y-0">
          <div className="w-full md:flex-1">
            <input
              type="text"
              placeholder="Email@example.com"
              className="w-full rounded-full px-10 py-3 focus:outline-none"
            />
          </div>

          <button className="w-full rounded-full bg-accentCyan p-3 px-6 duration-200 hover:scale-x-95 md:w-52 ">
            Get Started For Free
          </button>
        </div>
      </div>
    </section>
  );
};

export { EarlyAccesSection };
