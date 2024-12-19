export const HeroImage = () => {
  return (
    <div className="relative h-full">
      {/* Agent Image */}
      <div className="relative z-10">
        <img
          src="/placeholder.svg"
          alt="Real Estate Agent"
          className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-xl"
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full -z-10" />
      <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
    </div>
  );
};