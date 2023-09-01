export const Europa = () => {
  return (
    <div className="flex flex-col md:gap-5 gap-2">
      <h1 className="md:text-9xl text-5xl text-center md:text-left font-bellefair uppercase">Europa</h1>
      <p className="text-alt font-barlow text-center md:text-left tracking-tight font-normal">
      The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
      </p>
      <hr className="border-gray-500 md:my-0 my-5"/>
      <div className="flex md:gap-0 gap-5 text-center md:text-left  justify-center md:justify-between items-center">
        <div>
          <h6 className="text-alt text-sm uppercase">AVG. DISTANCE</h6>
          <h4 className="text-2xl md:text-4xl font-bellefair uppercase">628 MIL. km</h4>
        </div>
        <div>
          <h6 className="text-alt text-sm uppercase">Est. travel time</h6>
          <h4 className="text-2xl md:text-4xl font-bellefair uppercase">3 years</h4>
        </div>
      </div>
    </div>
  );
};
