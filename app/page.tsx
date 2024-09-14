"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import companies from "@/data/companiesData.json";
import faqs from "@/data/faq.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
const Home = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center ">
        <h1 className="flex flex-col items-center sm:text-6xl lg:text-8xl font-extrabold tracking-tighter py-4 text-4xl justify-center gradient-title">
          Find Your Dream Job{" "}
          <span className="flex items-center gap-2 sm:gap-6 ">
            and get{" "}
            <img src="/logo.png" alt="hirrd" className="h-14 sm:h-24 lg:h-32" />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands ofjob listings or find the perfect cnadidate
        </p>
      </section>
      <div className="flex gap-6 justify-center sm:flex-row  flex-col">
        <Link href="/jobLisiting">
          <Button className="sm:w-auto w-full" variant={"blue"} size={"xl"}>
            Find Jobs
          </Button>
        </Link>
        <Link href="/post-jobs">
          <Button
            className="sm:w-auto w-full"
            variant={"destructive"}
            size={"xl"}
          >
            Post a Job
          </Button>
        </Link>
      </div>
      <Carousel
        className="w-full py-10 "
        opts={{
          loop: true,
        }}
        plugins={[Autoplay({ delay: 1500, stopOnInteraction: false })]}
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center ">
          {companies.map(
            (company: { name: string; id: number; path: string }) => {
              return (
                <CarouselItem
                  key={company.id}
                  className="sm:basis-1/3 basis-1/2 lg:basis-1/6"
                >
                  <img
                    src={company.path}
                    alt={company.name}
                    className="h-9 sm:h-14 object-contain cursor-pointer  transition-all duration-500 hover:scale-105 "
                  />
                </CarouselItem>
              );
            }
          )}
        </CarouselContent>
      </Carousel>
      <img
        src="/banner.jpeg"
        alt="Banner"
        className="w-full object-cover hover:scale-95 shadow-md shadow-gray-500 hover:shadow-lg hover:shadow-gray-600 transition-all duration-500 cursor-pointer rounded-xl"
      />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="shadow-lg shadow-gray-500 cursor-pointer hover:shadow-xl hover:shadow-gray-600 transition-shadow duration-500">
          <CardHeader>
            <CardTitle className="font-extrabold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Search and apply for jobs, track applications, and more.</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg shadow-gray-500 cursor-pointer hover:shadow-xl hover:shadow-gray-600 transition-shadow duration-500">
          <CardHeader>
            <CardTitle className="font-extrabold">For Recruiters</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Post jobs, manage applications, and find the best candidates</p>
          </CardContent>
        </Card>
      </section>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => {
          return (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </main>
  );
};

export default Home;
