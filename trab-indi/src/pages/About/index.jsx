import { React, useState } from "react";
import "./style.css";

const About = () => {
  const nomes = [
    "The Legend of Zelda: Breath of the Wild",
    "Super Mario Odyssey",
    "Red Dead Redemption 2",
    "The Witcher 3: Wild Hunt",
    "Grand Theft Auto V",
    "Minecraft",
    "Fortnite",
    "Overwatch",
    "Dark Souls III",
    "Call of Duty: Modern Warfare",
    "Assassin's Creed Valhalla",
    "Hollow Knight",
    "Sekiro: Shadows Die Twice",
    "Animal Crossing: New Horizons",
    "Cyberpunk 2077",
    "God of War",
    "The Elder Scrolls V: Skyrim",
    "Fallout 4",
    "Resident Evil Village",
    "Doom Eternal",
    "FIFA 22",
    "Rocket League",
    "Super Smash Bros. Ultimate",
    "Final Fantasy VII Remake",
    "Bloodborne",
    "Borderlands 3",
    "Mortal Kombat 11",
    "Destiny 2",
    "Among Us",
    "Stardew Valley",
    "Slay the Spire",
    "Hades",
    "Rainbow Six Siege",
    "The Last of Us Part II",
    "Counter-Strike: Global Offensive",
    "Apex Legends",
    "League of Legends",
    "Valorant",
    "The Outer Worlds",
    "Star Wars Jedi: Fallen Order",
    "Persona 5",
    "Monster Hunter: World",
    "Horizon Zero Dawn",
    "Ratchet & Clank: Rift Apart",
    "Genshin Impact",
    "Demon's Souls",
    "Death Stranding",
    "Dota 2",
    "Tom Clancy's The Division 2",
    "No Man's Sky",
  ];
  const [procura, setProcura] = useState("");

  const filtrar = nomes.filter((item) => item.includes(procura));

  return (
    <div>
      <h1>Array Page</h1>
      <input
        type="text"
        placeholder="Search..."
        value={procura}
        onChange={(e) => setProcura(e.target.value)}
      />
      <ul className="array">
        {filtrar.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
