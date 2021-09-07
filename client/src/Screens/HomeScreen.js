import React from "react";
import product from "../Assets/download.jpg";
import FeatureBar from "../Components/FeatureBar";
import Jumbotron from "../Components/Jumbotron";
import ProductCatagorySection from "../Components/ProductCatagorySection";
import CollectionSection from "../Components/CollectionSection";
import SubscriptionForm from "../Components/SubscribtionForm";
import BlogSection from "../Components/BlogSection";
import NewsletterBar from "../Components/NewsletterBar";

export default function HomeScreen() {
  return (
    <main className="main__home">
      <Jumbotron />
      <FeatureBar />
      <ProductCatagorySection />
      <ProductCatagorySection />
      <ProductCatagorySection />
      <CollectionSection />
      <SubscriptionForm />
      <BlogSection />
      <NewsletterBar />
    </main>
  );
}
