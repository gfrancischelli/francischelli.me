import { styled } from "./Theme";

const LayoutWrapper = styled.div`
  padding: ${p => p.theme.margins.lg};
`;

const Layout: React.FC = ({ children }) => (
  <LayoutWrapper>
    {children}
  </LayoutWrapper>
);

export default Layout;
