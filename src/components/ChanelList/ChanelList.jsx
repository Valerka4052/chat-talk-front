import { EmptyChannelList } from "../EmptyChannelList/EmptyChannelList";
import {MainContainer,List} from "./ChanelList.styled"
import { ChannelItem } from "./ChannelItem";
import { Loader } from "../../utils";
import PropTypes from 'prop-types';
import { useLazyLoading } from "../../hooks/useLazyLoading";

export const ChanelList = ({ channels, isLoading, ForwardPage, notFound, ForwardSearchPage }) => {
  const [onScroll, containerRef] = useLazyLoading({ onIntersection: (notFound ? ForwardSearchPage : ForwardPage), delay: 1200, marginFromBottom: 30 });
  
  if (!channels) return null;
  if (channels.length === 0) return <EmptyChannelList notFound={notFound} />;
  return (
    <MainContainer ref={containerRef} onScroll={onScroll}>
      <List>
        {channels.map(channel => <ChannelItem key={channel.id} channel={channel} />)}
        {isLoading && <Loader />}
      </List>
    </MainContainer>
  );
};
ChanelList.propTypes = {
  channels: PropTypes.array,
  isLoading: PropTypes.bool,
  ForwardPage: PropTypes.func,
  notFound: PropTypes.bool,
  ForwardSearchPage: PropTypes.func,
};
