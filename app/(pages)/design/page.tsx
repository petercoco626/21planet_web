import { Button } from '@/components/base/button';
import { GradientButton } from '@/components/base/gradient-button';

export default function DesignPage() {
  return (
    <div>
      <div className="space-y-3">
        <GradientButton variant="gradient" size="middle">
          button
        </GradientButton>
        <GradientButton variant="gradient-full" size="middle">
          button
        </GradientButton>
        <Button variant="primary" size="middle">
          button
        </Button>
        <Button variant="secondary" size="middle">
          button
        </Button>
        <Button variant="tertiary" size="middle">
          button
        </Button>
        <Button variant="text" size="middle">
          button
        </Button>
      </div>
    </div>
  );
}
