import { useSpring, animated } from '@react-spring/web';

import { Container, LogoContent } from '@/utils';
import { HomeBtn } from '@/components/Buttons';

const HomePage = () => {
  const from = 'homepage';

  const opacitySpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });

  return (
    <animated.div style={{ ...opacitySpring }}>
      <Container from={from}>
        <LogoContent
          widthLogo="160"
          heightLogo="160"
          title="Talk"
          slogan="Connect. Chat. Discover."
          from={from}
        />
        <HomeBtn />
      </Container>
    </animated.div>
  );
};

export default HomePage;