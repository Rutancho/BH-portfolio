export default function Hero() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between">
      <div className="lg:w-1/2 md:w-1/2 w-full pr-4">
        <h1 className="title-font sm:text-7xl text-4xl mb-4 font-medium text-gray-900">Chef coding</h1>
        <p className="mb-8 leading-relaxed text-lg">
          Cooking up digital solutions with the precision of a master chef. Just as a chef combines ingredients to create a delicious meal,
          I blend coding languages and technologies to develop innovative software solutions. With 10 years of experience as a chef, I bring creativity,
          attention to detail, and a passion for problem-solving to the world of programming.
        </p>
      </div>
      <div className="lg:max-w-lg lg:w-1/2 md:w-1/2 w-full">
      </div>
    </div>
  );
}
