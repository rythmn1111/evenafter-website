  import DitheringShader from "../components/DitheringShader";
  import HeaderBanner from "../components/HeaderBanner";
  import MainContent from "../components/MainContent";

  export default function Home() {
    return (
      <>
        <DitheringShader />
        <HeaderBanner />
        <div className="mt-5 h-[10px]" style={{ backgroundColor: "#F5F5DC" }} />
        <MainContent />
      </>
    );
  }
