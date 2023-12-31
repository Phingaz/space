export const Moon = () => {
  return (
    <div className="flex flex-col md:gap-5 gap-2">
      <h1 className="md:text-9xl text-5xl text-center md:text-left font-bellefair uppercase">
        Moon
      </h1>
      <p className="text-alt font-barlow text-center md:text-left tracking-tight font-normal text-sm md:text-base">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <hr className="border-gray-500 my-5 md:my-0" />

      <div className="flex md:gap-0 gap-5 text-center md:text-left  justify-center md:justify-between items-center">
        <div>
          <h6 className="text-alt text-sm uppercase">AVG. DISTANCE</h6>
          <h4 className="text-2xl md:text-4xl font-bellefair uppercase">
            384,400 km
          </h4>
        </div>
        <div>
          <h6 className="text-alt text-sm uppercase">Est. travel time</h6>
          <h4 className="text-2xl md:text-4xl font-bellefair uppercase">
            3 days
          </h4>
        </div>
      </div>
    </div>
  );
};
