import React from "react";
import FeatureBar from "../Components/FeatureBar";
import Jumbotron from "../Components/Jumbotron";

export default function HomeScreen() {
  return (
    <main className="main__home">
      <Jumbotron />
      <FeatureBar />
    </main>
  );
}
