interface HeaderProps {
  score: number;
}

const Header = ({ score }: HeaderProps) => {
  return (
    <div>
      <div className=" border-2 p-4 rounded-xl border-[var(--Header-Outline)] flex items-center justify-between w-[350px] md:w-[600px] md:mb-6">
        <div>
          <img
            className=" w-[120px] md:w-full"
            src="./images/logo.svg"
            alt="logo image"
          />
        </div>
        <div className=" bg-white flex flex-col rounded-lg items-center justify-center py-2 px-6 md:py-4 md:px-10 ">
          <p className=" text-sm uppercase leading-4 text-[var(--Score-Text)] tracking-widest">
            Score
          </p>
          <h1 className=" text-6xl font-bold text-[var(--Dark-Text)]">
            {score}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
