import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Tierlist from "../components/Tierlist";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Tierlist
        id="hus"
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
          {
            id: "1",
            name: "Gróska",
            image:
              "https://cdn.mbl.is/m2/_oYXH5hastopmxosS59Kful6Z8U=/1640x1093/smart/frimg/1/21/81/1218154.jpg",
          },
          {
            id: "2",
            name: "Aðalbygging",
            image:
              "https://english.hi.is/sites/default/files/atlityr/myndir/1920_kri0915.jpg",
          },

          {
            id: "3",
            name: "Askja",
            image:
              "https://english.hi.is/sites/default/files/atlityr/myndir/byggingar/1920_askja-1.jpg",
          },
          {
            id: "4",
            name: "Árnagarður",
            image:
              "https://english.hi.is/sites/default/files/atlityr/myndir/byggingar/1920_arnagardur_i_sol.jpg",
          },
          {
            id: "5",
            name: "Lögberg",
            image:
              "https://english.hi.is/sites/default/files/atlityr/myndir/byggingar/1920_logberg-sumar-flott2.jpg",
          },
          {
            id: "6",
            name: "Oddi",
            image:
              "https://english.hi.is/sites/default/files/atlityr/myndir/byggingar/1920_kri_oddi_150826.jpg",
          },
          {
            id: "7",
            name: "Tæknigarður",
            image:
              "https://english.hi.is/sites/default/files/atlityr/myndir/byggingar/taeknigardur.jpg",
          },
          {
            id: "8",
            name: "Háskólatorg",
            image:
              "https://english.hi.is/sites/default/files/atlityr/myndir/1920_kri8200_haskolatorg.jpg",
          },
          {
            id: "9",
            name: "Gimli",
            image:
              "https://english.hi.is/sites/default/files/atlityr/myndir/byggingar/1920_gimli-11.jpg",
          },
          {
            id: "10",
            name: "Veröld",
            image:
              "https://english.hi.is/sites/default/files/atlityr/myndir/byggingar/1920_img_4339.jpg",
          },
          {
            id: "11",
            name: "VR-I",
            image:
              "https://english.hi.is/sites/default/files/atlityr/myndir/byggingar/vr_i.jpg",
          },
          {
            id: "12",
            name: "VR-II",
            image:
              "https://english.hi.is/sites/default/files/atlityr/myndir/byggingar/vr_ii.jpg",
          },
          {
            id: "13",
            name: "VR-III",
            image:
              "https://english.hi.is/sites/default/files/atlityr/myndir/byggingar/vr_iii.jpg",
          },
          {
            id: "14",
            name: "Háskólabíó",
            image:
              "https://english.hi.is/sites/default/files/atlityr/myndir/byggingar/1920_kri0788xx.jpg",
          },
          {
            id: "15",
            name: "Endurmenntun",
            image:
              "https://images.prismic.io/endurmenntunis/3cd5d5ab-a9a8-4535-ab7a-712b35b5ede8_ENDURMENNTUN_HUS.JPG?auto=compress,format&rect=0,65,1732,974&w=1920&h=1080",
          },
        ]}
      />
    </div>
  );
};

export default Home;
