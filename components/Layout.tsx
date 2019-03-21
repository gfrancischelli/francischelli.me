import { styled } from "./Theme";

const LayoutWrapper = styled.div`
  margin: 0 auto;
  max-width: 620px;
  padding: ${p => p.theme.margins.lg};
`;

const Layout: React.FC = ({ children }) => (
  <LayoutWrapper>
    {children}
  </LayoutWrapper>
);

export default Layout;
