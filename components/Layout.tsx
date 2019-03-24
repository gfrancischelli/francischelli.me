import { styled } from "./Theme";

const LayoutWrapper = styled.div`
  margin: 0 auto;
  max-width: ${p => p.theme.max_width};
  padding: ${p => p.theme.margins.lg};
`;

const Layout: React.FC = ({ children }) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);

export default Layout;
