import { SignInForm, Container } from 'components';

const SignIn = () => {
  return (
    <div className="py-8 m-auto">
      <Container>
        <div className="flex flex-col gap-8 justify-center items-center">
          <h1 className="text-3xl font-bold text-center">
            Sign in or create an account
          </h1>
          <SignInForm />
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
