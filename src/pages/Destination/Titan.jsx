export const Titan = () => {
  return (
    <div className="flex flex-col md:gap-5 gap-2">
      <h1 className="md:text-9xl text-5xl text-center md:text-left font-bellefair uppercase">Titan</h1>
      <p className="text-alt font-barlow text-center md:text-left tracking-tight font-normal">
      The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
      </p>
      <hr className="border-gray-500 my-5 md:my-0"/>
      <div className="flex md:gap-0 gap-5 text-center md:text-left  justify-center md:justify-between items-center">
        <div>
          <h6 className="text-alt text-sm uppercase">AVG. DISTANCE</h6>
          <h4 className="text-2xl md:text-4xl font-bellefair uppercase">1.6 BIL. km</h4>
        </div>
        <div>
          <h6 className="text-alt text-sm uppercase">Est. travel time</h6>
          <h4 className="text-2xl md:text-4xl font-bellefair uppercase">7 years</h4>
        </div>
      </div>
    </div>
  );
};
