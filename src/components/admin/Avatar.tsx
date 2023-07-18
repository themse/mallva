import Image from 'next/image';

export const Avatar = () => {
  return (
    <div className="relative w-10 h-10">
      <div className="absolute inset-0">
        <Image
          fill
          className="rounded-full object-cover w-auto h-auto"
          src="/avatar.jpeg"
          alt="User"
        />
      </div>
    </div>
  );
};
