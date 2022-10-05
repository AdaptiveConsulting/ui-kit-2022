import styled from '@emotion/styled';

interface Props {
  text?: string;
  textColor: string;
  borderColor: string;
  backgroundColor: string;
}

const Button = styled.button(
  (props: { borderColor: string; textColor: string; backgroundColor: string }) => ({
    border: `1px solid ${props.borderColor}`,
    color: props.textColor,
    backgroundColor: props.backgroundColor,
  }),
);

export default function example(props: Props) {
  return (
    <Button
      borderColor={props.borderColor}
      textColor={props.textColor}
      backgroundColor={props.backgroundColor}
    >
      Hello {props.text ? props.text : 'World'}
    </Button>
  );
}
