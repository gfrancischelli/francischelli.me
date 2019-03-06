import { styled } from "./Theme";

const LayoutWrapper = styled.div`
  padding: ${p => p.theme.margins.lg};
  max-width: 540px;
`;

const Layout: React.FC = ({ children }) => (
  <LayoutWrapper>
    {children}
  </LayoutWrapper>
);

export default Layout;
