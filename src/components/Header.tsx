import { Navbar, Container } from 'components';

type Props = {
  navbarVariant?: 'default' | 'complicated';
};

export const Header = ({ navbarVariant = 'default' }: Props) => {
  return (
    <header className="header min-h-[72px] md:min-h-[100px] flex flex-col justify-center">
      <Container>
        <Navbar variant={navbarVariant} />
      </Container>
    </header>
  );
};
