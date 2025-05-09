import { Cpu, Settings, BarChart } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-16 px-6 md:px-20 md:py-20 lg:px-40">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center w-full lg:w-3/5 lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-wide mb-6">
            Supercharge Your Business with Next-Gen{" "}
            <span className="text-[#09BBc8]">AI-Powered Solutions</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Empowering businesses with AI-driven software and innovative digital
            strategies that deliver real-world impact.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 mb-10 lg:justify-start justify-center">
            <div className="flex items-center gap-3">
              <Cpu className="text-[#09bbc8] w-6 h-6" />
              <p className="text-gray-700 text-base font-medium">
                AI & Automation
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Settings className="text-[#09bbc8] w-6 h-6" />
              <p className="text-gray-700 text-base font-medium">
                Custom IT Solutions
              </p>
            </div>
            <div className="flex items-center gap-3">
              <BarChart className="text-[#09bbc8] w-6 h-6" />
              <p className="text-gray-700 text-base font-medium">
                Digital Marketing
              </p>
            </div>
          </div>

          <div className="flex gap-4 justify-center items-center lg:justify-start">
            <button className="bg-[#09bbc8] text-white px-5 py-3 cursor-pointer rounded-lg text-base font-medium hover:bg-[#07a5b0] transition">
              Get Started
            </button>
            <button className="text-[#09bbc8] border border-[#09bbc8] px-5 py-3 cursor-pointer rounded-lg text-base font-medium hover:bg-[#f0fafa] transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden lg:block lg:w-2/5">
          <img src="/img5.png" alt="hero_image" className="w-[85%] h-140" />
        </div>
      </div>
    </section>
  );
}
