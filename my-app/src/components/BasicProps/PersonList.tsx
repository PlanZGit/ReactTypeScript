import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((name) => {
        return <h2 key={name.first}>{name.first}</h2>;
      })}
    </div>
  );
}

export default PersonList;
