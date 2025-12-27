import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/banner4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-1/2 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

