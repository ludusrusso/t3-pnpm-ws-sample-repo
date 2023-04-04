import { createTest } from "my-lib";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <pre>{JSON.stringify(createTest(), null, 2)}</pre>
    </>
  );
};

export default Home;
