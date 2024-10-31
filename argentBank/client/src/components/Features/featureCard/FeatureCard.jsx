const featuresData = [
  {
    imgSrc: "./images/icon-chat.png",
    title: "You are our #1 priority",
    description:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    imgSrc: "./images/icon-money.png",
    title: "More savings means higher rates",
    description:
      "The more you save with us, the higher your interest rate will be!",
  },
  {
    imgSrc: "./images/icon-security.png",
    title: "Security you can trust",
    description:
      "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

export default function FeatureCard() {
  return (
    <>
      {featuresData.map((feature, index) => (
        <div
          className="flex flex-col items-center justify-arround flex-1 m-5 p-4 gap-2 md:m-10"
          key={index}
        >
          <img
            src={feature.imgSrc}
            alt={feature.title}
            className="w-24 h-24 border-8 border-green-500 rounded-full p-4 "
          />
          <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
          <p className="text-gray-600 text-center my-2">{feature.description}</p>
        </div>
      ))}
    </>
  );
}
