interface Props {
  text?: string;
}

export default function example(props: Props) {
  return <div>Hello {props.text ? props.text : 'World'}</div>;
}
