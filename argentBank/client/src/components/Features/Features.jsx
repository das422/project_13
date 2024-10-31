import FeatureCard from "./featureCard/FeatureCard";

export default function Features({ featureData }) {
  return (
    <section className="flex flex-col md:flex-row ">
      <h2 className="sr-only">Features</h2>
      <FeatureCard featureData={featureData} />
    </section>
  );
}
