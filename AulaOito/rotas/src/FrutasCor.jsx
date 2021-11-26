import { useParams } from "react-router-dom";

function FrutasCor() {
  const { cor } = useParams();

  return (
    <>
      <h1>Frutas por cor</h1>
      <p>{cor}</p>
    </>
  );
}

export default FrutasCor;
