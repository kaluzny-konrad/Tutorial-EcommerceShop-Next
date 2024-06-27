import { StarIcon } from "lucide-react";

export default function HeaderUsersAndStars() {
  const userImages = [
    "/users/user-1.png",
    "/users/user-2.png",
    "/users/user-3.png",
    "/users/user-4.jpg",
    "/users/user-5.jpg",
  ];

  return (
    <div className="mt-12 flex flex-col items-center gap-5 lg:flex-row lg:items-start">
      <div className="flex -space-x-4">
        {userImages.map((src, index) => (
          <UserImage key={index} src={src} />
        ))}
      </div>

      <div className="flex flex-col items-center justify-between lg:items-start">
        <StarIcons count={5} />

        <p>
          <span className="font-bold">1.250</span> happy customers
        </p>
      </div>
    </div>
  );
}

function UserImage(props: { src: string }) {
  return (
    <img
      className="h-10 w-10 select-none rounded-full object-cover ring-2 ring-slate-100"
      src={props.src}
      alt="user image"
    />
  );
}

function StarIcons(props: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(props.count)].map((_, index) => (
        <StarIcon
          key={index}
          className="h-4 w-4 fill-green-600 text-green-600"
        />
      ))}
    </div>
  );
}
