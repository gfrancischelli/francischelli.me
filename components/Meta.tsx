import { styled } from "./Theme";
import formatDate from "../lib/formatDate";

const Wrapper = styled.div`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 600;
  font-size: 14px;
  color: ${p => p.theme.colors.base.light};
`;

interface Props {
  published_at: string;
  length: number;
}

const Meta: React.FC<Props> = ({ published_at, length }) => (
  <Wrapper>
    {formatDate(published_at)} • {length} minutes read
  </Wrapper>
);

export default Meta;
