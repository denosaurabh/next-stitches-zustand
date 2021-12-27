import type { NextPage } from 'next';
import Link from 'next/link';
import { styled } from '@/stitches.config';
import useGlobalState from '@/store/global';

const Home: NextPage = () => {
  const { count, increaseCount } = useGlobalState();

  return (
    <div>
      <Main>
        <Heading>NextJS + Stitches + Zustand Starter Boilerplate </Heading>

        <Link href="https://nextjs.org/docs/getting-started">
          NextJS docs &rarr;
        </Link>
        <Link href="https://stitches.dev/docs/styling">
          Stitches docs &rarr;
        </Link>
        <Link href="https://github.com/pmndrs/zustand">
          Zustand docs &rarr;
        </Link>

        <Span>
          by <Link href="https://denosaurabh.me">@denosaurabh</Link>
        </Span>

        <Button onClick={increaseCount}>Thanks ❤️ {count}</Button>
      </Main>
    </div>
  );
};

export default Home;

const Main = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  a: {
    fontFamily: '$websafe',
    fontSize: '1.5rem',
    color: '$text',
  },
});

const Heading = styled('h1', {
  color: '$text',
  fontFamily: '$websafe',
  fontSize: '3rem',

  margin: '2rem 0',
});

const Span = styled('span', {
  color: '$text',
  fontFamily: '$websafe',
  fontSize: '1rem',

  margin: '2rem 0',
});

const Button = styled('button', {
  backgroundColor: '$background',
  color: '$text',

  fontFamily: '$websafe',
  fontSize: '1.5rem',

  padding: '1rem 2rem',
  border: 'none',
  borderRadius: '0.5rem',

  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '#e9ecef',
  },
});
