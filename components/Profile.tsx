import { styled } from "../components/Theme";

const ProfileWrapper = styled.img`
  display: block;

  width: 180px;
  height: 180px;

  margin: 0 auto;
  margin-bottom: ${p => p.theme.margins.md};

  ${p => p.theme.media.tablet} {
    width: 220px;
    height: 220px;
    margin-left: -12px;
  }

  ${p => p.theme.media.desktop} {
    width: 260px;
    height: 260px;
  }
`;

const Profile = () => <ProfileWrapper src="/static/images/profile.png" />;

export default Profile;
