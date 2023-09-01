export const Mars = () => {
  return (
    <div className="flex flex-col md:gap-5 gap-2">
      <h1 className="md:text-9xl text-5xl text-center md:text-left font-bellefair uppercase">
        Mars
      </h1>
      <p className="text-alt font-barlow text-center md:text-left tracking-tight font-normal">
        Don’t forget to pack your hiking boots. You’ll need them to tackle
        Olympus Mons, the tallest planetary mountain in our solar system. It’s
        two and a half times the size of Everest!
      </p>
      <hr className="border-gray-500 my-5 md:my-0" />

      <div className="flex md:gap-0 gap-5 text-center md:text-left  justify-center md:justify-between items-center">
        <div>
          <h6 className="text-alt text-sm uppercase">AVG. DISTANCE</h6>
          <h4 className="text-2xl md:text-4xl font-bellefair uppercase">
            225 MIL. km
          </h4>
        </div>
        <div>
          <h6 className="text-alt text-sm uppercase">Est. travel time</h6>
          <h4 className="text-2xl md:text-4xl font-bellefair uppercase">
            9 Months
          </h4>
        </div>
      </div>
    </div>
  );
};
