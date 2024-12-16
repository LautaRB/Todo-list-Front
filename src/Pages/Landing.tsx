import { HeroSection } from '@components/HeroSection/HeroSection';
import { Features as FeaturesSection } from '@components/Features/Features';
import { HowWorks as HowWorksSection } from '@components/HowWorks/HowWorks';
import { Pricing as PricingSection } from '@components/Pricing/Pricing';

export const Landing = () => {
	return (
		<div className="space-y-16 w-11/12 lg:w-5/6 m-auto">
			<HeroSection />
			<FeaturesSection />
			<HowWorksSection />
			<PricingSection />
		</div>
	);
};
