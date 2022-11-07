const AboutMe = () => {
  return (
    <div className="w-full h-full flex">
      <div className="w-full flex flex-col items-center justify-center">
        <h1
          className="
          pt-2 pb-2
          overflow-hidden border-r border-black whitespace-nowrap my-auto tracking-widest
          animate-blink-caret
          "
          // animate-typing
        >
          Hi! i'm Juan Emilio Rivero
        </h1>
        <h2 className="pt-2 pb-2">Web Developer</h2>
        <div className="w-64">
          <p className="pb-2">
            I'm an enthusiast Web Developer based in Argentina. Currently
            studying the first year of the career of technician in programming
            at UTN FRSN.
          </p>
          <p>
            My stack is ReactJS for Frontend, Node + Express for Backend,
            PostgreSQL/MongoDB as databases.
          </p>
        </div>
      </div>
      {/* <div className="w-1/2  border border-black"></div> */}
    </div>
  );
};

export default AboutMe;
