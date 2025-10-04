import {Announcement, AnnouncementTag, AnnouncementTitle} from "./ui/announcement";
import {WavyBackground} from "./ui/wavy-bachground";
import {RotatingText} from "./text/rotating-text";
import {
    InputButton,
    InputButtonAction,
    InputButtonInput,
    InputButtonProvider,
    InputButtonSubmit
} from "./ui/imput-button";
import {ArrowUpRightIcon} from "lucide-react";

const Hero = () => {
    const rotatingTexts = [
        "Organization",
        "HR",
        "Marketing",
        "Sales",
        "Analytics",
        "Software",
        "Finance",
        "Operations",
        "Customer Support",
        "Product",
        "Legal"
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-section-primary">
            <div className="relative h-screen w-full overflow-hidden">
                <WavyBackground
                    backgroundFill="white"
                    colors={["#a5f3fc", "#d8b4fe", "#fbcfe8", "#fde68a"]}
                    waveWidth={50}
                    blur={10}
                    speed="fast"
                    waveOpacity={0.5}
                    containerClassName="h-full w-full"
                    className="flex items-center justify-center"
                >

                    <div className="px-6 md:px-10 py-32 md:py-40">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            {/* Announcement Badge */}
                            <div className="flex justify-center animate-fade-in opacity-0 stagger-1">
                                <Announcement className="bg-sky-100 text-sky-700" themed>
                                    <AnnouncementTag>Latest update</AnnouncementTag>
                                    <AnnouncementTitle>
                                        🎉 We're officially launching! Join the future of AI automation
                                        <ArrowUpRightIcon className="shrink-0 text-muted-foreground" size={16}/>
                                    </AnnouncementTitle>
                                </Announcement>
                            </div>

                            {/* Tagline */}
                            <h1 className="mb-0 text-balance font-medium text-6xl md:text-7xl xl:text-[5.25rem]">
                                Work smarter with your AI crew.
                            </h1>

                            {/* Subheading with rotating text */}
                            <h4 className="scroll-m-20 text-2xl font-medium tracking-tight">
                                At a6n, we supercharge your team with private AI agents built for
                                <RotatingText text={rotatingTexts} duration={3000}
                                              transition={{duration: 0.5, ease: "easeInOut"}} className="text-primary font-semibold"/>
                            </h4>

                            {/* Subtext */}
                            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in opacity-0 stagger-4">
                                The AI automation platform where teams and agents achieve more together.
                            </p>

                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0 stagger-5">
                                <InputButtonProvider>
                                    <InputButton>
                                        <InputButtonAction>Talk to Us</InputButtonAction>
                                        <InputButtonSubmit>Join the Waitlist</InputButtonSubmit>
                                    </InputButton>
                                    <InputButtonInput type="email" placeholder="your-email@example.com"/>
                                </InputButtonProvider>
                            </div>
                        </div>
                    </div>
                </WavyBackground>
            </div>
        </section>
    );
};

export default Hero;
