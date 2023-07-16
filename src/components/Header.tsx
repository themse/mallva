import { Navbar, Container } from 'components';

export const Header = () => {
  return (
    <header className="header min-h-[72px] md:min-h-[100px] flex flex-col justify-center">
      <Container>
        <Navbar variant="complicated" />
      </Container>
    </header>
  );
};
