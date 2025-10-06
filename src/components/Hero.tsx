import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "./ui/announcement";
import { WavyBackground } from "./ui/wavy-bachground";
import { DepartmentsRotatingText } from "./text/departments-rotating-text";
import {
  InputButton,
  InputButtonAction,
  InputButtonInput,
  InputButtonProvider,
  InputButtonSubmit,
} from "./ui/imput-button";
import { ArrowUpRightIcon, Check, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const Hero = () => {
  // Memoize wave colors to avoid resetting WavyBackground animation on re-renders
  const waveColors = React.useMemo(
    () => ["#a5f3fc", "#d8b4fe", "#fbcfe8", "#fde68a"],
    [],
  );

  const [showInput, setShowInput] = React.useState(false);
  const [pending, startTransition] = React.useTransition();
  const [success, setSuccess] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!showInput) {
        setShowInput(true);
        return;
      }

      startTransition(() => {
        (async () => {
          await sleep(2000);
          setSuccess(true);
          await sleep(2000);
          setSuccess(false);
          setShowInput(false);
          setValue("");
        })();
      });
    },
    [showInput],
  );

  const renderWaitlistForm = () => {
    let submitContent: React.ReactNode;
    if (success) {
      submitContent = (
        <motion.span
          key="success"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Check />
        </motion.span>
      );
    } else if (pending) {
      submitContent = (
        <motion.span
          key="pending"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Loader2 className="animate-spin" />
        </motion.span>
      );
    } else {
      submitContent = "Join the Waitlist";
    }

    return (
      <form
        onSubmit={handleSubmit}
        className="w-full flex items-center justify-center"
      >
        <InputButtonProvider showInput={showInput} setShowInput={setShowInput}>
          <InputButton>
            <InputButtonAction onClick={() => {}}>Talk to Us</InputButtonAction>
            <InputButtonSubmit
              onClick={() => {}}
              type="submit"
              disabled={pending}
              className={pending || success ? "aspect-square px-0" : ""}
            >
              {submitContent}
            </InputButtonSubmit>
          </InputButton>
          <InputButtonInput
            type="email"
            placeholder="your-email@example.com"
            value={value}
            onChange={(e) => setValue((e.target as HTMLInputElement).value)}
            disabled={pending}
            autoFocus
          />
        </InputButtonProvider>
      </form>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-section-primary">
      <div className="relative h-screen w-full overflow-hidden">
        <WavyBackground
          backgroundFill="white"
          colors={waveColors}
          waveWidth={50}
          blur={10}
          speed="fast"
          waveOpacity={0.5}
          containerClassName="h-full w-full"
          className="flex items-center justify-center"
        >
          <div className="px-6 md:px-10 py-32 md:py-40">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="flex justify-center animate-fade-in opacity-0 stagger-1">
                <Announcement className="bg-sky-100 text-sky-700" themed>
                  <AnnouncementTag>Latest update</AnnouncementTag>
                  <AnnouncementTitle>
                    🎉 We're officially launching! Join the future of AI
                    automation
                    <ArrowUpRightIcon
                      className="shrink-0 text-muted-foreground"
                      size={16}
                    />
                  </AnnouncementTitle>
                </Announcement>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight text-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-700">
                    Work smarter with your
                  </span>
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-rose-500 to-amber-500">
                    AI crew
                  </span>
                </h1>
              </motion.div>

              <h2 className="mt-6">
                At a6n, we supercharge your team with private AI agents built
                for
                <DepartmentsRotatingText
                  duration={3000}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-primary font-semibold"
                />
              </h2>

              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in opacity-0 stagger-4">
                The AI automation platform where teams and agents achieve more
                together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0 stagger-5">
                {renderWaitlistForm()}
              </div>
            </div>
          </div>
        </WavyBackground>
      </div>
    </section>
  );
};

export default Hero;
