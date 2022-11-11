import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Tierlist from "../components/Tierlist";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Tierlist
        id="afangar"
        tiers={[
          { id: "goat", name: "S" },
          { id: "a", name: "A" },
          { id: "b", name: "B" },
          { id: "c", name: "C" },
          { id: "d", name: "D" },
          { id: "f", name: "F" },
        ]}
        cards={[
          // Notum soft-hyphens (\u00AD) til að brjóta orðin upp á næs hátt
          { id: "1", name: "Tölvunar\u00ADfræði 1" },
          { id: "2", name: "Stærðfræði\u00ADmynstur" },
          { id: "3", name: "Vef\u00ADforritun 1" },
          { id: "4", name: "G&H\u00ADstafrænna rása" },
          { id: "5", name: "Viðmóts\u00ADforritun" },
          { id: "6", name: "Tölvunar\u00ADfræði 2" },
          { id: "7", name: "Keppnis\u00ADforritun" },
          { id: "8", name: "Hag\u00ADverkfræði" },
          { id: "9", name: "Gagnasafns\u00ADfræði" },
          { id: "10", name: "Forritunar\u00ADmál" },
          { id: "11", name: "Tækni\u00ADstjórnun" },
          { id: "12", name: "Raf\u00ADmyntir" },
          { id: "13", name: "Þróun hug\u00ADbúnaðar" },
          { id: "14", name: "Stýri\u00ADkerfi" },
          { id: "15", name: "Tölvu\u00ADgrafík" },
          { id: "16", name: "Gervi\u00ADgreind" },
          { id: "17", name: "Hugbúnaðar\u00ADverkefni 1" },
          { id: "18", name: "Töluleg greining" },
          { id: "19", name: "Skiptinám" },
          { id: "20", name: "Hugbúnaðar\u00ADverkefni 2" },
          { id: "21", name: "Vef\u00ADforritun 2" },
          { id: "22", name: "Lífsferill gervigreindar\u00ADlausna" },
        ]}
      />
    </div>
  );
};

export default Home;
