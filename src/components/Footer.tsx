import {
  InfoLinks,
  Container,
  Separator,
  SocialIcons,
  TechnicalLinks,
} from 'components';

export const Footer = () => {
  return (
    <footer className="footer py-6">
      <Container>
        <InfoLinks />

        <Separator className="my-8" />

        <SocialIcons />

        <TechnicalLinks />

        <span className="text-sm text-black/60 py-2">
          © 2023 Starbucks Coffee Company. All rights reserved.
        </span>
      </Container>
    </footer>
  );
};
