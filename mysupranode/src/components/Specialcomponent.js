export default function Specialcomponent(props) {
  const specialVar = 'specialcomponent !';
  return (
    <div>
      <h3>Here is</h3>
      <hr />
      <h3 style={props.style}>my {props.tweek}</h3>
      <hr />
      <h3>{specialVar}</h3>
    </div>
  );
}