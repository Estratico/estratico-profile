import Image from "next/image";

export default function Avatar({ title, url }: { title: string; url: string }) {
  return (
    <div className="flex items-center">
      <div className="mr-4 w-12 h-12">
        <Image
          alt={title}
          className="object-cover h-full rounded-full"
          height={96}
          width={96}
          src={"https://lh3.googleusercontent.com/a/ACg8ocKEQTH4sEhynUcvFsz5MsWwr6bzvb5xXIbDRfK236-a-Eb1uI6Q=s360-c-no"}
        />
      </div>
      <div className="text-xl font-bold">{title}</div>
    </div>
  );
}
