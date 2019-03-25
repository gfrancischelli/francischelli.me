import { P, H1 } from "../components/Text";
import Profile from "../components/Profile";
import { styled } from "../components/Theme";
import SocialIcons from "../components/SocialIcons";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  ${H1} {
    align-self: flex-start;
  }

  ${p => p.theme.media.tablet} {
    flex-flow: row;
    flex-wrap: wrap;

    ${H1} {
      width: 100%;
      flex: 0 1 auto;
    }

    .about-text {
      width: 50%;
      margin-left: ${p => p.theme.margins.md};
    }
  }

  ${p => p.theme.media.desktop} {
    flex-wrap: wrap;
  }
`;

const About = () => (
  <Wrapper>
    <H1>About</H1>
    <Profile />
    <div className="about-text">
      <P>
        Quit Physics major to study painting then started programming by
        accident. Been coding non stop ever since.
      </P>
      <P>
        Javascript nerd, book worm, I love my amazing girlfried, my beautiful
        cat children, playing the guitar and cinema!
      </P>
    </div>
    <SocialIcons />
  </Wrapper>
);

export default About;
