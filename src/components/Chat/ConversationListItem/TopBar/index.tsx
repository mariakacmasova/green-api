import { BiUserCircle } from 'react-icons/bi';
import { FiRefreshCw } from 'react-icons/fi';

import { ContactInfo } from '../../../../services/accountServices/types';
import useStore from '../../../../store';
import Loader from '../../../Loader';
import {
  ApartContainer,
  RefreshButton,
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
  isChatLoading: boolean;
}

const TopBar = ({
  contactInfo,
  currentChat,
  isLoading,
  isChatLoading,
}: Props) => {
  const { setRefreshChat } = useStore((store) => store);

  return (
    <Wrapper>
      {!isLoading && contactInfo ? (
        <ApartContainer>
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

          <RefreshButton
            onClick={() => setRefreshChat(true)}
            disabled={isChatLoading}
            type="button"
          >
            <FiRefreshCw />
          </RefreshButton>
        </ApartContainer>
      ) : (
        <Loader size={38} />
      )}
    </Wrapper>
  );
};

export default TopBar;
