type Props = {
  userName: string;
  email: string;
};

export const UserBio = ({ userName, email }: Props) => {
  return (
    <div className="font-medium leading-none">
      <div className="text-base text-white">{userName}</div>
      <div className="text-sm text-gray-400">{email}</div>
    </div>
  );
};
