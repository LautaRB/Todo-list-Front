import { HeroSection } from '@components/HeroSection/HeroSection';
import { FeaturesSection } from '@components/Features/Features';
import { HowWorksSection } from '@components/HowWorks/HowWorks';
import { Pricing } from '@components/Pricing/Pricing';

export const LandingPage = () => {
	return (
		<div className="space-y-16 w-5/6 m-auto">
			<HeroSection />
			<FeaturesSection />
			<HowWorksSection />
			<Pricing />
		</div>
	);
};
