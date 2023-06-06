import { BiUserCircle } from 'react-icons/bi';

import { ContactInfo } from '../../../../services/accountServices/types';
import Loader from '../../../Loader';
import {
  UserAvatar,
  UserAvatarCircle,
  UserInfoWrapper,
  UserName,
  Wrapper,
} from './styles';

interface Props {
  contactInfo: ContactInfo | undefined;
  currentChat: string;
  isLoading: boolean;
}

const TopBar = ({ contactInfo, currentChat, isLoading }: Props) => {
  return (
    <Wrapper>
      {!isLoading && contactInfo ? (
        <UserInfoWrapper>
          <UserAvatar>
            {contactInfo.avatar ? (
              <img src={contactInfo.avatar} alt={contactInfo.name} />
            ) : (
              <BiUserCircle />
            )}
            <UserAvatarCircle />
          </UserAvatar>
          <UserName>
            {contactInfo.name ? contactInfo.name : currentChat}
          </UserName>
        </UserInfoWrapper>
      ) : (
        <Loader size={38} />
      )}
    </Wrapper>
  );
};

export default TopBar;
