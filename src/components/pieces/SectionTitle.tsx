import { useTranslations } from "next-intl";

interface SectionTitleProps {
  translationContext: string;
}

const SectionTitle = ({ translationContext }: SectionTitleProps) => {
  const t = useTranslations(translationContext);

  return (
    <div className="max-w-3xl mx-auto mb-20">
      <div className=" flex flex-col lg:flex-row gap-4  items-center mb-4">
        <div className="w-4 h-4 shrink-0 rounded-full bg-primary hidden lg:block " />
        <h2 className="text-4xl md:text-6xl font-bold font-handwritten text-text-main text-nowrap">
          {t.rich("title", {
            span: (chunk) => (
              <span className="text-primary italic">{chunk}</span>
            ),
          })}
        </h2>
        <div>
          <svg
            className="w-full h-5 md:h-6  max-w-md"
            viewBox="0 0 300 20"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="
                        M2 12
                        C40 10, 75 11, 105 10
                        C140 9, 170 11, 205 11
                        C235 10, 265 12, 298 13
                      "
              stroke="#2563eb"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <p className="text-text-muted text-lg leading-relaxed pt-4 text-center">
        {t("description")}
      </p>
    </div>
  );
};

export default SectionTitle;
