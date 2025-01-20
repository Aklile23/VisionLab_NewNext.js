import { Feature } from "@/types/feature";

interface SingleFeatureProps {
  feature: Feature;
  className?: string; // Optional className prop
  
}

const SingleFeature = ({ feature, className }: SingleFeatureProps) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className={`w-full ${className}`}>
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-white bg-opacity-20 text-white">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-slate-300">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
