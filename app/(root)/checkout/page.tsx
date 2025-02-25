import Image from 'next/image';

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen m-4">
      <h1 className="text-2xl mb-4 text-center md:text-4xl">Thank you for shopping with us!</h1>
      <Image
        src="https://ik.imagekit.io/h4sspbp2a/products/13.jpg?updatedAt=1739952825056"
        alt="cat holding a note"
        width={550}
        height={250}
      />
    </div>
  );
};

export default page;
