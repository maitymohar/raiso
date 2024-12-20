import { Card } from "../components/ClubCard";
import { BlurIn } from "../components/ui/Blur-in";

export default function App() {
  const users = [
    {
      name: "Club A",
      userhandle: "@MOHAR.MAITY.3",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, modi? Ipsam eos officiis aliquid facere nulla perspiciatis nisi, voluptates expedita?",
      instagramLink: "https://www.instagram.com/mohar.maity.3/",  // Added Instagram link
      image: "/img/logo.png",
      custom: "-50px"
    },
    {
      name: "Club B",
      userhandle: "Instagram Handle", // You can adjust this as per the actual handle
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, modi? Ipsam eos officiis aliquid facere nulla perspiciatis nisi, voluptates expedita?", // Consistent description key
      instagramLink: "https://www.instagram.com/club_b/",  // Added Instagram link
      image: "/img/logo.png",
      custom: "-50px"
    }
  ];

  return (
    <main>
      <BlurIn>
       <div className="text-5xl text-center font-bold"><b>CLUBS</b></div>
     
      <div className="font-pop w-screen bg-gradient-to-b h-screen p-8">
        {users.map((user, index) => (
          <Card
            key={`card-${index}`}
            name={user.name}
            userhandle={user.userhandle}
            description={user.description}
            image={user.image}
            custom={user.custom}
            instagramLink={user.instagramLink}  // Passing dynamic Instagram link
          />
        ))}
      </div>
      </BlurIn>
    </main>
  );
}