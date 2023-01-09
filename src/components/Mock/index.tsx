import * as Styled from "./styles";

export type MockProps = {
  title?: string;
};

const Mock = ({ title = "Change-me" }: MockProps) => {
  return (
    <Styled.Wrapper>
      <h1>{title}</h1>
      <p>tesetando</p>
    </Styled.Wrapper>
  );
};

export default Mock;
